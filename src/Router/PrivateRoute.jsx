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
            <button className="btn btn-square btn-outline loading"></button>
        </div>
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;