import React from 'react';
import Banner from './HomeComponents/BannerSection/Banner';
import StudentReviews from '../StudentReviews/StudentReviews';
import PopularClassesSection from './HomeComponents/PopularClassesSection/PopularClassesSection';
import PopularInstructors from './HomeComponents/PopularInstructors/PopularInstructors';
import useTitle from '../../Hooks/useTitle';


const HomePage = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>

            <div>
                <PopularClassesSection></PopularClassesSection>
            </div>

            <div>
                <PopularInstructors></PopularInstructors>
            </div>

            <StudentReviews></StudentReviews>
        </div>
    );
};

export default HomePage;