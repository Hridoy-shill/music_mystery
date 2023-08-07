import React from 'react';
import Tittle from '../../../../Common_Component\'s/Tittle';
import kids from '../../../../../public/4_e67d01d1-3898-4b7d-a4b5-5097a7cf2a9b.webp';
import teens from '../../../../../public/bolu.webp';
import adults from '../../../../../public/Jeffrey_editied_Blog+pic.jpg';
import privet from '../../../../../public/1000s (1).jpg';
const MusicGroups = () => {
    return (
        <div>
            <Tittle heading={'Student category'}></Tittle>
            <div className='md:flex md:w-10/12 mx-auto gap-5 mt-10'>
                <div className='space-y-3 text-center'>
                    <img src={kids} className='w-32 rounded-full mx-auto duration-500 transition ease-in-out delay-100 hover:-translate-y-3' alt="" />
                    <h2 className='text-2xl font-semibold'>Kids</h2>
                    <p className='text-sm text-gray-500'>Our school is a solution for families who would like to expose their children to the world of music.</p>
                </div>
                <div className='space-y-3 text-center'>
                    <img src={teens} className='w-32 rounded-full mx-auto duration-500 transition ease-in-out delay-100 hover:-translate-y-3' alt="" />
                    <h2 className='text-2xl font-semibold'>Teens</h2>
                    <p className='text-sm text-gray-500'>Our school is a solution for families who would like to expose their children to the world of music.</p>
                </div>
                <div className='space-y-3 text-center'>
                    <img src={adults} className='w-32 rounded-full mx-auto duration-500 transition ease-in-out delay-100 hover:-translate-y-3' alt="" />
                    <h2 className='text-2xl font-semibold'>Adults</h2>
                    <p className='text-sm text-gray-500'>Our school is a solution for families who would like to expose their children to the world of music.</p>
                </div>
                <div className='space-y-3 text-center'>
                    <img src={privet} className='w-32 rounded-full mx-auto duration-500 transition ease-in-out delay-100 hover:-translate-y-3' alt="" />
                    <h2 className='text-2xl font-semibold'>Privets</h2>
                    <p className='text-sm text-gray-500'>Our school is a solution for families who would like to expose their children to the world of music.</p>
                </div>
            </div>
        </div>
    );
};

export default MusicGroups;