import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from '../../assets/5707-error.json'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error} = useRouteError();
    return (
        <div className='flex flex-col items-center my-20'>
        <p className='h-80 w-80 text-white'><Lottie animationData={errorAnimation}></Lottie></p>
        <p className='text-9xl font-extrabold'>404</p>
        <p className='font-semibold text-2xl'>{error?.message}</p>
     </div>
    );
};

export default ErrorPage;