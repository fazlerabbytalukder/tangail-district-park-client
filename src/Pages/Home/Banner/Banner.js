import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                            <h1 className='carusel-header extra-bold'>A Full Day Of Fun For The <br /> Entire Family</h1>
                            <p className='px-5'><span className='px-5'>Tangail District Park offer you to trip with your family and enjoy our beautifull weather and park environemnt. All Kinds of facilities will provied of our TD park managment.</span></p>
                            <a href=""><button className='button-design-2 me-3'>GET STARTED</button></a>
                            <a href=""><button className='button-design-1'>CONTACT US</button></a>
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
                            <h1 className='carusel-header extra-bold'>We Offer Premier <br /> Holiday Attractions</h1>
                            <p className='px-5'><span className='px-5'>We Will provide holiday offer and if you choose this offer you will discound all rids. This package is only for the people who will books the ride before visit our park.</span></p>
                            <a href=""><button className='button-design-2 me-3'>GET STARTED</button></a>
                            <a href=""><button className='button-design-1'>CONTACT US</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;