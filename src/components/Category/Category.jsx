import React from 'react';
import './Category.css'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Category = ({category}) => {
    return (
        <div className='col-md-3'>
            <Col>
                <Card className='catCard'>
                    <Card.Img variant="top" src={category.icon}/>
                    <Card.Body>
                        <Card.Title>{category.category}</Card.Title>
                        <Card.Text>
                            {category.available} Jobs Available
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Category;