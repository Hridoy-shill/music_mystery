import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Tittle from '../../Common_Component\'s/Tittle';


const AllInstructors = () => {

    const [musicians, setMusicians] = useState([]);
    console.log(musicians);

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        axios.get('http://localhost:5000/musicians', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setMusicians(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [])

    return (
        <>
            <Tittle heading={"All-Musician's"}></Tittle>
            <div className='grid grid-cols-3 p-10 gap-4'>
                {
                    musicians.map(musician => <div key={musician._id} musician={musician} className="card w-full mx-auto border-2 hover:border-teal-500 duration-700">
                        <figure><img className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={musician.photoURL} /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto font-bold text-2xl">{musician.name}</h2>
                            <p className='text-xl font-bold text-gray-400'>{musician.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default AllInstructors;