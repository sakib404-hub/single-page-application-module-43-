import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const user = use(userPromise);
    console.log(user);
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetails2;