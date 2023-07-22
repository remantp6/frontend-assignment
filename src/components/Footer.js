import React from 'react'
import "../assets/css/Footer.css"
import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <Container>
          <Row>
            <Col sm={4} className="px-5 px-sm-2">
              <h6 className='pb-1'>Information</h6>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Returns Policy</li>
              <li className="mb-0">Shipping Policy</li>
            </Col>
            <Col sm={4} className="px-5">
              <h6 className='py-3 mb-0'>Account</h6>
              <li>Dashboard</li>
              <li>My Orders</li>
              <li>My Wishlist</li>
              <li className="mb-0">Account</li>
            </Col>
            <Col sm={4} className="px-5">
              <h6 className='py-3 mb-0'>Categories</h6>
              <li> Clothing</li>
              <li>Bags</li>
              <li>Jewelery</li>
              <li className=" mb-0">Electronics</li>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
