import React from "react";
import logo from "../Images/Logos/Travel_Assist_Logo.png";

function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{ background: "linear-gradient(90deg, #00b4d8, #0077b6)", marginTop: '20px' }}
    >
      <div className="container p-4">
        <section className="mb-4">
          <div className="d-flex justify-content-center mb-3">
            <a
              className="navbar-brand d-flex align-items-center fw-bold text-light"
              href="#"
            >
              <img
                src={logo}
                alt="Travel Assist Logo"
                width="130"
                height="130"
                className="d-inline-block align-text-top me-2 rounded-circle shadow"
              />
            </a>
          </div>
          <p className="lead mb-3">
            ✈️ Stay updated with our latest travel deals and destination guides!
          </p>

          <form className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-auto me-2 rounded-pill px-3"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="btn btn-light rounded-pill px-4 fw-semibold"
            >
              Subscribe
            </button>
          </form>
        </section>

        <section className="mt-4">
          <a href="#" className="text-white me-4">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-twitter-x fs-4"></i>
          </a>
          <a href="#" className="text-white">
            <i className="bi bi-youtube fs-4"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Travel Assist. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
