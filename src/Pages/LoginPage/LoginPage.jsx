import React, { useContext, useState } from 'react';
import Tittle from '../../Common_Component\'s/Tittle';
import Lottie from "lottie-react";
import loginMotion from '../../assets/LoginMotion.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../sharedComponents/SocialLogin/SocialLogin';
import useTitle from '../../Hooks/useTitle';

const LoginPage = () => {
    useTitle('LogIn')

    const [show, setShow] = useState()
    const [error, setError] = useState('')

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleLoginData = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                Swal.fire({
                    icon: 'success',
                    text: 'LogIn successful',
                })
                setError('')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <>
            <Tittle heading={'LogIn'}></Tittle>
            <div className="hero min-h-screen w-9/12 hover:w-10/12 duration-700 mx-auto">
                <div className="hero-content flex-col lg:flex-row w-[100%] border-2 hover:rounded-lg hover:border-teal-500 duration-700">
                    <div className="text-center lg:text-left w-[50%]">
                        <Lottie animationData={loginMotion}></Lottie>
                    </div>


                    <form onSubmit={handleLoginData} className='p-10 space-y-4 w-[500px]'>
                        <div className='flex flex-col'>
                            <label htmlFor="email"><span className='font-bold text-lg'>Email:</span></label>
                            <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded' type="email" name="email" id="" placeholder='Type your Email' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="password"><span className='font-bold text-lg'>Password:</span></label>
                            <div className='flex items-center'>
                                <input className='border-2 border-teal-500 p-2 bg-slate-100 rounded w-full' type={show ? 'text' : 'password'} name="password" id="" placeholder='Type your password' required />
                                <p onClick={() => setShow(!show)} className='border-2 p-3 ms-1 border-teal-500 rounded-md'>{
                                    show ? <span><FaEyeSlash className='text-stone-400' /></span> : <span><FaEye className='text-stone-400' /></span>
                                }</p>
                            </div>
                        </div>

                        <div>
                            <p className='font-bold text-red-700'>{error}</p>
                        </div>

                        <div>
                            <input className='btn btn-outline hover:bg-transparent hover:text-black hover:border-teal-500 hover:border-2 border-teal-500 border-2 hover:bg-teal-500 duration-300 w-full font-bold text-base' type="submit" name="Submit" id="" value={'LogIn'} />
                        </div>

                        <div className="divider">OR</div>

                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div>
                            <p className=' text-teal-500 font-bold text-center'>Don't have any account?<Link className='hover:underline' to='/signUp'>Create an account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;