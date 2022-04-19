import React from 'react';
import { Carousel, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Banner.css';
import bannerImg1 from '../../../images/banner/banner-image-1.jpg';
import bannerImg2 from '../../../images/banner/banner-image-2.jpg';
import Header from '../../Shared/Header/Header';
const Banner = () => {
    return (
        <div className='banner'>
            <div className=' banner-heder'>
                <Header></Header>
            </div>
            <div>
                <Carousel fade>
                    <Carousel.Item >
                        <div className='carsuel-items'>
                        <img
                            className="d-block w-100 banner-img"
                            src={bannerImg2}
                            alt="First slide"
                            />
                            <div className="overlay"></div>
                        </div>
                        <Carousel.Caption className='carusel-cations'>
                            <h5>Our Park Choose A Holiday Home</h5>
                            <h1 className='carusel-header'>A Full Day Of Fun For The <br /> Entire Family</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos illo voluptatibus dolor optio laboriosam sit recusandae iste porro molestiae.</p>
                            <button>GET STARTED</button>
                            <button>CONTACT US</button>
                        </Carousel.Caption>
                        
                    </Carousel.Item>


                    <Carousel.Item>
                    <div className='carsuel-items'>
                        <img
                            className="d-block w-100 banner-img"
                            src={bannerImg1}
                            alt="First slide"
                            />
                            <div className="overlay"></div>
                        </div>

                        <Carousel.Caption className='carusel-cations'>
                        <h5>Our Park Choose A Holiday Home</h5>
                            <h1 className='carusel-header'>We Offer Premier <br /> Holiday Attractions</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos illo voluptatibus dolor optio laboriosam sit recusandae iste porro molestiae.</p>
                            <button>GET STARTED</button>
                            <button>CONTACT US</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <Container className='banner-text'>
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
            </Container> */}
        </div>
    );
};

export default Banner;