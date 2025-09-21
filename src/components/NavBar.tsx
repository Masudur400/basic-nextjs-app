import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='flex gap-4 items-center p-4 shadow-md max-sm:overflow-scroll'> 
            <p><Link href="/">Home</Link></p>
            <p><Link href="/about">About</Link></p>
            <p><Link href="/contact">Contact</Link></p>
            <p><Link href="/products">Products</Link></p>
            <p><Link href="/counter">Counter</Link></p>
            <p><Link href="/dashboard">Dashboard</Link></p>
        </div>
    );
};

export default NavBar;