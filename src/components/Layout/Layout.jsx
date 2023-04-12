import React, { useState } from 'react';
import './Layout.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    let oldids = localStorage.getItem('ids');
    oldids = JSON.parse(oldids);
    if(oldids === null || oldids.length === 0){
        var [ids, setids] = useState([]);
    }else{
        var [ids, setids] = useState(oldids);
    }
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;