import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    const { _id, name, img, ridePrice, discountDay, rideAge, description } = props.service;
    const history = useHistory();
    const handleBookingClick = () => {
        history.push(`/services/${_id}`);
    }
    return (
        <div>
            <Col>
                <Card className='shadow card-round h-100 border-0 card-backgrond'>
                    <Card.Img className='mx-auto p-2 height-img rounded-img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center mb-3 text-uppercase'>{name}</Card.Title>
                        <Card.Text>
                            <p className='text-center'>{description.slice(0, 100)}</p>
                            {/* <hr class="bg-danger border-2 border-top border-primary"/> */}
                            <h3 className='text-center'><i class="fas fa-tags"></i> {ridePrice} tk</h3>
                            <p className='text-center'><i class="fas fa-calendar-week"></i> {discountDay} (Discount Day)</p>
                            <p className='text-center'><i class="fab fa-airbnb"></i> Age Upto: {rideAge}</p>
                            <button onClick={handleBookingClick} className='btn btn-secondary w-100'>Book Now</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;