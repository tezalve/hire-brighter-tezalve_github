import React from 'react';
import './Header.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar d-flex align-items-center justify-content-between p-4'>
            <Link to=''><h2>Hire Brighter</h2></Link>
            <div className='links py-3'>
                <Link to=''>Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <Button>Start Applying</Button>
        </nav>
    );
};

export default Header;