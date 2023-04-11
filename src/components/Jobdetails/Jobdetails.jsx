import React from 'react';
import './Jobdetails.css'
import { useLocation } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Jobdetails = () => {

    const {state} = useLocation();
    const {description, responsibilities, education, experience, salary, jobTitle, phoneNumber, email, address} = state;

    return (
        <div>
            <div className='jfront text-center p-3'>
                <h2>Job Details</h2>
            </div>
            <div className='row details-container p-5 align-items-center'>
                <div className='col-md-9'>
                    <p>Job Description: {description}</p>
                    <p>Job Responsibility: {responsibilities}</p>
                    <p>Educational Requirements: {education}</p>
                    <p>Experiences: {experience}</p>
                </div>
                <div className='col-md-3'>
                    <Card className='jcard'>
                        <Card.Body>
                            <Card.Title>Job Details</Card.Title>
                            <hr />
                            <div className='d-flex align-items-center py-1'>
                                <img src="../../public/assets/icons/Frame.png" alt="" />
                                <Card.Subtitle className='px-2'>Salary: {salary}</Card.Subtitle>
                            </div>
                            <div className='d-flex align-items-center py-1'>
                                <img src="../../public/assets/icons/Frame-1.png" alt="" />
                                <Card.Subtitle className='px-2'>Job Title: {jobTitle}</Card.Subtitle>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Contact Information</Card.Title>
                            <hr />
                            <div className='d-flex align-items-center py-1'>
                                <img src="../../public/assets/icons/Frame-2.png" alt="" />
                                <Card.Subtitle className='px-2'>Phone: {phoneNumber}</Card.Subtitle>
                            </div>
                            <div className='d-flex align-items-center py-1'>
                                <img src="../../public/assets/icons/Frame-3.png" alt="" />
                                <Card.Subtitle className='px-2'>Email: {email}</Card.Subtitle>
                            </div>
                            <div className='d-flex align-items-center py-1'>
                                <img src="../../public/assets/icons/Frame-4.png" alt="" />
                                <Card.Subtitle className='px-2'>Address: {address}</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className='py-3'>
                        <Button className='applybtn'>Apply Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;