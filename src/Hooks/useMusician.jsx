import React from 'react';
import { useContext } from "react"
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from '../Provider/AuthProvider';


const useMusician = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token');
    // console.log(token);
    const {refetch, data: isMusician, isLoading: isMusicianLoading } = useQuery({
        queryKey: ['isMusician', user?.email],
        queryFn: async () => {
            
            if(!user){
                return []
            }
            
            const res = await fetch(`https://the-music-mystrey-server.vercel.app/allUsers/musician/${user?.email}`, {
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            const data = await res.json()
            return data.musician
        }
    })
    return [refetch, isMusician, isMusicianLoading]
}

export default useMusician;