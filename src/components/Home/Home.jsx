import React, { useEffect, useState } from 'react';
import './Home.css'
import Front from '../Front/Front';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';
import { Button, CardGroup } from 'react-bootstrap';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    let [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    const [showMore, setShowMore] = useState(false);
    
    const handleShowMore = () => {
        setShowMore(true);
    }

    return (
        <div>
            <Front></Front>

            <div className='text-center p-4'>
                <h3>Job Category List</h3>
                <p>Discover a world of career possibilities with comprehensive job information at your fingertips. Your future is waiting.</p>
            </div>

            <CardGroup className='px-4 mx-4'>
                {
                    categories.map(category => <Category
                        key={categories.indexOf(category)}
                        category={category}
                    ></Category>)
                }
            </CardGroup>

            <div className='text-center p-4'>
                <h3>Featured Jobs</h3>
                <p>Discover countless career possibilities with all the essential details you need. Your future starts here.</p>
            </div>

            <CardGroup className='px-4 mx-4'>
                {
                    jobs.slice(0, showMore ? jobs.length : 4).map(job => <Featured
                        key={job.id}
                        job={job}
                    ></Featured>)
                }
            </CardGroup>

            <div className='p-3 text-center'>
                <Button onClick={() => handleShowMore()}>See All Jobs</Button>
            </div>
        </div>
    );
};

export default Home;