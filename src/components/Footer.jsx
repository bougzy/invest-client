import React from 'react';
import { Container, Row, Col, ListGroup, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              JP Morgan FX is a leading investment platform specializing in forex trading and cryptocurrency investments.
              Our mission is to provide clients with tools and expertise to achieve financial success.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark border-0">
                <Nav.Link href="/about" className="text-light">About</Nav.Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <Nav.Link href="/services" className="text-light">Services</Nav.Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <Nav.Link href="/privacy" className="text-light">Privacy Policy</Nav.Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@jpmorganfx.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Financial St, New York, NY 10001</p>
            <div className="d-flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} JP Morgan FX. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
