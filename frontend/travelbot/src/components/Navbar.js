import React from "react";
import logo from "../Images/Logos/Travel_Assist_Logo.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "linear-gradient(90deg, #0077b6, #00b4d8, #90e0ef)", marginBottom: '20px' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center fw-bold text-light" href="#">
          <img
            src={logo}
            alt="Travel Assist Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top me-2 rounded-circle shadow"
          />
          Travel Assist
        </a>

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
              <a className="nav-link text-light fw-semibold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#">
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#">
                Travel Tips
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn btn-light ms-lg-3 px-4 fw-bold rounded-pill">
            Plan Your Trip
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
