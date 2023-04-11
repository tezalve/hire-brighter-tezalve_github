import React from 'react';
import './Featured.css'
import { Button, Card, CardGroup, Col } from 'react-bootstrap';

const Featured = ({jobs}) => {
    return (
        <div>
            <div className='text-center p-4'>
                <h3>Featured Jobs</h3>
                <p>Discover countless career possibilities with all the essential details you need. Your future starts here.</p>
            </div>
            <CardGroup className='px-5 mx-5'>
                    {jobs.map(job => 
                    <Col className='col-md-6'>
                        <Card className='feaCard'>
                            <Card.Img className='comimg p-3' src={job.jobLogo}/>
                            <Card.Body>
                                <Card.Title className='p-2'>{job.jobTitle}</Card.Title>
                                <Card.Subtitle className='p-2'>
                                    {job.companyName}
                                </Card.Subtitle>
                                <div className='d-flex btn-lite p-2'>
                                    <h6 className=''>Remote</h6>
                                    <h6 className='mx-2'>Onsite</h6>
                                </div>
                                <div className='locimg d-flex p-2'>
                                    <div className='d-flex align-items-center'>
                                        <img src="../../geo-alt.svg" alt="" />
                                        <Card.Subtitle>{job.location}</Card.Subtitle>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <img src="../../public/assets/icons/Frame-1.png" alt="" />
                                        <Card.Subtitle>{job.salary}</Card.Subtitle>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <Button>View Details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                    }
            </CardGroup>
            <div className='p-3 text-center'>
                <Button>See All Jobs</Button>
            </div>
        </div>
    );
};

export default Featured;