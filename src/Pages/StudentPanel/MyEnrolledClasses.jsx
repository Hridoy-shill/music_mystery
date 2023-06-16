import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Tittle from '../../Common_Component\'s/Tittle';
import useTitle from '../../Hooks/useTitle';

const MyEnrolledClasses = () => {
    useTitle('Dashboard/My Enrolled Classes')
    const [myClasses, setMyClasses] = useState([]);
    console.log(myClasses);

    const { user } = useContext(AuthContext);
    const { email } = user || {}


    useEffect(() => {
        fetch(`https://the-music-mystrey-server.vercel.app/myEnrolledClasses/${email}`)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [user])

    return (
        <div className='w-full'>
            <Tittle heading={"My Enrolled Classes"}></Tittle>
            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className="table mt-8">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Course Image</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Course Name</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Teacher Name</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Payed</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map(enrolledClass => <tr key={enrolledClass._id} enrolledClass={enrolledClass}>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-16 h-1w-16">
                                                <img src={enrolledClass.courseImg}/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{enrolledClass.courseName}</td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{enrolledClass.teacherName}</td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>$ {enrolledClass.Price}</td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{enrolledClass.transactionId}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;