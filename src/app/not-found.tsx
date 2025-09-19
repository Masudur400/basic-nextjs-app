import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <p className="text-4xl">400</p>
            <p className="text-xl">Page is Not Found</p>
            <p className='border my-5 p-2 rounded-md w-fit'><Link href='/'>Back To Home </Link></p>
        </div>
    );
};

export default NotFound;