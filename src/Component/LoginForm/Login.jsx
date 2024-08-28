import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Form Submitted");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-box">
          <FaUser className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="remember">
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" /> Remember Me
          </label>
          <a href="/forgot-password">Forget Password</a>
        </div>

        <button type="submit">Login</button>
        <div className="registerLink">
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
