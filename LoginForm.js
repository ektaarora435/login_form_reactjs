// src/LoginForm.js
import React, { useState } from 'react';
import styles from './LoginForm.module.css'; // Import CSS module

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., submit data to server)
    console.log('Form submitted:', { email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>LOGIN</h2>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className={styles.passwordInputGroup}>
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={handleShowPasswordToggle}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
      <button type="submit">Login</button>
      <div className={styles.forgotPassword}>
        <a href="#">Forgot Password?</a>
      </div>
    </form>
  );
};

export default LoginForm;
