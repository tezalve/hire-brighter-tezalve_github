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

    if(oldids === null || oldids.length === 0){
        var [ids, setids] = useState([]);
    }else{
        var [ids, setids] = useState(oldids);
    }

    const [remote, setRemote] = useState(false);
    
    const handleRemote = () => {
        setRemote(true);
        setOnsite(false);
    }

    const [onsite, setOnsite] = useState(false);
    
    const handleOnsite = () => {
        setOnsite(true);
        setRemote(false);
    }

    return (
        <div>
            <div className='jfront text-center p-3'>
                <h2>Applied Jobs</h2>
            </div>
            <div className='d-flex align-items-center justify-content-center pt-3'>
                <Button onClick={() => handleRemote()} className='m-1'>Remote</Button>
                <Button onClick={() => handleOnsite()} className='m-1'>Onsite</Button>
            </div>
            <CardGroup className='p-4'>
                {
                    onsite == false && remote == false
                        ? jobs.map(job => ids.map(id => job.id == id && <Appliedjobs key={job.id} job={job}></Appliedjobs>)) 
                        : onsite == true
                            ? jobs.map(job => ids.map(id => job.id == id && job.jobType[0] == "Onsite" && <Appliedjobs key={job.id} job={job}></Appliedjobs>))
                            : jobs.map(job => ids.map(id => job.id == id && job.jobType[0] == "Remote" && <Appliedjobs key={job.id} job={job}></Appliedjobs>))
                }
            </CardGroup>
            
        </div>
    );
};

export default Applied;