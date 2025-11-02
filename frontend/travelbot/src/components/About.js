import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container className="text-center my-5">
        <h2 className="fw-bold mb-3 text-primary">About Travel Assist</h2>
        <p className="lead text-muted">
          Travel Assist helps you explore Sri Lanka’s beauty — from historical
          sites to tropical beaches — with customized itineraries, local
          insights, and the best travel deals.
        </p>
      </Container>
    </div>
  );
}

export default About;
