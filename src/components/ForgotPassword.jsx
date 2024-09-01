import React, { useState } from 'react';
import { Button, Form, Container, Card, Alert } from 'react-bootstrap';
import { forgotPassword } from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await forgotPassword({ email });
      setSuccess('Password reset link sent to your email address.');
    } catch (error) {
      console.error('Error sending reset link:', error);
      setError('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg border-light">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <h4>Forgot Password</h4>
          </Card.Title>
          {success && <Alert variant="success" className="mb-4">{success}</Alert>}
          {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
