import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUser, FaUserGraduate, FaUserShield, FaUserSlash } from 'react-icons/fa';
import Tittle from '../../Common_Component\'s/Tittle';
import Swal from 'sweetalert2';


const AllUsers = () => {
    
    const { data: users = [], refetch } = useQuery(['allUsers'], async () => 
    {
        const token = localStorage.getItem('access-token');
        const res = await fetch('http://localhost:5000/allUsers',{
            headers:{
                authorization: `bearer ${token}`
            }
        })
        return res.json();
    })
    console.log(users);

    // Make Admin functionality
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/allUsers/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Make Admin Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    //Make Musician functionality 
    const handleMakeMusician = id => {
        fetch(`http://localhost:5000/allUsers/musician/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Make Musician Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // deleted user functionality
    const handleDeleteUser = (user) => {
        console.log(user);
    }

    return (
        <>
            <Tittle heading={'Manage User'}></Tittle>
            <div className="overflow-x-auto w-full px-10 mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg font-bold text-black'>#</th>
                            <th className='text-lg font-bold text-black'>Name</th>
                            <th className='text-lg font-bold text-black'>email</th>
                            <th className='text-lg font-bold text-black'>Admin</th>
                            <th className='text-lg font-bold text-black'>Musician </th>
                            <th className='text-lg font-bold text-black'>Student</th>
                            <th className='text-lg font-bold text-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th className=''>{index + 1}</th>
                                <td className='font-semibold text-base text-black'>{user.name}</td>
                                <td className='font-semibold text-base text-black'>{user.email}</td>

                                <td>{user.role === 'admin' ? <span className='font-bold text-base bg-teal-500 p-2 text-yellow-200 rounded-lg'>Admin</span> : <button onClick={() => handleMakeAdmin(user._id)} className='p-2 hover:bg-yellow-300 hover:rounded-full duration-500 w-fit'><FaUserShield className='w-6 h-6 '></FaUserShield></button>}</td>


                                <td>{user.role === 'musician' ? <span className='font-bold text-base bg-teal-500 p-2 text-yellow-200 rounded-lg'>Musician</span> : <button onClick={() => handleMakeMusician(user._id)} className='p-2 hover:bg-yellow-300 hover:rounded-full duration-500 w-fit'><FaUserGraduate className='w-6 h-6 '></FaUserGraduate></button>}</td>

                                <td>{user.role === 'student' ? <span className='font-bold text-base bg-teal-500 p-2 text-yellow-200 rounded-lg'>Student</span> : <button className='p-2 hover:bg-yellow-300 hover:rounded-full duration-500 w-fit'><FaUser className='w-6 h-6 '></FaUser></button>}</td>

                                <td><button onClick={() => handleDeleteUser(user._id)} className='p-2 hover:bg-yellow-300 hover:rounded-full duration-500 w-fit'><FaTrash className='w-6 h-6 '></FaTrash></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;