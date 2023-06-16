import React, { useEffect, useState } from 'react';
import Tittle from '../../../../Common_Component\'s/Tittle';

const PopularClassesSection = () => {

    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() => {
        fetch('https://the-music-mystrey-server.vercel.app/popularClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPopularClasses(data);
            })
    }, [])

    return (
        <div className=''>
            <Tittle heading={'Popular Classes'}></Tittle>

            <div className='grid md:grid-cols-2 gap-3 p-10'>
                {
                    popularClasses.map(popularClass => <div className="card card-side bg-base-100 shadow-xl w-full p-6 gap-4 items-center border-2 hover:border-teal-500 mt-3 duration-500 transition ease-in-out delay-150 hover:-translate-y-3">
                        <div className='w-[30%]'>
                            <img className='rounded-md w-full' src={popularClass.photo} />
                        </div>
                        <div className="w-[70%] space-y-2">
                            <h2 className="card-title text-xl text-teal-500">Course: {popularClass.className}</h2>
                            <p className='text-base font-semibold'><span className='text-lg font-semibold'>Musician Name:</span> {popularClass.musicianName}</p>
                            <p className='text-base font-semibold'><span className='text-lg font-semibold'>Musician Email:</span> {popularClass.instructorEmail}</p>
                            <p className='text-base font-semibold'><span className='text-lg font-semibold'>Price:</span> ${popularClass.Price}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClassesSection;