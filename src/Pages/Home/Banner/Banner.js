import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Banner.css';
import banner from '../../../images/banner/banner1.png';
import banner1 from '../../../images/banner/banner2.png';

const Banner = () => {
    return (
        <div className='banner'>
            <Container className='banner-text'>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col>
                        <img className='img-fluid' src={banner1} alt="" />
                    </Col>
                    <Col>
                        <h2 className='sub-heading mt-3 '>Park Lover?</h2>
                        <h1 className='heading  fw-bold'>Find Here Best Park</h1>
                        <h5 className='slogan mb-4 '>Please Book Our Services</h5>
                        <InputGroup className="mb-3 w-50">
                            <FormControl
                                placeholder="Service Name"
                                aria-label="Service Name"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                        </InputGroup>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Banner;