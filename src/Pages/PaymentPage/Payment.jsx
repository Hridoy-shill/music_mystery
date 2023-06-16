import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Tittle from '../../Common_Component\'s/Tittle';
import useTitle from '../../Hooks/useTitle';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    useTitle('Payment')
    const [classData, setClassData] = useState({});
    console.log(classData);

    const { Price, Seats, className, photo, musicianName, userEmail, classId } = classData;

    const allData = { Seats, className, photo, musicianName, userEmail, classId }

    console.log(Price, allData);

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        fetch(`https://the-music-mystrey-server.vercel.app/singleClassData/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClassData(data)
            })
    }, [id])


    return (
        <>
            <div className='mb-5'>
                <Tittle heading={'Pay Fees'}></Tittle>
            </div>
            <div className='w-2/4 mx-auto border-2 border-teal-500 p-3 rounded-lg'>
                <p className='font-bold text-xl text-center border-2 border-teal-500 hover:bg-teal-500 duration-500 hover:border-teal-500 p-2 mt-5 rounded-lg'>Payment Amount: ${Price}</p>
                <Elements stripe={stripePromise}>
                    <div className='mt-5'>
                        <CheckoutForm Price={Price} allData={allData}></CheckoutForm>
                    </div>
                </Elements>
            </div>
        </>
    );
};

export default Payment;