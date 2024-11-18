import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../../../Firebase/auth';
import './Register.css';  // Import the SCSS file

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        navigate('/sell'); // After successful signup, navigate to Sell page
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <main className="register-container">
      <div className="register-box">
        <div className="text-center">
          <h3 className="title">Create a New Account</h3>
        </div>
        <form onSubmit={onSubmit} className="form">
          <div className="input-group">
            <label className="label">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>

          <div className="input-group">
            <label className="label">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </div>

          <div className="input-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
            />
          </div>

          {errorMessage && <span className="error-message">{errorMessage}</span>}

          <button
            type="submit"
            disabled={isRegistering}
            className={`submit-button ${isRegistering ? 'disabled' : ''}`}
          >
            {isRegistering ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
