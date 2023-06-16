import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Fade, Slide } from "react-awesome-reveal";
import './Banner.css'

const Banner = () => {
    return (
        <Carousel className='max-w-screen-xl h-5/6'>
            <div data-aos="fade-right">
                <img className='relative z-10' src="https://i.ibb.co/hWK3Lfg/8-Easy-Guitar-Songs-For-Every-Beginner-2.png" />
                <div className='absolute top-0 bg-gradient-to-r from-teal-300  z-20 w-full h-full opacity-60'></div>
                <div className='absolute text-2xl font-bold text-white z-40 top-56 left-20 w-2/4'>
                    <Slide>
                        <h3 className='text-start font-bold text-5xl text-yellow-300'>Learn Flute..!</h3>
                    </Slide>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <p className='text-start mt-5 font-thin text-3xl hover:text-yellow-300 duration-700'>In whispers of breeze, its melody sings,
                            A slender companion, the flute takes wing.
                            Crafted with care, a vessel of art,
                            It breathes life into notes, touching the heart.
                        </p>
                    </Fade>
                    <div className='text-start mt-5'>
                        <button className='p-2 btn btn-outline border-2 hover:border-yellow-300 hover:text-white text-white border-white hover:bg-transparent duration-500'>Learn more</button>
                    </div>
                </div>
            </div>

            <div>
                <img className='relative z-10' src="https://i.ibb.co/KqHQFNQ/8-Easy-Guitar-Songs-For-Every-Beginner-3.png" />
                <div className='absolute top-0 bg-gradient-to-r from-teal-300  z-20 w-full h-full opacity-60'></div>
                <div className='absolute text-2xl font-bold text-white z-40 top-56 left-20 w-2/4'>
                    <h3 className='text-start font-bold text-5xl text-yellow-300'>Learn Piano..!</h3>
                    <p className='text-start mt-5 font-thin text-3xl hover:text-yellow-300 duration-700'>Amidst the hush of velvet night,
                        A symphony awakes, bathed in moonlight.
                        Its ebony and ivory keys unfold,
                        A tale of emotions, both gentle and bold.</p>
                    <div className='text-start mt-5'>
                        <button className='p-2 btn btn-outline border-2 hover:border-yellow-300 hover:text-white text-white border-white hover:bg-transparent duration-500'>Learn more</button>
                    </div>
                </div>
            </div>
            <div>
                <img className='relative z-10' src="https://i.ibb.co/CQXLVm3/8-Easy-Guitar-Songs-For-Every-Beginner.jpg" />
                <div className='absolute top-0 bg-gradient-to-r from-teal-300  z-20 w-full h-full opacity-60'></div>
                <div className='absolute text-2xl font-bold text-white z-40 top-56 left-20 w-2/4'>
                    <h3 className='text-start font-bold text-5xl text-yellow-300'>Learn Guitar..!</h3>
                    <p className='text-start mt-5 font-thin text-3xl hover:text-yellow-300 duration-700'>In the hands of a troubadour, it comes alive,
                        A six-stringed companion, ready to thrive.
                        With nimble fingers, it dances and strums,
                        A guitar's magic, the heartstrings it plums.</p>
                    <div className='text-start mt-5'>
                        <button className='p-2 btn btn-outline border-2 hover:border-yellow-300 hover:text-white text-white border-white hover:bg-transparent duration-500'>Learn more</button>
                    </div>
                </div>
            </div>
            <div>
                <img className='relative z-10' src="https://i.ibb.co/gD6r6SP/8-Easy-Guitar-Songs-For-Every-Beginner.png" />
                <div className='absolute top-0 bg-gradient-to-r from-teal-300  z-20 w-full h-full opacity-60'></div>
                <div className='absolute text-2xl font-bold text-white z-40 top-56 left-20 w-2/4'>
                    <h3 className='text-start font-bold text-5xl text-yellow-300'>Learn Bass Guitar..!</h3>
                    <p className='text-start mt-5 font-thin text-3xl hover:text-yellow-300 duration-700'>In the hands of a troubadour, it comes alive,
                        A six-stringed companion, ready to thrive.
                        With nimble fingers, it dances and strums,
                        A guitar's magic, the heartstrings it plums.</p>
                    <div className='text-start mt-5'>
                        <button className='p-2 btn btn-outline border-2 hover:border-yellow-300 hover:text-white text-white border-white hover:bg-transparent duration-500'>Learn more</button>
                    </div>
                </div>
            </div>
            <div>
                <img className='relative z-10' src="https://i.ibb.co/QMCZKTs/8-Easy-Guitar-Songs-For-Every-Beginner-1.png" />
                <div className='absolute top-0 bg-gradient-to-r from-teal-300  z-20 w-full h-full opacity-60'></div>
                <div className='absolute text-2xl font-bold text-white z-40 top-56 left-20 w-2/4'>
                    <h3 className='text-start font-bold text-5xl text-yellow-300'>Learn Drum's..!</h3>
                    <p className='text-start mt-5 font-thin text-3xl hover:text-yellow-300 duration-700'>In the rhythm's heart, the drum takes its stand,
                        A primal force, commanding the band.
                        With sturdy frame, it resonates deep,
                        Awakening souls from their slumbered sleep.</p>
                    <div className='text-start mt-5'>
                        <button className='p-2 btn btn-outline border-2 hover:border-yellow-300 hover:text-white text-white border-white hover:bg-transparent duration-500'>Learn more</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;