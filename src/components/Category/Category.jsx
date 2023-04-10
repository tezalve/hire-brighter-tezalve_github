import React from 'react';
import './Category.css'
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Category = ({categories}) => {
    return (
        <div>
            <div className='text-center p-4'>
                <h3>Job Category List</h3>
                <p>Discover a world of career possibilities with comprehensive job information at your fingertips. Your future is waiting.</p>
            </div>
            <div>
                <CardGroup className='px-5 mx-5'>
                    {categories.map(category => 
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={category.icon}/>
                            <Card.Body>
                                <Card.Title>{category.category}</Card.Title>
                                <Card.Text>
                                    {category.available} Jobs Available
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Category;