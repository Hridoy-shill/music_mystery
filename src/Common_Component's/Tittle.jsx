import React from 'react';

const Tittle = ({heading}) => {
    return (
        <div>
            <h3 className=' mt-5 border-b-4 border-b-teal-500 px-8 py-3 w-fit mx-auto font-semibold text-2xl'>{heading}</h3>
        </div>
    );
};

export default Tittle;