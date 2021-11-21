import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Services from '../Services/Services';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Discount></Discount>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;