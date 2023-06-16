import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';


const useSelectedClassData = () => {

    const { user } = useContext(AuthContext)
    console.log(user);
    const { isLoading, data: selectedClasses = [], refetch,} = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://the-music-mystrey-server.vercel.app/selectedAllClasses?email=${user?.email}`)

            return response.json();
        },
    })

    return[selectedClasses, isLoading, refetch]
};

export default useSelectedClassData;