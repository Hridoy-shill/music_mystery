import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';

const useQueryData = () => {

    const { refetch, data} = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const response = await fetch('/todos/' + todoId)
            return response.json()
        },
    })
};

export default useQueryData;