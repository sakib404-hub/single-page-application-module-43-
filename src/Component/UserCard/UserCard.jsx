import React from 'react';
import { Link } from 'react-router';

const UserCard = ({ user }) => {
    const { id, name, email, phone, address } = user;
    return (
        <div className='border rounded-lg p-4 flex flex-col items-center justify-center'>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>
                {address.street},
                {address.suite},
                {address.city},
                {address.zipcode}
            </p>
            <Link to={`/users/${id}`}
                className='btn btn-primary mt-3'>Show Details</Link >
        </div>
    );
};

export default UserCard;