import { SpaceIcon } from 'lucide-react';
import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const UserCard = ({ user }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { id, name, email, phone, address } = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json());


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
            <button className='btn'
                onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {
                showDetails && <Suspense fallback={<span>Loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default UserCard;