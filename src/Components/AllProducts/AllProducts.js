import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { Row } from 'react-bootstrap';

const AllProducts = (props) => {
    const [ products, setProducts] = useState([])

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data))

    }, [])


    return (
        <div className='container'>
        
        <Row xs={1} md={3} className="g-2">
        {
                products.map( product  => <SingleProduct 
                    addCount={props.addCount}
                    product={product}
                    key={product.id}
                     
                     ></SingleProduct>)
        } 
        </Row>
        </div>
    );
};

export default AllProducts;