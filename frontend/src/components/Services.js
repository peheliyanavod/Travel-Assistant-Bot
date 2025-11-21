import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Services() {
  return (
    <div>
      <Container className="text-center my-5">
        <h2 className="fw-bold mb-4 text-primary">Why Choose Travel Assist?</h2>
        <Row>
          <Col md={3}>
            <i className="bi bi-geo-alt fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Local Expertise</h5>
            <p>
              We know every hidden gem in Sri Lanka, from mountains to lagoons.
            </p>
          </Col>
          <Col md={3}>
            <i className="bi bi-wallet2 fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Affordable Packages</h5>
            <p>Best local deals tailored to your budget and preferences.</p>
          </Col>
          {/* <Col md={3}>
            <i className="bi bi-shield-check fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Safe & Reliable</h5>
            <p>Travel confidently with verified accommodations and guides.</p>
          </Col> */}
          <Col md={3}>
            <i className="bi bi-headset fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">24/7 Support</h5>
            <p>
              Always ready to assist you - before, during, and after your trip.
            </p>
          </Col>
          <Col md={3}>
            <i className="bi bi-house-heart fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Hotel Booking Made Easy</h5>
            <p>
              Compare and book verified accommodations - from luxury resorts to
              budget stays - all in one platform.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
