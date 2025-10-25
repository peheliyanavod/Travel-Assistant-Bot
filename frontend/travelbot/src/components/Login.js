import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // mock validation
    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("userSession", "true");
      navigate("/");
    } else {
      alert("Invalid email or password");
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
        <h3 className="text-center mb-4 fw-bold text-primary">Login to Travel Assist</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-pill px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
