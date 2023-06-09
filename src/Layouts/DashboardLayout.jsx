import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaUsersCog, FaUserShield, FaUser, FaUserGraduate, FaBook, FaBookReader, FaSwatchbook, FaBookMedical, FaBookOpen, FaHome, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const DashboardLayout = () => {

    const isAdmin = true;
    const isInstructor = false;
    // TODO Admin is not dynamic

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>
                
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


                    {isAdmin && (
                        <div className='space-y-3'>
                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300': 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaUserShield className='w-5 h-5'></FaUserShield> Admin Home</NavLink></li>

                            <li><NavLink to={'/dsfg'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBook className='w-5 h-5'></FaBook> Manage Classes</NavLink></li>

                            <li><NavLink to={'/dashboard/allUsers'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaUsersCog className='w-5 h-5'></FaUsersCog> Manage Users</NavLink></li>
                        </div>
                    )}

                    {isInstructor && (
                        <div className='space-y-3'>
                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaUserGraduate className='w-5 h-5'></FaUserGraduate>Instructor Home</NavLink></li>

                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBookMedical className='w-5 h-5'></FaBookMedical>Add a Class</NavLink></li>

                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaSwatchbook className='w-5 h-5'></FaSwatchbook>My Classes</NavLink></li>
                        </div>
                    )}

                    {!isAdmin && !isInstructor && (
                        <div className='space-y-3'>
                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaUser className='w-5 h-5'></FaUser> Student Home</NavLink></li>

                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBookOpen className='w-5 h-5'></FaBookOpen> My Selected Classes</NavLink></li>

                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-black bg-yellow-300 text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-base  border-s-4 border-yellow-300 hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBookReader className='w-5 h-5'></FaBookReader>My Enrolled Classes</NavLink></li>
                        </div>
                    )}

                    <div className="divider text-base font-bold">OR</div>

                    <div className='space-y-3'>
                        <li><NavLink to={'/'} className='mt-2 border-s-4 border-yellow-300 bg-transparent p-2 font-bold text-base hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:rounded-md me-5'><FaHome className='w-5 h-5'></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/'} className='mt-2 border-s-4 border-yellow-300 bg-transparent p-2 font-bold text-base hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:rounded-md me-5'><FaEnvelope className='w-5 h-5'></FaEnvelope>Contact Us</NavLink></li>
                        <li><NavLink to={'/'} className='mt-2 border-s-4 border-yellow-300 bg-transparent p-2 font-bold text-base hover:bg-yellow-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:rounded-md me-5'><FaInfoCircle className='w-5 h-5'></FaInfoCircle>About</NavLink></li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;