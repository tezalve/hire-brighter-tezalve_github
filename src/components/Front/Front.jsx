import React from 'react';
import './Front.css'
import { Button } from 'react-bootstrap';

const Front = () => {
    return (
        <div className='front'>
            <div>
                <h1>Helping you build a better future, one job at a time</h1>
                <p>Find your dream job with Hire Brighter - the ultimate job search destination. Discover top job listings, apply in just a few clicks, and get personalized career resources to thrive in your career.</p>
                <Button>Get Started</Button>
            </div>
            <img className='frontimg' src="../../public/assets/all_images/P3OLGJ1copy1.png" alt="" />
        </div>
    );
};

export default Front;