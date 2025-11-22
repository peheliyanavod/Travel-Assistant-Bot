import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("api/token/", {
        username: username,
        password: password,
      });

      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

      navigate("/");
    } catch (error) {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #00b4d8, #0077b6, #90e0ef)",
      }}
    >
      <div className="card shadow-lg p-5 rounded-4" style={{ maxWidth: "400px", width: "90%" }}>
        <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control rounded-pill px-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="fw-semibold">Or continue with</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light border rounded-pill">
              <i className="bi bi-google text-danger"></i> Google
            </button>
            <button className="btn btn-light border rounded-pill">
              <i className="bi bi-facebook text-primary"></i> Facebook
            </button>
          </div>
        </div>

        <div className="text-center mt-3">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-decoration-none text-primary fw-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
