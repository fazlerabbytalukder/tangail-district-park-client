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
                            <p className='carusel-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos illo voluptatibus dolor optio laboriosam sit recusandae iste porro molestiae.</p>
                            <button className='button-design-2 me-3'>GET STARTED</button>
                            <button className='button-design-1'>CONTACT US</button>
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
                            <p className='carusel-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos illo voluptatibus dolor optio laboriosam sit recusandae iste porro molestiae.</p>
                            <button className='button-design-2 me-3'>GET STARTED</button>
                            <button className='button-design-1'>CONTACT US</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;