import React from 'react';
import Header from '../MainComponents/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../MainComponents/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* header section  */}
            <Header></Header>
            <Outlet></Outlet>

            {/* footer section  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;