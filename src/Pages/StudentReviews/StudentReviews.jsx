import React, { useEffect, useState } from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import bg from '../../../public/bg.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


import { Navigation } from "swiper";


const StudentReviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://the-music-mystrey-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews);

    return (
        <div className='mb-10'>
            <div className='my-10'>
                <Tittle heading={"Our Student's review"}></Tittle>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id} className='font-bold text-white text-lg'>
                        <div>
                            <img className='p-2 absolute' src={bg} alt="" />
                            <div className='text-white relative flex justify-center items-center md:h-[450px] h-fit'>
                                <div className='md:bg-slate-400 bg-black md:bg-opacity-30 p-6 rounded-md md:w-3/5 w-fit h-[400px] text-center space-y-3'>
                                    <p className='font-bold text-2xl border-b-2 pb-2'>{review.name}</p>
                                    <p className='text-justify'>{review.details}</p>
                                    <p>{review.rating}</p>
                                    <Rating className='mx-auto' style={{ maxWidth: 150}} value={review.rating} readOnly/>
                                </div></div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </div>
    );
};

export default StudentReviews;