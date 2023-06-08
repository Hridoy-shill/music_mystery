import React from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import Lottie from "lottie-react";
import loginMotion from '../../assets/LoginMotion.json'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {

    const handleSignUpData = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <>
            <Tittle heading={'SignUp'}></Tittle>
            <div className="hero min-h-screen w-9/12 hover:w-10/12 duration-700 mx-auto">
                <div className="hero-content flex-col lg:flex-row w-[100%] border-2 hover:rounded-lg hover:border-teal-500 duration-700">
                    <div className="text-center lg:text-left w-[50%]">
                        <Lottie animationData={loginMotion}></Lottie>
                    </div>


                    <form onSubmit={handleSignUpData} className='p-10 space-y-4 w-[500px]'>
                        <div className='flex flex-col'>
                            <label htmlFor="email"><span className='font-bold text-lg'>Email:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="email" name="email" id="" placeholder='Type your Email' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="password"><span className='font-bold text-lg'>Password:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="password" name="password" id="" placeholder='Type your password' required />
                        </div>


                        {/* <div>
                            <p className='font-bold text-red-700'>{error.message}</p>
                        </div> */}

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