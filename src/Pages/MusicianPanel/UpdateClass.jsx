import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const classDetails = useLoaderData()
    console.log(classDetails);
    const {className, Price, Seats, photo, _id } = classDetails
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { className, seats, photo, price } = data;
        console.log({ className, seats, photo, price });
        const Seats = parseFloat(seats);
        const Price = parseFloat(price);
        console.log(Seats, Price);

        const updateClass = { className, Seats, Price, photo };
        console.log(updateClass);
        

        fetch(`http://localhost:5000/updateClass/${_id}`, {

        method: "PUT",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(updateClass)
       },) 
       .then(res => res.json())
       .then(data => {
        if(data.modifiedCount > 0){
            Swal.fire({
                icon: 'success',
                title: 'Update Successful',
              })
        }
       })

    }

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-10 space-y-4 w-3/4 mx-auto border-2 border-teal-500 rounded-md mt-10'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name"><span className='font-bold text-lg'>Class name:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("className", { required: true })} name="className" id="" placeholder='class Name' defaultValue={className}/>
                        </div>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="Photo"><span className='font-bold text-lg'>Class Image:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("photo", { required: true })} name="photo" id="" placeholder='Photo URL' required defaultValue={photo}/>
                        </div>
                    </div>
                  
                    
                    <div className='flex gap-2'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="name"><span className='font-bold text-lg'>Available seats:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="number" {...register("seats", { required: true })} name="seats" id="" placeholder='Available seats' required defaultValue={Seats}/>
                        </div>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="price"><span className='font-bold text-lg'>Price:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="number" {...register("price", { required: true })} name="price" id="" placeholder='Class price' required defaultValue={Price}/>
                        </div>
                    </div>

                    <div>
                        <input className='btn btn-outline hover:bg-transparent hover:text-black hover:border-teal-500 hover:border-2 border-teal-500 border-2 hover:bg-teal-500 duration-300 w-full font-bold text-base mt-8' type="submit" name="Submit" id="" value={'Update class'} />
                    </div>

                </form>
        </div>
    );
};

export default UpdateClass;