import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (user) {
        return children
    }
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
           <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;