import React from 'react';
import Banner from './HomeComponents/BannerSection/Banner';
import StudentReviews from '../StudentReviews/StudentReviews';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <StudentReviews></StudentReviews>
        </div>
    );
};

export default HomePage;