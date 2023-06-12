import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';

const useQueryData = () => {

    const { refetch, data} = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const response = await fetch('/todo/' + todoId)
            return response.json()
        },
    })
};

export default useQueryData;