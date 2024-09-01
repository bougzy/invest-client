import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, etc.)

    // Redirect to the home page after logout
    navigate('/');
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg text-center">
        <Card.Body>
          <h3 className="mb-4">Are you sure you want to log out?</h3>
          <Button variant="danger" onClick={handleLogout} className="w-100">
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Logout;
