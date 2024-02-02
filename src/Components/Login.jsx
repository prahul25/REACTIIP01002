// src/components/Login.js
import "../styles.css";
import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { updateUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // In a real-world scenario, you would typically make an API call to a backend for authentication
    // Here, for simplicity, we're assuming that the user data is stored in localStorage
    const storedUserData = JSON.parse(localStorage.getItem("user"));

    if (
      storedUserData &&
      storedUserData.email === email &&
      storedUserData.password === password
    ) {
      updateUser(storedUserData);
      alert("Login successful!");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Login</h1>
      <form className="wrapper">
        <h2 className="greetingMsg">Welcome back</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />

        <input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
