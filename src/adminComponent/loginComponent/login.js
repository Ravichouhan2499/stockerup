import React, { useState, useRef } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../confiq";
import "./login.css";  // Import your CSS file

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();  // Using useRef for email input
  const passwordRef = useRef();  // Using useRef for password input

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");  // Reset error message before login attempt

  // Get the Firebase Auth instance

    try {
      // Sign in with Firebase using email and password
      await signInWithEmailAndPassword(
        Auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      // Login successful, redirect user to dashboard
      alert("Login successful!");
      navigate("/adminDashboard");  // Adjust this route as per your app's flow

    } catch (err) {
      // If there's an error (e.g. incorrect email/password)
      setError("Invalid email or password. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);  // Set loading to false once done
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <p className="error-message">{error}</p>} {/* Display error if any */}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailRef}  // Attach ref to email input
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}  // Attach ref to password input
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}  {/* Button text based on loading state */}
        </button>

        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>  {/* Link to Register */}
        </p>
      </form>
    </div>
  );
}
