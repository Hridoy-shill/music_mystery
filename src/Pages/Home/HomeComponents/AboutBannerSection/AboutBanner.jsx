import React from 'react';
import institute from '../../../../../public/1000s.jpg'
import Tittle from '../../../../Common_Component\'s/Tittle';

const AboutBanner = () => {
    return (
        <>
        <Tittle heading={'Our Campus'}></Tittle>
            <div className='md:w-3/4 w-full md:flex mx-auto rounded gap-20 bg-[#F7F7F7] mt-8'>
                <div className='md:w-[50%] p-2 md:0'>
                    <img className='rounded-lg md:rounded-none' src={institute} alt="" />
                </div>
                <div className='md:w-[50%] p-4 md:p-0 flex flex-col justify-center space-y-5'>
                    <h2 className='text-4xl'>Music Mystery <br /> <span>Campus</span></h2>
                    <p className='text-gray-500'>We offers full-day and half-day music camps for kids of all ages and skill levels – including beginners!
                        Summer camps give students an opportunity to focus on one instrument or genre for a whole week.</p>
                    <button className='w-fit border rounded-full bg-teal-500 px-4 py-2 text-lg text-white font-semibold hover:text-black hover:bg-[#FDE047]'>Learn more!</button>
                </div>
            </div>
        </>
    );
};

export default AboutBanner;