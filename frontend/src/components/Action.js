import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Action() {
  return (
    <div>
      <div
        className="text-center text-light py-5"
        style={{
          background: "linear-gradient(90deg, #0077b6, #00b4d8)",
        }}
      >
        <h2 className="fw-bold mb-3">Select Your Dream Sri Lankan Stay Today!</h2>
        <p className="lead mb-4">
          Discover hand-picked hotels, scenic resorts, and cozy retreats - all
          available with instant booking on <strong>Travel Assist</strong>.
        </p>
        <Link to="/chatbot">
          <Button
            variant="light"
            size="md"
            className="rounded-pill fw-bold px-4"
          >
            Start Planning
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Action;
