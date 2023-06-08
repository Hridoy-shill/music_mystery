import React, { useContext, useState } from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import Lottie from "lottie-react";
import loginMotion from '../../assets/LoginMotion.json'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';


const SignUp = () => {

    const [show, setShow] = useState()
    const [error, setError] = useState('')
    const { createNewUser } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const { name, email, password, confirmPassword, photo } = data;

        if (password === confirmPassword) {
            createNewUser(email, password)
                .then(result => {
                    const createdUser = result.user;

                    updateProfile(createdUser, {
                        displayName: name,
                        photoURL: photo
                    })

                    Swal.fire({
                        icon: 'success',
                        text: 'SingUp successful',
                    })
                    setError('')
                    reset()
                })
                .catch(error => {
                    setError(error.message);
                })
        }
        else{
            setError('password not matched')
            // return
        }

    };


    return (
        <>
            <Tittle heading={'SignUp'}></Tittle>
            <div className="hero min-h-screen w-9/12 hover:w-10/12 duration-700 mx-auto">
                <div className="hero-content flex-col lg:flex-row w-[100%] border-2 hover:rounded-lg hover:border-teal-500 duration-700">
                    <div className="text-center lg:text-left w-[50%]">
                        <Lottie animationData={loginMotion}></Lottie>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='p-10 space-y-4 w-[500px]'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col'>
                                <label htmlFor="name"><span className='font-bold text-lg'>Name:</span></label>
                                <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("name", { required: true })} name="name" id="" placeholder='Type your name' required />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email"><span className='font-bold text-lg'>Email:</span></label>
                                <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="email" {...register("email", { required: true })} name="email" id="" placeholder='Type your Email' required />
                            </div>
                        </div>

                        <div className='flex gap-2'>

                            <div className='flex flex-col'>
                                <label htmlFor="password"><span className='font-bold text-lg'>Password:</span></label>
                                <div className='flex relative'>
                                    <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded w-[100%]' type={show ? 'text' : 'password'}  {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/ })} name="password" id="" placeholder='Type your password' required />
                                    <p onClick={() => setShow(!show)} className='p-3 ms-1 absolute right-0 top-1'>{
                                        show ? <span className=""><FaEyeSlash /></span> : <span className=""><FaEye /></span>
                                    }</p>
                                </div>
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one capital character A-Z one special character !@#$%</p>}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="Confirm Password"><span className='font-bold text-lg'>Confirm Password:</span></label>
                                <div className='flex relative'>
                                    <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type={show ? 'text' : 'password'} {...register("confirmPassword", { required: true })} name="confirmPassword" id="" placeholder='Confirm Password' required />
                                    <p onClick={() => setShow(!show)} className='p-3 ms-1 absolute right-0 top-1'>{
                                        show ? <span className=""><FaEyeSlash /></span> : <span className=""><FaEye /></span>
                                    }</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Photo"><span className='font-bold text-lg'>Photo URL:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="text" {...register("photo", { required: true })} name="photo" id="" placeholder='Photo URL' required />
                        </div>

                        <div>
                            <p className='font-bold text-red-700'>{error}</p>
                        </div>

                        <div>
                            <input className='btn btn-outline hover:bg-transparent hover:text-black hover:border-teal-500 hover:border-2 border-teal-500 border-2 hover:bg-teal-500 duration-300 w-full font-bold text-base' type="submit" name="Submit" id="" value={'LogIn'} />
                        </div>

                        <div className="divider">OR</div>

                        <div>
                            <div className='mt-4 flex justify-center'>
                                <button className='btn btn-outline hover:bg-transparent hover:text-black hover:border-teal-500 hover:border-2 border-teal-500 border-2 hover:bg-teal-500 duration-300 w-full font-bold text-base'>logIn with <FaGoogle className='w-5 h-5'></FaGoogle></button>
                            </div>
                        </div>
                        <div>
                            <p className=' text-teal-500 font-bold text-center'>Already have account?<Link className='hover:underline' to='/logIn'>LogIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;