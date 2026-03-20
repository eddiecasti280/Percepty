import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Auth.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) return setError('Passwords do not match.');
    const result = register(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p className="auth-subtitle">Create a free Percepty account</p>
        {error && <div className="auth-error">{error}</div>}
        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required autoFocus />
        </div>
        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} required placeholder="At least 6 characters" />
        </div>
        <div className="auth-field">
          <label htmlFor="confirm">Confirm Password</label>
          <input id="confirm" type="password" value={confirm}
            onChange={(e) => setConfirm(e.target.value)} required />
        </div>
        <button className="auth-submit" type="submit">Create Account</button>
        <div className="auth-footer">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;