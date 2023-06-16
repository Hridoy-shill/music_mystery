import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Tittle from '../../Common_Component\'s/Tittle';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        const { className, instructorEmail, musicianName, seats, photo, price, status, feedback, totalEnrolled } = data;
        console.log({ className, instructorEmail, musicianName, seats, photo, price, status, feedback, totalEnrolled });
        const Seats = parseFloat(seats);
        const Price = parseFloat(price);
        const Students = parseFloat(totalEnrolled);
        console.log(Seats, Price);

        const newClass = { className, instructorEmail, musicianName, Seats, Price, photo, status, feedback, Students};
        const token = localStorage.getItem('access-token');

        fetch('https://the-music-mystrey-server.vercel.app/addClasses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`
            },
            body: JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Class added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
            }
        })
    }

    return (
        <>
            <Tittle heading={'Add Class'}></Tittle>
            <div className='w-full'>

                <form onSubmit={handleSubmit(onSubmit)} className='p-10 space-y-4 w-3/4 mx-auto border-2 border-teal-500 rounded-md mt-10'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name"><span className='font-bold text-lg'>Class name:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("className", { required: true })} name="className" id="" placeholder='class Name' required />
                        </div>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="Photo"><span className='font-bold text-lg'>Class Image:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("photo", { required: true })} name="photo" id="" placeholder='Photo URL' required />
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name"><span className='font-bold text-lg'>Instructor name:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded text-slate-400' type="text" {...register("musicianName", { required: true })} name="musicianName" id="" placeholder='Musician name' value={user.displayName} readOnly />
                        </div>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="email"><span className='font-bold text-lg'>Instructor email:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded text-slate-400' type="email" {...register("instructorEmail", { required: true })} name="email" id="" placeholder='Musician Email' value={user.email} readOnly />
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name"><span className='font-bold text-lg'>Available seats:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="number" {...register("seats", { required: true })} name="seats" id="" placeholder='Available seats' required />
                        </div>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="price"><span className='font-bold text-lg'>Price:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="number" {...register("price", { required: true })} name="price" id="" placeholder='Class price' required />
                        </div>
                    </div>

                    <div className='w-full hidden'>
                        <label htmlFor="status"><span className='font-bold text-lg'>Status:</span></label>
                        <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("status", { required: true })} name="status" id="" placeholder='Class price' required  value={'pending'}/>
                    </div>

                    <div className='w-full hidden'>
                        <label htmlFor="status"><span className='font-bold text-lg'>Feedback:</span></label>
                        <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("feedback", { required: true })} name="feedback" id="" placeholder='feedback' required  value={'a'}/>
                    </div>

                    <div className='w-full hidden'>
                        <label htmlFor="totalEnrolled"><span className='font-bold text-lg'>totalEnrolled:</span></label>
                        <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="number" {...register("totalEnrolled", { required: true })} name="totalEnrolled" id="" placeholder='totalEnrolled' required  value={0}/>
                    </div>

                    <div>
                        <input className='btn btn-outline hover:bg-transparent hover:text-black hover:border-teal-500 hover:border-2 border-teal-500 border-2 hover:bg-teal-500 duration-300 w-full font-bold text-base mt-5' type="submit" name="Submit" id="" value={'Add class'}/>
                    </div>

                </form>
            </div>
        </>
    );
};

export default AddClass;