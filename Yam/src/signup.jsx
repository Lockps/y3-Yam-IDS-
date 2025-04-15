// Signup.jsx
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info: ", { username, email, password });
    // ดำเนินการสมัครสมาชิกที่นี่
  };

  return (
    <div className="signup-form-container">
      <h2>Welcome!</h2>
      <p>Use these awesome forms to login or create a new account</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
};

export default Signup;
