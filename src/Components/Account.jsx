// src/components/Account.js
import "../styles.css";
import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { updateUserData } from "../services/UserService";

const Account = () => {
  const { user, updateUser } = useUserContext();
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");

  const handleUpdateAccount = () => {
    const updatedUser = updateUserData({ email, password });
    updateUser(updatedUser);
    alert("Account updated successfully!");
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
      <h1 style={{ color: "white" }}>Account</h1>
      <form className="wrapper">
        <h2 className="greetingMsg">You can explore</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <br />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />

        <button type="button" onClick={handleUpdateAccount}>
          Update Account
        </button>
      </form>
    </div>
  );
};

export default Account;
