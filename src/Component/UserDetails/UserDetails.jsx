import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const useData = useLoaderData();
    console.log(useData);

    const path = useNavigate();
    const handleButtonClick = () => {
        path('/users')
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='border w-1/3  mt-10 rounded-2xl p-5 flex flex-col items-center justify-center'>
                <p>{useData.name}</p>
                <p>{useData.email}</p>
                <p>{useData.phone}</p>
                <p>{useData.username}</p>
                <p>{useData.website}</p>
                <button className='btn mt-5'
                    onClick={handleButtonClick}>Go Back</button>
            </div>
        </div>
    );
};

export default UserDetails;