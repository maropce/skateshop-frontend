import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
