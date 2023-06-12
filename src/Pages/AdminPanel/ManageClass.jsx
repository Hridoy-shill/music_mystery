import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tittle from '../../Common_Component\'s/Tittle';

const ManageClass = () => {

    const [classes, setClasses] = useState([])
    console.log(classes);

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        axios.get('http://localhost:5000/allClasses', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setClasses(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [])

    return (
        <>
            <Tittle heading={'Manage Classes'}></Tittle>
            <div className='w-full px-3 mt-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>No</th>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Class Image</th>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Class name</th>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Instructor name</th>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Instructor email</th>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Available seats</th>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Price</th>
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((singleClass, index) => <tr key={singleClass._id} singleClass={singleClass}>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{index + 1}</td>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-full">
                                                    <img src={singleClass.photo} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleClass.className}</td>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleClass.musicianName}</td>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleClass.email}</td>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleClass.Seats}</td>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>${singleClass.Price}</td> 
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center space-y-2'>
                                        <button className='btn btn-sm hover:bg-green-500 font-bold w-[100px] hover:border-black'>approved</button>
                                        <button className='btn btn-sm hover:bg-red-500 font-bold w-[100px] hover:border-black'>denied</button>
                                        <button className='btn btn-sm hover:bg-stone-400 font-bold w-[100px] hover:border-black'>pending</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default ManageClass;