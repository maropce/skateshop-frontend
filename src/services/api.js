import axios from 'axios';

const API_URL = 'https://skateshop-4qr5.onrender.com';

export const registerUser = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const fetchProducts = () => {
  return axios.get(`${API_URL}/api/v1/products`);
};
