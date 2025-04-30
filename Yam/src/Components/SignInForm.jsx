import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="login-form-container">  {/* Changed className to match CSS */}
  <h2>Nice to see you!</h2>
  <form>
    <input type="email" placeholder="Your email address" />
    <input type="password" placeholder="Your password" />
    <div className="remember-me">
      <input type="checkbox" id="remember" />
      <label htmlFor="remember">Remember me</label>
    </div>
    <button type="submit">Sign In</button>
  </form>

      {/* ลิงก์ไปยังหน้า SignUp */}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignInForm;
