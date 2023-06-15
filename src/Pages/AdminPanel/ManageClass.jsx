import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import Swal from 'sweetalert2';
import { reload } from 'firebase/auth';
import { Link } from 'react-router-dom';

const ManageClass = () => {

    const [classes, setClasses] = useState([])
    // const [reload, setReload] = useState()
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

    const handleApproved = (id) => {
        fetch(`http://localhost:5000/allClasses/Approved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Approved Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const newClasses = [...classes]
                    const index = newClasses.findIndex((text)=>text._id == id)
                    newClasses[index] = {...newClasses[index], status:'approved'}
                    setClasses(newClasses)
                }
            })
    }
    const handleDenied = (id) => {
        fetch(`http://localhost:5000/allClasses/Denied/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Denied Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const newClasses = [...classes]
                    const index = newClasses.findIndex((text)=>text._id == id)
                    newClasses[index] = {...newClasses[index], status:'denied'}
                    setClasses(newClasses)
                }
            })
    }

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
                                <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((singleclass, index) => <tr key={singleclass._id} singleclass={singleclass}>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{index + 1}</td>
                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-full">
                                                    <img src={singleclass.photo} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleclass.className}</td>

                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleclass.musicianName}</td>

                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleclass.instructorEmail}</td>

                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleclass.Seats}</td>

                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>${singleclass.Price}</td>

                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{singleclass.status}</td>

                                    <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center space-y-2'>
                                        <button onClick={() => handleApproved(singleclass._id)} className='btn btn-sm hover:bg-green-500 font-bold w-[100px] hover:border-black' disabled={singleclass.status == 'approved' && true}>approved</button>
                                        <button onClick={() => handleDenied(singleclass._id)} className='btn btn-sm hover:bg-red-500 font-bold w-[100px] hover:border-black' disabled={singleclass.status == 'denied' && true}>denied</button>

                                        {singleclass.status === 'denied' ?
                                            <Link to={`/dashboard/feedback/${singleclass._id}`} className='btn btn-sm hover:bg-slate-500 hover:text-white font-bold w-[100px] hover:border-black'>Feedback</Link>
                                            :
                                            <></>
                                        }
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