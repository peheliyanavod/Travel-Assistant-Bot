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
        <h2 className="fw-bold mb-3">Plan Your Dream Sri Lankan Adventure!</h2>
        <p className="lead mb-4">
          Discover the best of Sri Lanka with Travel Assist — your trusted local
          travel planner.
        </p>
        <Link to="/chatbot">
          <Button
            variant="light"
            size="lg"
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
