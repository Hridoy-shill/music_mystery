import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Tittle from '../../Common_Component\'s/Tittle';

const PaymentHistory = () => {
    const [payments, setPayment] = useState([]);
    const { user } = useContext(AuthContext);
    const { email } = user || {}
    console.log(email);

    useEffect(() => {
        fetch(`http://localhost:5000/myEnrolledClasses/${email}`)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [user])
    console.log(payments);
    const sortedPaymentHistory = payments.map((payment) => payment).sort((a, b) => new Date(b.Date) - new Date(a.Date));

    return (
        <div className='w-full'>
        <Tittle heading={"My Payment History"}></Tittle>
        <div className="overflow-x-auto w-11/12 mx-auto">
            <table className="table mt-8">
                {/* head */}
                <thead>
                    <tr className='text-center'>
                        <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Course Name</th>

                        <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>student Email</th>
                       
                        <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Payed</th>
                        <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Id</th>
                        <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Payment Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedPaymentHistory.map(enrolledClass => <tr key={enrolledClass._id} enrolledClass={enrolledClass}>
                            
                            <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{enrolledClass.courseName}</td>
                            <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{enrolledClass.studentEmail}</td>
                            <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>$ {enrolledClass.Price}</td>
                            <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{enrolledClass.transactionId}</td>
                            <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{enrolledClass.Date}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;