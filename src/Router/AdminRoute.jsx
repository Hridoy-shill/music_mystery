import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   const [refetch ,isAdmin, isAdminLoading] = useAdmin();
   // console.log(isAdmin, user, isAdminLoading );
   // console.log(isAdminLoading, loading);
   const location = useLocation();

   if(loading || isAdminLoading){
    return <span className="loading loading-bars loading-lg bg-teal-500"></span>
   }

   if(user && isAdmin){
    return children;
   }
   return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;