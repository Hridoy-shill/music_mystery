import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const FeedBack = () => {

    useTitle('Dashboard/Feedback')
    // const data = useLoaderData();
    // console.log(data);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const onSubmit = (data) => {
        console.log(data)
        const { feedback } = data;
        
        const adminFeedback = { feedback: feedback }
        console.log(adminFeedback ,id);

        fetch(`https://the-music-mystrey-server.vercel.app/admin/feedback/${id}`, {

            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminFeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Feedback sended',
                    })
                    reset();
                }
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='p-10 space-y-4 w-[500px]'>
                <div className='flex flex-col border-2 shadow-lg p-10'>
                    <p className='font-bold text-3xl text-center mb-3 border-b-2 border-teal-500 p-3 w-fit mx-auto'>feedback:</p>
                    <textarea className='border-2 border-teal-500 p-2 bg-slate-100 rounded' name="feedback" id="" cols="20" rows="5" {...register("feedback", { required: true })}></textarea>
                    <input className='btn btn-outline hover:text-black hover:border-teal-500 hover:border-2 border-teal-500 border-2 hover:bg-teal-500 duration-300 w-full font-bold text-base mt-5' type="submit" name="Submit" id="" value={'Send'} />
                </div>
            </form>
        </div>
    );
};

export default FeedBack;