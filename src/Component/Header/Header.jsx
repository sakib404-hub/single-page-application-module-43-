import React from 'react';
import { NavLink } from 'react-router';
import '../../index.css'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-10 py-4 bg-gray-700'>
            <div>
                <p className='text-2xl font-bold'>SkbzZ</p>
            </div>
            <div className='flex gap-6'>
                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/mobiles' className='nav-link'>Mobiles</NavLink>
                <NavLink to='/laptops' className='nav-link'>Laptops</NavLink>
                <NavLink to='/users' className='nav-link'>Users</NavLink>
            </div>
            <div>
                <button className='btn'>Join Now</button>
            </div>
        </div>
    );
};

export default Header;