// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Account from "./Components/Account";
import { UserProvider } from "./context/UserContext";
import "./styles.css";
const App = () => {
  return (
    <Router>
      <UserProvider>
        <div>
          <nav>
            <ul
              type="none"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <li>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontSize: "25px",
                    color: "#02fdb1",
                  }}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    fontSize: "25px",
                    color: "#02fdb1",
                  }}
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  style={{
                    textDecoration: "none",
                    fontSize: "25px",
                    color: "#02fdb1",
                  }}
                >
                  Account
                </Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;
