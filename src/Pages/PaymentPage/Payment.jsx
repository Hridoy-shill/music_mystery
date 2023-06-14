import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            payment {id}
        </div>
    );
};

export default Payment;