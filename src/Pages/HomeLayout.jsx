import React from 'react';
import Bannar from '../assets/allComponents/Bannar';
import JobsCards from '../assets/allComponents/JobsCards';

const HomeLayout = () => {
    return (
        <div className='min-h-screen'>
            <Bannar></Bannar>
            <JobsCards></JobsCards>
            
        </div>
    );
};

export default HomeLayout;