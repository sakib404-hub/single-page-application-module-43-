import React from 'react';
import { useNavigate } from 'react-router';

const PostCard = ({ post }) => {
    const { title, body, id } = post;

    const path = useNavigate();
    const handleButtonClick = () => {
        path(`/posts/${id}`)
    }

    return (
        <div className='border p-4 rounded-2xl flex flex-col items-center justify-between gap-4'>
            <p className='text-xl font-bold text-center'>{title}</p>
            <p className='text-center'>{body}</p>
            <button className='btn btn-primary w-40'
                onClick={handleButtonClick}>Show Details</button>
        </div>
    );
};

export default PostCard;