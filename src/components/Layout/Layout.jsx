import React from 'react';
import './Layout.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    localStorage.setItem('ids', JSON.stringify([]));
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;