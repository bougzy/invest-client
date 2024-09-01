import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { sendMessage } from '../services/api';

const SendMessage = () => {
  const [showModal, setShowModal] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      await sendMessage({ content: newMessage });
      alert('Message sent successfully!');
      setNewMessage('');
      setShowModal(false);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Send Message</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send a Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
    </>
  );
};

export default SendMessage;
