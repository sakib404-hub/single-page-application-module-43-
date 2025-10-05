import React, { use } from 'react';
import UserCard from '../UserCard/UserCard';

const Users = ({ userPromise }) => {

    const userData = use(userPromise);
    console.log(userData);
    return (
        <div className='mt-10'>
            <h2 className='text-2xl text-center'>This is the User Component</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    userData.map((user) => {
                        return <UserCard
                            key={user.id}
                            user={user}></UserCard>
                    })
                }
            </div>
        </div>
    );
};

export default Users;