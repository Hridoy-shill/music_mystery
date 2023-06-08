import React from 'react';
import logo from '../../../public/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-teal-500 text-base-content">
                <div className='flex'>
                    <img className='w-28 h-28' src={logo} alt="" />
                    <div>
                        <p className='font-bold text-2xl'>Music Mystery<br /><span className='text-sm font-medium'>Providing reliable tech since 2022</span></p>
                        <div className='mt-3 flex space-x-4'>
                            <FaFacebook className='w-7 h-7'></FaFacebook>
                            <FaYoutube className='w-7 h-7'></FaYoutube>
                            <FaTwitter className='w-7 h-7'></FaTwitter>
                        </div>
                    </div>

                </div>
                <div>
                    <span className="text-lg text-yellow-300 font-bold">Services</span>
                    <a className="link link-hover font-medium">Branding</a>
                    <a className="link link-hover font-medium">Design</a>
                    <a className="link link-hover font-medium">Marketing</a>
                    <a className="link link-hover font-medium">Advertisement</a>
                </div>
                <div>
                    <span className="text-lg text-yellow-300 font-bold">Company</span>
                    <a className="link link-hover font-medium">About us</a>
                    <a className="link link-hover font-medium">Contact</a>
                    <a className="link link-hover font-medium">Jobs</a>
                    <a className="link link-hover font-medium">Press kit</a>
                </div>
                <div>
                    <span className="text-lg text-yellow-300 font-bold">Legal</span>
                    <a className="link link-hover font-medium">Terms of use</a>
                    <a className="link link-hover font-medium">Privacy policy</a>
                    <a className="link link-hover font-medium">Cookie policy</a>
                </div>

            </footer>
            <footer className="footer items-center p-4 bg-black text-neutral-content">
                <div className="mx-auto ">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </>

    );
};

export default Footer;