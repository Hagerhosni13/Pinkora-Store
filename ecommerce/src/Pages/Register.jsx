
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Account created successfully! Welcome to Pinkora.");
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join Pinkora and enjoy shopping!</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

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
            placeholder="Create a password"
            minLength={6}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
