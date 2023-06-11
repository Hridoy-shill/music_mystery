import { multiFactor } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import { FaRegSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const MyClasses = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    const {email} = user;
    console.log(email);
    

    const token = localStorage.getItem('access-token');
    const [myClasses, setMyClasses] = useState([]);
    console.log(myClasses);


    useEffect(() => {
        fetch(`http://localhost:5000/myClasses/${email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyClasses(data);
            })
    }, [])
    return (
        <>
            <div className='mb-10'>
                <Tittle heading={'My classes'}></Tittle>
            </div>
            <div className="w-full px-5 mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Image</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Class</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Seats</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Students</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Price</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Status</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Feedback</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myClasses.map(myClass => <tr key={myClass._id} myClass={myClass} className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>
                            <td className='border-'>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-circle w-16 h-w-16">
                                            <img src={myClass.photo} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-2 border-black'>{myClass.className}</td>
                            <td className='border-2 border-black'>{myClass.Seats}</td>
                            <td className='border-2 border-black'>DekateHobe</td>
                            <td className='border-2 border-black'>{myClass.Price} $</td>
                            <td className='border-2 border-black'>{myClass.status}</td>
                            <td className='border-2 border-black'>DekateHobe</td>
                            <td className='border-2 border-black'><Link to={`/dashboard/musicianClasses/${myClass._id}`}><button><FaRegSun className='mx-auto my-auto w-8 h-8'></FaRegSun></button></Link></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyClasses;