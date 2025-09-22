'use client'
import React, { useEffect } from 'react';

const ErrorPage = ({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) => {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <p>something went wrong...</p>
            <p>{error?.message}</p>
            <button onClick={() => reset()} className="mt-4 hover:cursor-pointer  bg-blue-600 text-sm w-full text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Try Again
            </button>
        </div>
    );
};

export default ErrorPage;