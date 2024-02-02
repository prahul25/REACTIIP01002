// src/components/Register.js
import "../styles.css";
import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const Register = () => {
  const { updateUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const userData = { email, password };
    // Assuming you have a backend API for user registration
    // Here, for simplicity, we're just updating the context and localStorage
    console.log(userData.password.length);
    if (userData.email.length === 0 || userData.password.length === 0) {
      alert("The input field should not be empty");
    } else {
      updateUser(userData);
      alert("Registration successful!");
      setEmail("");
      setPassword("");
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
      <h1 style={{ color: "white" }}>Register</h1>
      <form className="wrapper">
        <h2 className="greetingMsg">You are new</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
