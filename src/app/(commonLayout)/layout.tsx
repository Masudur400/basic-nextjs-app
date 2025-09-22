import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React from 'react';

const CommonLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <div className='min-h-[250px] container mx-auto p-3'> 
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;