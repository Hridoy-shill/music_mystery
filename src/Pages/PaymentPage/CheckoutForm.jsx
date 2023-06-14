import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';


const CheckoutForm = ({ Price , allData}) => {
    const{Seats, className, photo, musicianName, userEmail} = allData;
    // console.log(Seats, className, photo, musicianName, userEmail);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)

    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    
    console.log(Price);
    useEffect(() => {
       
        if (Price > 0) {
            console.log('19 noline', Price);
            axios.post('http://localhost:5000/create-payment-intent', {Price})
            .then(res => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret)
            })
        }

        // console.log(data.clientSecret);
        
    }, [Price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log(card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
        }
        else {
            setError('')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'WOW!!! your payment is done',
                showConfirmButton: false,
                timer: 1500
            })
            console.log('PaymentMethod', paymentMethod);
            setProcessing(true)
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false)

        if(paymentIntent.status === 'succeeded'){
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)

            const payment = {user: user?.email, transactionId:paymentIntent.id, Price, Seats:Seats, courseName:className, courseImg:photo, teacherName:musicianName, studentEmail:userEmail}
            console.log(payment);

            axios.post('http://localhost:5000/allPayments', {payment})
            .then(res => {
                console.log(res.data);
            })
            
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-outline hover:border-teal-500 border-teal-500 hover:bg-teal-500 mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {transactionId && <p className='text-green-500 font-semibold mt-2'>Payment successfully TransactionID:{transactionId}</p>}
            {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
        </div>
    );
};

export default CheckoutForm;