import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, LogOutUser } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        LogOutUser()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-teal-500 p-2">
            <div className="navbar-start items-center">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-teal-500  w-52">
                        <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-300 font-bold' : 'font-bold text-base text-white duration-500')}>Home</NavLink></li>
                        <li><NavLink to={'/asdf'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-300 font-bold' : 'font-bold text-base text-white duration-500')}>Instructors</NavLink></li>
                        <li><NavLink to={'/asdf'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-300 font-bold' : 'font-bold text-base text-white duration-500')}>Classes</NavLink></li>
                        <li><NavLink to={'/sadf'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-300 font-bold' : 'font-bold text-base text-white duration-500')}>Dashboard</NavLink></li>
                    </ul>
                </div>

                <Link to={'/'} className='flex items-center'>
                    <img className='w-16 h-14' src={logo} />
                    <h3 className='md:text-3xl  md:font-semibold text-white'>Music <span className='font-light'>Mystery</span></h3>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-300 font-bold' : 'font-bold text-base text-white duration-500')}>Home</NavLink></li>
                    <li><NavLink to={'/asdf'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-300 font-bold' : 'font-bold text-base text-white duration-500')}>Instructors</NavLink></li>
                    <li><NavLink to={'/asdf'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-300 font-bold' : 'font-bold text-base text-white duration-500')}>Classes</NavLink></li>
                    {user && <li><NavLink to={'/dashboard'} className={({ isActive }) => (isActive ? 'text-yellow-300 text-xl duration-500 font-bold' : 'font-bold text-base text-white duration-500')}>Dashboard</NavLink></li>}
                </ul>
            </div>
            <div className="navbar-end pe-5 space-x-4">
                {user ?
                    <>
                        <img className='w-12 h-12 rounded-full hover:bg-yellow-300 border-2 border-white hover:border-yellow-300 duration-500' src={user.photoURL} alt="" title={user.displayName} />
                        <button onClick={handleLogOut} className='btn btn-outline text-white font-bold border-2 duration-500 border-white  hover:border-yellow-300 hover:text-white hover:bg-transparent'>logOut</button>
                    </>
                    :
                    <>
                        <Link to={'/logIn'}>
                            <button className='btn btn-outline text-white font-bold border-2 duration-500 border-white  hover:border-yellow-300 hover:text-white hover:bg-transparent'>Login</button>
                        </Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;