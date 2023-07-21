import React from 'react'
import '../assets/css/NavBar.css'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fs-4" as={NavLink} to="/">Online<span>Store</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto fs-5 my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link className="px-4" as={NavLink} to="/search">Search</Nav.Link>
            <Nav.Link as={NavLink} to="/cart/item"><i className="bi bi-cart-dash"></i>(<span>0</span>)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar