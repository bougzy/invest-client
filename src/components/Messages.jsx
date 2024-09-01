import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { getUserDashboard, getMessages } from '../services/api';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const { data } = await getUserDashboard();
        setDashboardData(data);

        const messagesResponse = await getMessages(data.userId);
        if (Array.isArray(messagesResponse.data)) {
          setMessages(messagesResponse.data);
        } else {
          console.error('Messages response is not an array:', messagesResponse.data);
          setMessages([]);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <div>
      <h3>Messages</h3>
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <Card key={index} className="mt-2">
            <Card.Body>
              <Card.Text>
                <strong>{msg.from === 'admin' ? 'Admin' : 'You'}:</strong> {msg.content}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No messages available</p>
      )}
    </div>
  );
};

export default Messages;
