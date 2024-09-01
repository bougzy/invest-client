import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner, Container, Alert } from 'react-bootstrap';
import { getUserDashboard } from '../services/api';

const Profile = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const { data } = await getUserDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dashboardData.referralCode)
      .then(() => setCopySuccess('Referral code copied!'))
      .catch(() => setCopySuccess('Failed to copy referral code.'));
  };

  return (
    <Container className="my-5">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Card className="shadow-lg border-light rounded p-4">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              <h3>Welcome, {dashboardData.username}</h3>
            </Card.Title>
            <Card.Text className="mb-2 fw-bold">
              <strong>Email:</strong> {dashboardData.email}
            </Card.Text>
            <Card.Text className="mb-2 fw-bold">
              <strong>Balance:</strong> ${dashboardData.amount}
            </Card.Text>
            <Card.Text className="mb-2 fw-bold">
              <strong>Profit Balance:</strong> ${dashboardData.profitBalance}
            </Card.Text>
            <Card.Text className="mb-2 fw-bold">
              <strong>Referral Code:</strong> {dashboardData.referralCode}
              <Button
                variant="outline-secondary"
                className="ms-2"
                onClick={copyToClipboard}
              >
                Copy
              </Button>
            </Card.Text>
            <Card.Text className="mb-4 fw-bold">
              <strong>Referrals:</strong> {dashboardData.referrals}
            </Card.Text>
            {copySuccess && <Alert variant="success">{copySuccess}</Alert>}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Profile;
