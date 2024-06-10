import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegisterForm = () => {
  const [user, setUser] = useState({ username: '', password: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
