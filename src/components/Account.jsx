// src/components/Account.js
import React, { useState } from "react";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdateAccount = () => {
    // Implement update account logic (e.g., call an API)
    console.log("Update Account:", { email, password });
  };

  return (
    <div>
      <h2>Account</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleUpdateAccount}>
          Update Account
        </button>
      </form>
    </div>
  );
};

export default Account;
