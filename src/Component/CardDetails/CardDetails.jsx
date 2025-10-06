import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CardDetails = () => {
    const post = useLoaderData();
    const { title, body } = post;

    const path = useNavigate();

    const handleButttonOnclick = () => {
        path('/posts');
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='border p-4 rounded-2xl flex flex-col items-center justify-between gap-4 mt-10 w-1/3'>
                <p className='text-xl font-bold text-center'>{title}</p>
                <p className='text-center'>{body}</p>
                <button className='btn btn-primary w-40'
                    onClick={handleButttonOnclick}>Back</button>
            </div>
        </div>
    );
};

export default CardDetails;