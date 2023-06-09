import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-teal-500 text-base-content">
                    {/* Sidebar content here */}
                    <div className='flex flex-col items-center border-b-2 pb-2 border-yellow-300  w-full mx-auto mb-5'>
                        <img className='w-20 h-20' src={logo} alt="" />
                        <p className='font-bold text-xl'>Music Mystery</p>
                    </div>
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <div className="divider text-base font-bold">OR</div>
                    <li><NavLink to={'/'} className='mt-2 border-s-4 border-yellow-300 bg-transparent p-2 font-bold text-base hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:rounded-md me-5'>Home</NavLink></li>
                    <li><NavLink to={'/'} className='mt-2 border-s-4 border-yellow-300 bg-transparent p-2 font-bold text-base hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:rounded-md me-5'>Contact Us</NavLink></li>
                    <li><NavLink to={'/'} className='mt-2 border-s-4 border-yellow-300 bg-transparent p-2 font-bold text-base hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:rounded-md me-5'>About</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;