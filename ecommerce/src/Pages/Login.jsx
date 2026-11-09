
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Login successful! Welcome to Pinkora.");
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back!</h1>
        <p>Login to your Pinkora account</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Create Account</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
