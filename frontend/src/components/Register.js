import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("api/user/register/", 
        {
          username: user.name,
          password: user.password,
        }
      );
      navigate("/login");
    } catch (e) {
      alert("Registration failed");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #90e0ef, #00b4d8, #0077b6)",
      }}
    >
      <div
        className="card shadow-lg p-5 rounded-4"
        style={{ maxWidth: "400px", width: "90%" }}
      >
        <h3 className="text-center mb-4 fw-bold text-primary">
          Create an Account
        </h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control rounded-pill px-3"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-pill px-3"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill px-3"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill fw-bold"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-decoration-none text-primary fw-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
