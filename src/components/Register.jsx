import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import { Button, Form, Container, Spinner, Alert, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link component

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await registerUser({ email, password, username });
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-light p-4">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                <h4>Register</h4>
              </Card.Title>
              {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <>
                  {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername" className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mb-3">
                      Register
                    </Button>
                    <div className="text-center">
                      <span>Already have an account? </span>
                      <Link to="/login" className="btn btn-link">
                        Login here
                      </Link>
                    </div>
                  </Form>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
