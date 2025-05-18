import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [enrollment, setenrollment] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
     const response = await fetch("https://event-management-backend-3.onrender.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enrollment, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log("Login successful!");
        alert("Login Successful!");
        window.location.href = data.redirect; // Redirect to dashboard
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
       <form onSubmit={handleLogin}>
  <div className="input-group">
    <label>Enrollment</label>
    <input
      type="text"
      placeholder="Enter your enrollment"
      value={enrollment}
      onChange={(e) => setenrollment(e.target.value)}
      required
    />
  </div>
  <div className="input-group">
    <label>Password</label>
    <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
  <button type="submit" className="login-button">
    Login
  </button>
</form>

      </div>
    </div>
  );
};

export default Login;


