import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUserGraduate, FaUserShield, FaUserSlash } from 'react-icons/fa';
import Tittle from '../../Common_Component\'s/Tittle';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['allUsers'], async () => {
        const res = await fetch('http://localhost:5000/allUsers')
        return res.json();
    })
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
                        <th className='text-lg font-bold text-black'>Instructor</th>
                        <th className='text-lg font-bold text-black'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr user={user._id} className="bg-base-200">
                            <th className=''>{index + 1}</th>
                            <td className='font-semibold text-base text-black'>{user.name}</td>
                            <td className='font-semibold text-base text-black'>{user.email}</td>
                            <td><button className='p-2 hover:bg-yellow-300 hover:rounded-full duration-500'><FaUserShield className='w-6 h-6'></FaUserShield></button></td>
                            <td><button className='p-2 hover:bg-yellow-300 hover:rounded-full duration-500'><FaUserGraduate className='w-6 h-6'></FaUserGraduate></button></td>
                            <td><button className='p-2 hover:bg-yellow-300 hover:rounded-full duration-500'><FaUserSlash className='w-6 h-6'></FaUserSlash></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </>
    );
};

export default AllUsers;