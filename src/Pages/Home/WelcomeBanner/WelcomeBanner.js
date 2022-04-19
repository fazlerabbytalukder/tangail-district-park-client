import React from 'react';
import welsomeImg from '../../../images/banner/welcome-img.jpg';
import './WelcomeBanner.css';

const WelcomeBanner = () => {
    return (
        <div className='welcame-banner-bg'>
            <div className='container pt-5'>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center pb-5">
                        <div className='text-white'>
                            <small className='sub-text'>Impressions</small><br />
                            <h1 className='welcome-text'>Welcome To Our<br />Amusment Park!</h1>
                            <div className='w-service my-4'>
                                <p><i class="fa-solid fa-angles-right me-2"></i> Warm Water Pool</p>
                                <p><i class="fa-solid fa-angles-right me-2"></i> Best Attractions</p>
                                <p><i class="fa-solid fa-angles-right me-2"></i> New Imperssions</p>
                                <p><i class="fa-solid fa-angles-right me-2"></i> Fantastic family Holidays</p>
                            </div>
                            <button className='button-design-1'>Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center pb-5">
                        <img className='img-fluid' src={welsomeImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;