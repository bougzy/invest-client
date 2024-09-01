import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FaUser, FaDollarSign, FaArrowUp, FaSignOutAlt } from 'react-icons/fa'; // Example icons from react-icons

const Sidebar = ({ setSelectedItem, isSidebarOpen, toggleSidebar, activeItem }) => {
  return (
    <>
      {/* Sidebar toggle button */}
      <Button
        variant="secondary"
        onClick={toggleSidebar}
        className="toggle-btn d-md-none position-fixed top-0 start-0 m-2"
      >
        {isSidebarOpen ? 'Close' : 'Menu'}
      </Button>

      {/* Sidebar content */}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Nav className="flex-column p-3">
          <Nav.Link
            onClick={() => { setSelectedItem('profile'); toggleSidebar(); }}
            className={`mt-5 text-white fw-bold position-relative ${activeItem === 'profile' ? 'active' : ''}`}
          >
            <FaUser className="me-2" /> Profile
            {activeItem === 'profile' && <div className="active-indicator" />}
          </Nav.Link>
          <Nav.Link
            onClick={() => { setSelectedItem('deposit'); toggleSidebar(); }}
            className={`mt-5 text-white fw-bold position-relative ${activeItem === 'deposit' ? 'active' : ''}`}
          >
            <FaDollarSign className="me-2" /> Deposit
            {activeItem === 'deposit' && <div className="active-indicator" />}
          </Nav.Link>
          <Nav.Link
            onClick={() => { setSelectedItem('withdraw'); toggleSidebar(); }}
            className={`mt-5 text-white fw-bold position-relative ${activeItem === 'withdraw' ? 'active' : ''}`}
          >
            <FaArrowUp className="me-2" /> Withdraw
            {activeItem === 'withdraw' && <div className="active-indicator" />}
          </Nav.Link>
          <Nav.Link
            onClick={() => { setSelectedItem('logout'); toggleSidebar(); }}
            className={`mt-5 text-white fw-bold position-relative ${activeItem === 'logout' ? 'active' : ''}`}
          >
            <FaSignOutAlt className="me-2" /> Logout
            {activeItem === 'logout' && <div className="active-indicator" />}
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
