import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="sign-up-form-container">
      <h2>Welcome!</h2>
      <p>Use these awesome forms to login or create new account in your project for free.</p>
      <form>
        <input type="text" placeholder="Your full name" />
        <input type="email" placeholder="Your email address" />
        <input type="password" placeholder="Your password" />
        
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        
        <button type="submit">Sign Up</button>
      </form>

      {/* ลิงก์กลับไปหน้า SignIn */}
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUpForm;
