import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';

const MyBooking = () => {
    const [myBooking, setMyBooking] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/myBooking/${user.uid}`)
            .then(res => res.json())
            .then(data => setMyBooking(data))
    }, [])


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myBooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBooking = myBooking.filter(user => user._id !== id);
                        setMyBooking(remainingBooking);
                    }
                });
        }
    }
    return (
        <Container>
            <Header></Header>
            <Row xs={1} md={3} className="g-3">
                {
                    myBooking.map(booking => <Col>
                        <Card className='shadow rounded-card border-0 mt-5'>
                            <Card.Img className='img-fluid w-100' variant="top" src={booking.img} />
                            <Card.Body>
                                <Card.Title className='text-center'>{booking.service}</Card.Title>
                                <p className='text-center'>{booking.email}</p>
                                <p className='text-center'><b>Booking Date:</b> {booking.date}</p>
                                <p className='text-center'><b>Booking Price:</b> {booking.price}</p>
                                <p className='text-center'><b>Status:</b> {booking.status} {booking.status === "pending" ? <i class="fas fa-times text-danger fs-5"></i> : <i className="fas fa-check text-success fs-5"></i>}</p>
                                <div className="d-flex justify-content-around py-3">
                                <button onClick={() => handleDelete(booking._id)} className='btn btn-secondary w-100'>Delete</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default MyBooking;