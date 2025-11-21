import React from "react";
import logo from "../Images/Logos/Travel_Assist_Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("userSession");

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #0077b6, #00b4d8, #90e0ef)",
        marginBottom: "20px",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center fw-bold text-light"
          to="/"
        >
          <img
            src={logo}
            alt="Travel Assist Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top me-2 rounded-circle shadow"
          />
          Travel Assist
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light fw-semibold"
                to="/destinations"
              >
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/packages">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light fw-semibold"
                to="/accommodations"
              >
                Accommodations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/contact">
                Contact Us
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light fw-semibold"
                    to="/profile"
                  >
                    <i className="bi bi-person-circle me-1"></i> Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light rounded-pill ms-3"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="btn btn-light ms-lg-3 px-4 fw-bold rounded-pill"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
