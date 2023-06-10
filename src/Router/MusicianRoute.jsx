import { Navigate, useLocation } from 'react-router-dom';
import useMusician from '../Hooks/useMusician';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MusicianRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   const [isMusician, isMusicianLoading] = useMusician();
   const location = useLocation();

   if(loading || isMusicianLoading){
    return <span className="loading loading-bars loading-lg"></span>
   }

   if(user && isMusician){
    return children
   }
   return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default MusicianRoute;