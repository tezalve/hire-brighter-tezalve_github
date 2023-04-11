import React, { useEffect, useState } from 'react';
import './Home.css'
import Front from '../Front/Front';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';

const Home = () => {
    const categories = useLoaderData();

    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <Front></Front>
            <Category categories={categories}></Category>
            <Featured jobs={jobs}></Featured>
        </div>
    );
};

export default Home;