import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import UserReview from '../UserReview/UserReview';
import WelcomeBanner from '../WelcomeBanner/WelcomeBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeBanner></WelcomeBanner>
            <Services></Services>
            <UserReview></UserReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;