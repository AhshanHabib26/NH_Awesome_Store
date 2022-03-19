import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const ProductDetails = (props) => {
    const {title, image, description, category, rating} = (props.product)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <div>
       <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <img className='w-25' src={image} alt="" />
        </Modal.Header>
        <Modal.Body className='m-auto'>
            <h4> Category: {category}</h4>
            <div className="d-flex justify-content-between text-danger">
            <h5> Rating: {rating.rate}</h5>
            <h5> Count: {rating.count}</h5>
            </div>
          <p> <h5 className='text-success'>Products Info:</h5>  {description}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default ProductDetails;