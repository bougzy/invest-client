import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import jp from "../assets/jp.jpeg";
const NavigationBar = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('email'); // Retrieve user's email from localStorage

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    localStorage.removeItem('email'); // Remove the email from localStorage
    navigate('/'); // Redirect to the home page
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Navbar.Brand href="/" className="fw-bold">
        <img src={jp} width="80" className="p-3 rounded-5" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" className="text-light">Home</Nav.Link> {/* Home Link */}
          {userEmail ? (
            <>
              <Navbar.Text className="text-light me-3">
                Signed in as: <strong>{userEmail}</strong>
              </Navbar.Text>
              <Button variant="outline-light" onClick={handleLogout} className="ms-2">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Nav.Link href="/register" className="text-light">Register</Nav.Link> {/* Register Link */}
              <Nav.Link href="/login" className="text-light">Login</Nav.Link> {/* Login Link */}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
