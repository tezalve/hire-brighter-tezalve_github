import React from 'react';
import './Appliedjobs.css'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Appliedjobs = ({job}) => {
    console.log(job);
    return (
        <div className='col-12 p-5'>
            <Card className='d-flex flex-row justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img className='appimg' src={job.jobLogo}/>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title className='p-2'>{job.jobTitle}</Card.Title>
                    <Card.Subtitle className='p-2'>
                        {job.companyName}
                    </Card.Subtitle>
                    <div className='d-flex btn-lite p-2'>
                        <h6 className=''>{job.jobType[0]}</h6>
                        <h6 className='mx-2'>{job.jobType[1]}</h6>
                    </div>
                    <div className='d-flex p-2'>
                        <div className='d-flex align-items-center'>
                            <img src="../../geo-alt.svg" alt="" />
                            <Card.Subtitle>{job.location}</Card.Subtitle>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src="../../public/assets/icons/Frame.png" alt="" />
                            <Card.Subtitle>{job.salary}</Card.Subtitle>
                        </div>
                    </div>
                </div>
                <div className='p-2 d-flex flex-column align-items-center justify-content-center'>
                    <Link 
                        to={`/details/${job.id}`}
                        state={job}
                    ><Button>View Details</Button></Link>
                </div>
            </Card>
        </div>
    );
};

export default Appliedjobs;