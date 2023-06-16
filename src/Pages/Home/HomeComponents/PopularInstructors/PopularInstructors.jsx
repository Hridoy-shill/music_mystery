import React, { useEffect, useState } from 'react';
import Tittle from '../../../../Common_Component\'s/Tittle';

const PopularInstructors = () => {
    const [popularMusicians, setPopularMusicians] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularMusicians')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPopularMusicians(data);
            })
    }, [])
    return (
        <div>
            <Tittle heading={'Popular Instructors'}></Tittle>

            <div className='grid md:grid-cols-2 gap-3 p-10'>
                {
                    popularMusicians.map(popularMusician => <div className="card card-side bg-base-100 shadow-xl w-full p-6 gap-4 items-center border-2 hover:border-teal-500 mt-3 duration-500 transition ease-in-out delay-150 hover:-translate-y-3">
                        <div className='w-[30%]'>
                            <img className='rounded-md w-full' src={popularMusician.photoURL} />
                        </div>
                        <div className="w-[70%] space-y-2">
                            <p className='text-lg font-semibold'><span className='text-xl font-semibold'>Musician Name:</span> {popularMusician.name}</p>
                            <p className='text-lg font-semibold'><span className='text-xl font-semibold'>Musician Email:</span> {popularMusician.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;