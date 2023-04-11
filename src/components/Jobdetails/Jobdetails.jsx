import React from 'react';
import './Jobdetails.css'
import { useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Jobdetails = () => {

    const {state} = useLocation();
    const {description, responsibilities, education, experience, salary} = state;

    return (
        <div>
            <div className='jfront text-center p-3'>
                <h2>Job Details</h2>
            </div>
            <div className='row'>
                <div className='p-5 m-5 col-md-7'>
                    <p>Job Description: {description}</p>
                    <p>Job Responsibility: {responsibilities}</p>
                    <p>Educational Requirements: {education}</p>
                    <p>Experiences: {experience}</p>
                </div>
                <div className='p-5 m-5 col-md-3'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Job Details</Card.Title>
                            <div className='d-flex align-items-center'>
                                <img src="../../public/assets/icons/Frame.png" alt="" />
                                <Card.Subtitle>{salary}</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;