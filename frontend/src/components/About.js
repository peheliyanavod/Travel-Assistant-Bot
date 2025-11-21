import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container className="text-center my-5">
        <h2 className="fw-bold mb-3 text-primary">About Travel Assist</h2>
        <p className="lead text-muted">
          <strong>Travel Assist</strong> is your trusted Sri Lankan travel
          companion - helping you discover iconic landmarks, plan personalized
          tours, and now book comfortable accommodations across the island.
        </p>
        <p className="text-muted">
          Whether you're looking for beachfront resorts, cozy mountain lodges,
          or city stays, we bring you the best deals and local insights - all in
          one place.
        </p>
      </Container>
    </div>
  );
}

export default About;
