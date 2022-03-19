import React from 'react';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ProductDetails from '../ProductDetails/ProductDetails';



const SingleProduct = (props) => {
    const {title, image, price} = (props.product)
    return (
        <div>
            <Container>
            <Col className='md-4'>
           <Card className='text-center p-3'>
            <Card.Img className='w-50 m-auto pt-2' variant="top" src={image} />
            <Card.Body>
            <Card.Title> $ {price}</Card.Title>
            <Card.Text>
                {title}
            </Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-evenly">
            <Button  onClick={props.addCount} >Add To Cart</Button>
            <ProductDetails product={props.product} ></ProductDetails>
            </div>
        </Card> 
        </Col>
            </Container>
        </div>
    );
};

export default SingleProduct;