



import React, { useEffect, useState } from 'react';
import { getAdminDashboard, getAllUsers, blockUser, unblockUser, getMessages, sendMessage, replyToMessage } from '../services/api';
import { Container, Table, Button, Card, Modal, Form } from 'react-bootstrap';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSendMessageModal, setShowSendMessageModal] = useState(false);
  const [showReplyMessageModal, setShowReplyMessageModal] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const { data } = await getAdminDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching admin dashboard data:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const { data } = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchMessages = async () => {
      try {
        const { data } = await getMessages();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchDashboardData();
    fetchUsers();
    fetchMessages();
  }, []);

  const handleBlockUser = async (userId) => {
    try {
      await blockUser(userId);
      setUsers(users.map(user => (user._id === userId ? { ...user, blocked: true } : user)));
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      await unblockUser(userId);
      setUsers(users.map(user => (user._id === userId ? { ...user, blocked: false } : user)));
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  };

  const handleSendMessage = async () => {
    try {
      await sendMessage({ userId: selectedUser, content: newMessage });
      alert('Message sent successfully!');
      setNewMessage('');
      setShowSendMessageModal(false);

      // Fetch updated messages
      const { data } = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleReplyMessage = async () => {
    try {
      await replyToMessage(selectedMessage._id, newMessage);
      alert('Reply sent successfully!');
      setNewMessage('');
      setShowReplyMessageModal(false);

      // Fetch updated messages
      const { data } = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error('Error replying to message:', error);
    }
  };

  return (
    <Container>
      {dashboardData ? (
        <Card>
          <Card.Body>
            <Card.Title>Admin Dashboard</Card.Title>
            <Card.Text>Admin Email: {dashboardData.email}</Card.Text>
            {/* Additional admin data can be displayed here */}
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}

      <h3>Manage Users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.blocked ? 'Blocked' : 'Active'}</td>
              <td>
                {user.blocked ? (
                  <Button variant="success" onClick={() => handleUnblockUser(user._id)}>
                    Unblock
                  </Button>
                ) : (
                  <Button variant="danger" onClick={() => handleBlockUser(user._id)}>
                    Block
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Messages</h3>
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <Card key={index} className="mt-2">
            <Card.Body>
              <Card.Text>
                <strong>{msg.from === 'admin' ? 'Admin' : 'User'}:</strong> {msg.content}
                <Button
                  variant="link"
                  onClick={() => {
                    setSelectedMessage(msg);
                    setShowReplyMessageModal(true);
                  }}
                >
                  Reply
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No messages available</p>
      )}

      {/* Send Message Modal */}
      <Modal show={showSendMessageModal} onHide={() => setShowSendMessageModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send a Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Select User</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="">Select a user</option>
                {users.map(user => (
                  <option key={user._id} value={user._id}>{user.username}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Reply Message Modal */}
      <Modal show={showReplyMessageModal} onHide={() => setShowReplyMessageModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reply to Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Reply</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your reply"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleReplyMessage}>
              Reply
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
