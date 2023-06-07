import React from 'react';
import Navbar from '../sharedComponents/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedComponents/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;