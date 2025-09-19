import Link from 'next/link';
import React from 'react';

const SideBar = () => {
    return (
         
            <div className='space-y-3 min-h-screen min-w-60 gap-4 items-center p-4 border-b shadow-md'> 
            <p><Link href="/">Home</Link></p>
            <p><Link href="/profile">Profile</Link></p>
            <p><Link href="/settings">Settings</Link></p> 
        </div> 
    );
};

export default SideBar;