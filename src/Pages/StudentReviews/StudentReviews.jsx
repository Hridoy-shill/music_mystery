import React from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import bg from '../../../public/bg.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";


const StudentReviews = () => {
    return (
        <div className='mb-10'>
            <div className='my-10'>
                <Tittle heading={"Our Student's review"}></Tittle>
            </div>
            <div className='relative'>
                <img className='p-2' src={bg} alt="" />
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='font-bold text-white text-lg'>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>


        </div>
    );
};

export default StudentReviews;