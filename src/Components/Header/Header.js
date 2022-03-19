import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './Header.css'

const Header = (props) => {
    return (
<div className='container'>
  <Navbar bg="body" expand="lg mb-5">
  <Container fluid>
    <Navbar.Brand href="#">NH Awesome Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Products</Nav.Link>
        <Nav.Link href="#">Cart <sup id='countNum' >{props.count}</sup> </Nav.Link>
        <Nav.Link href="#">About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
};

export default Header;