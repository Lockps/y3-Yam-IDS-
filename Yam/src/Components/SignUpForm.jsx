// src/Components/SignUpForm.jsx
import React from "react";

const SignUpForm = () => {
  return (
    <div className="signup-form-container">
      <h2>Welcome!</h2>
      <p>Use these awesome forms to login or create new account in your project for free.</p>
      <form>
        <input type="text" placeholder="Your full name" required />
        <input type="email" placeholder="Your email address" required />
        <input type="password" placeholder="Your password" required />
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
