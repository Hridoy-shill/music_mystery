import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import useMusician from '../../Hooks/useMusician';

const AllClasses = () => {

    const [classes, setClasses] = useState([])
    console.log(classes);
    const [,isAdmin] = useAdmin();
    const [,isMusician] = useMusician();
    console.log(isAdmin, isMusician);

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        axios.get('http://localhost:5000/allClasses', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setClasses(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [])
    return (
        <div className='grid grid-cols-3 p-10 gap-4'>
            {
                classes.map(singleClass => <div key={singleClass._id} singleClass={singleClass} className={`${singleClass.Seats === 0 ? 'bg-red-500 opacity-70' : 'bg-white'} card w-full p-4 mx-auto border-2 hover:border-teal-500 duration-700`}>
                    <figure><img className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' src={singleClass.photo} /></figure>
                    <div className="mt-5">
                        <h2 className="card-title mx-auto font-bold text-lg mt-2"> <span className='text-2xl text-teal-500'>Course:</span> {singleClass.className}</h2>

                        <p className="card-title mx-auto font-bold text-lg mt-2"><span className='text-xl text-teal-500'>Available seats:</span> {singleClass.Seats}</p>

                        <p className="card-title mx-auto font-bold text-lg mt-2"><span className='text-xl text-teal-500'>Enrolled Students:</span> {singleClass.Students}</p>
                        <p className="card-title mx-auto font-bold text-lg mt-2"><span className='text-xl text-teal-500'>Course fee:</span>${singleClass.Price}</p>
                        <p className="card-title mx-auto font-bold text-lg mt-2"><span className='text-xl text-teal-500'>Musician Name:</span> {singleClass.musicianName}</p>
                        <p className="card-title mx-auto font-bold text-lg mt-2"><span className='text-xl text-teal-500'>Email:</span> {singleClass.email}</p>
                        <button className={`${singleClass.Seats === 0 || isAdmin === true || isMusician === true ? 'btn-disabled' : ''} btn w-full bg-teal-500 hover:bg-teal-500 text-base font-bold mt-10`}>Add to Cart</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllClasses;