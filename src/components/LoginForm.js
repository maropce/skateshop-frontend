import React, { useState } from 'react';
import { loginUser } from '../services/api';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
