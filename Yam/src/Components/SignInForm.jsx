// SignInForm.jsx
import React from "react";

const SignInForm = () => {
  return (
    <div className="login-form">
      <h2>Nice to see you!</h2>
      <p>Enter your email and password to sign in</p>
      <form>
        <input type="email" placeholder="Your email address" />
        <input type="password" placeholder="Your password" />
        
        <div className="remember-me">
          <input type="checkbox" id="remember" /> 
          <label htmlFor="remember">Remember me</label>
        </div>
        
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
