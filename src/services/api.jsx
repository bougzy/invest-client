


// services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const API = axios.create({
  baseURL: API_BASE_URL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth
export const registerUser = (data) => API.post('/register', data);
export const loginUser = (data) => API.post('/login', data);
export const forgotPassword = (data) => API.post('/forgot-password', data); // Add this line

// User
export const getUserDashboard = () => API.get('/user/dashboard');
export const depositFunds = (data) => API.post('/deposit', data);
export const withdrawFunds = (data) => API.post('/withdraw', data);
export const sendUserMessage = (data) => API.post('/user/message', data);
export const getUserMessages = () => API.get('/user/messages');

// Admin
export const getAdminDashboard = () => API.get('/admin/dashboard');
export const getAllUsers = () => API.get('/admin/users');
export const sendAdminMessage = (data) => API.post('/admin/message', data);
export const blockUser = (userId) => API.put(`/admin/block-user/${userId}`);
export const unblockUser = (userId) => API.put(`/admin/unblock-user/${userId}`);

// General Messaging
export const getMessages = () => API.get('/messages');
export const sendMessage = (data) => API.post('/messages', data);
export const replyToMessage = (messageId, content) => API.post(`/messages/${messageId}/reply`, { content });
