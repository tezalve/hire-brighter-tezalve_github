import React from 'react';
import './Home.css'
import Front from '../Front/Front';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Front></Front>
            <Category categories={categories}></Category>
        </div>
    );
};

export default Home;