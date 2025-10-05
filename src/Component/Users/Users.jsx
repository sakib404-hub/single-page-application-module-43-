import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const userData = useLoaderData();
    console.log(userData);
    return (
        <div>
            This is the User Component
        </div>
    );
};

export default Users;