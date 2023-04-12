import React from 'react';
import './Featured.css'
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Featured = ({job}) => {
    return (
        <div className='col-md-6'>
            <Col>
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
                                <img src="../../public/assets/icons/Frame.png" alt="" />
                                <Card.Subtitle>{job.salary}</Card.Subtitle>
                            </div>
                        </div>
                        <div className='p-2'>
                            <Link 
                                to={`/details/${job.id}`}
                                state={job}
                            ><Button>View Details</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Featured;