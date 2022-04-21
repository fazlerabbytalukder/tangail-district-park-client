import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    const { _id, name, img, ridePrice, rideAge, description } = props.service;
    const history = useHistory();
    const handleBookingClick = () => {
        history.push(`/services/${_id}`);
    }
    return (
        <div>
            <Col>
                <Card className='shadow card-round border-0 card-backgrond card-height position-relative'>
                    <Card.Img className='mx-auto p-2 height-img rounded-img' variant="top" src={img} />
                    <Card.Body>
                        <div className='d-flex justify-content-between align-items-center price-discount'>
                            <button className='ride-price-button'><i class="fas fa-tags price-tag"></i> {ridePrice}</button>
                            <button className='plan-button rounded-pill'>plan</button>
                            </div>
                        <Card.Title className='text-center mb-3 text-uppercase card-title'>{name}</Card.Title>
                        <Card.Text>
                            <p className='text-center'>{description.slice(0, 100)}</p>
                            <p className='text-center'><i class="fab fa-airbnb"></i> Age Upto: {rideAge}</p>
                            <button onClick={handleBookingClick} className='book-now-button w-50 position-absolute bottom-0 start-0 mb-3'>Book Now</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;