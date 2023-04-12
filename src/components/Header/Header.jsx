import React from 'react';
import './Header.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to=''><h2>Hire Brighter</h2></Link>
            <div className='links'>
                <Link to=''>Home</Link>
                <Link to="/">Statistics</Link>
                <Link to="/applied">Applied Jobs</Link>
                <Link to="/">Blog</Link>
            </div>
            <Button>Start Applying</Button>
        </nav>
    );
};

export default Header;