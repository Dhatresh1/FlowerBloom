import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedName = localStorage.getItem('name');

    if (formData.email === storedEmail && formData.password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', storedName);
      navigate('/');
      window.location.reload(); // refresh to update navbar
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login_container">
      <div className="login_box">
        <h2>Login to FlowerShop</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup_text">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
