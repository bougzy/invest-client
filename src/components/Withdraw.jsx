import React, { useEffect, useState } from 'react';
import { Form, Button, Spinner, Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { withdrawFunds } from '../services/api';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed
  }, []);

  const handleWithdraw = async () => {
    setLoading(true);
    setSuccessMessage('');
    setError('');

    try {
      await withdrawFunds({ amount, paymentMethod });
      setSuccessMessage('Withdrawal request submitted successfully!');
    } catch (error) {
      setError('Error making withdrawal. Please try again.');
      console.error('Error making withdrawal:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm border-light p-4">
            <Card.Title className="text-center mb-4">
              <h4>Make a Withdrawal</h4>
            </Card.Title>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter withdrawal amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter payment method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />
                </Form.Group>
                {successMessage && <Alert variant="success" className="mb-3">{successMessage}</Alert>}
                {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
                <Button variant="primary" onClick={handleWithdraw} className="w-100">
                  Submit
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Withdraw;
