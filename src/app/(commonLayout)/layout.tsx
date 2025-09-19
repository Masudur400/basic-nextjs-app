import NavBar from '@/components/NavBar';
import React from 'react';

const CommonLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default CommonLayout;