


import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import UserDashboard from './components/Userdashboard'; 
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import { AuthProvider } from './context/AuthContext';
import "./App.css";
import ForgotPassword from './components/ForgotPassword';
import Footer from "./components/Footer"
const App = () => {
  const location = useLocation();
  
  // Determine whether to show the navigation bar based on the current route
  const shouldShowNavBar = !['/dashboard', '/admindashboard'].includes(location.pathname);

  return (
    <div>
      <AuthProvider>
        {shouldShowNavBar && <NavigationBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
