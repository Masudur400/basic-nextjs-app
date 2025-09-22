'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {

    const pathName = usePathname()

    return (
        <div className='flex gap-4 items-center p-4 shadow-md max-sm:overflow-scroll'> 
            <p className={`${
                pathName === '/'?'text-sky-500':''
            }`}><Link href="/">Home</Link></p>

            <p className={`${
                pathName === '/about'?'text-sky-500':''
            }`}><Link href="/about">About</Link></p>

            <p className={`${
                pathName === '/contact'?'text-sky-500':''
            }`}><Link href="/contact">Contact</Link></p>

            <p className={`${
                pathName === '/products'?'text-sky-500':''
            }`}><Link href="/products">Products</Link></p>

            <p className={`${
                pathName === '/counter'?'text-sky-500':''
            }`}><Link href="/counter">Counter</Link></p>

            <p className={`${
                pathName === '/dashboard'?'text-sky-500':''
            }`}><Link href="/dashboard">Dashboard</Link></p>
        </div>
    );
};

export default NavBar;