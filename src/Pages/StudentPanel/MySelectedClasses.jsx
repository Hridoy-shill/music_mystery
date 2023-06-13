import React, { useEffect, useState } from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import { FaRegTrashAlt, FaWallet } from 'react-icons/fa';
import Swal from 'sweetalert2';


const MySelectedClasses = () => {

    const [myClasses, setMyClasses] = useState([])
    console.log(myClasses);


    useEffect(() => {
        fetch('http://localhost:5000/selectedAllClasses')
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [])

    const handlePayment = (id) => {
        console.log(id);
    }


    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/selectedClass/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='w-full'>
            <Tittle heading={"My Selected Classes"}></Tittle>
            <div className="overflow-x-auto w-11/12 mx-auto mt-10">
                <table className="table">
                    <thead>
                        <tr className='text-lg text-black font-bold'>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>No</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Class image</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Class Name</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Musician</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Price</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Seats</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Payment</th>
                            <th className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((myClass, index) => <tr key={myClass._id} myClass={myClass}>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{index + 1}</td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myClass.photo} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{myClass.className}</td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{myClass.musicianName}</td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>${myClass.Price}</td>
                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'>{myClass.Seats}</td>

                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'><button onClick={() => handlePayment(myClass._id)}><FaWallet className='mx-auto my-auto w-8 h-8'></FaWallet></button></td>

                                <td className='font-bold text-black text-base border-2 border-black hover:bg-teal-500 duration-700 text-center'><button onClick={() => handleDelete(myClass._id)}><FaRegTrashAlt className='mx-auto my-auto w-8 h-8'></FaRegTrashAlt></button></td>

                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;