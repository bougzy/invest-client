import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Messages from './Messages';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import SendMessage from './SendMessage';
import Logout from './Logout';

const UserDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = () => {
    switch (selectedItem) {
      case 'messages':
        return <Messages />;
      case 'deposit':
        return <Deposit />;
      case 'withdraw':
        return <Withdraw />;
      case 'logout':
        return <Logout />;
      default:
        return <Profile />;
    }
  };

  return (
    <Container fluid>
      <div className="d-flex">
        <Sidebar
          setSelectedItem={setSelectedItem}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className={`content-area flex-grow-1 p-3 ${isSidebarOpen ? 'content-shifted' : ''}`}>
          {renderContent()}
        </div>
      </div>
    </Container>
  );
};

export default UserDashboard;
