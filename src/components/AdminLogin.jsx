


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { Button, Form, Container, Card, Row, Col } from 'react-bootstrap';

// const AdminLogin = () => {
//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Fetch admin credentials from environment variables (if available via some API or directly)
//     const adminUsername = process.env.REACT_APP_ADMIN_USERNAME || 'admin';
//     const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'adminpassword123';

//     if (username === adminUsername && password === adminPassword) {
//       await login({ username, password, role: 'admin' });
//       navigate('/admindashboard');
//     } else {
//       console.error('Invalid admin credentials');
//       alert('Invalid admin credentials');
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <Row className="w-100">
//         <Col xs={12} md={6} lg={4} className="mx-auto">
//           <Card className="p-4 shadow-lg">
//             <Card.Body>
//               <h3 className="text-center mb-4">Admin Login</h3>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formAdminUsername" className="mb-3">
//                   <Form.Label>Admin Username</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter admin username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formAdminPassword" className="mb-4">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Admin password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" className="w-100">
//                   Login as Admin
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminLogin;





// AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulated hardcoded credentials
  const adminCredentials = {
    username: 'admin',
    password: 'admin123',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === adminCredentials.username && password === adminCredentials.password) {
      // Store authentication state in local storage (or state management tool like Redux)
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admindashboard'); // Navigate to AdminDashboard upon successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
