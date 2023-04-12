import React, { useEffect, useState } from 'react';
import './Applied.css'
import Appliedjobs from '../Appliejobs/Appliedjobs';
import { Button, CardGroup } from 'react-bootstrap';

const Applied = () => {
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    let oldids = localStorage.getItem('ids');
    oldids = JSON.parse(oldids);

    return (
        <div>
            <div className='jfront text-center p-3'>
                <h2>Applied Jobs</h2>
            </div>
            <div className='d-flex align-items-center justify-content-center pt-3'>
                <Button className='m-1'>Remote</Button>
                <Button className='m-1'>Onsite</Button>
            </div>
            <CardGroup className='p-5'>
                {
                    jobs != null ? jobs.map(job => oldids.map(id => job.id == id && <Appliedjobs key={job.id} job={job}></Appliedjobs>)): null
                }
            </CardGroup>
            
        </div>
    );
};

export default Applied;