import React from "react";
import { Container, Card } from "react-bootstrap";

function Contact() {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg border-0 rounded-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center text-primary fw-bold mb-3">Contact Us</h2>
        <p className="text-center text-muted mb-4">
          Have questions or need assistance? We’d love to hear from you!
        </p>
        <ul className="list-unstyled text-center fs-5">
          <li className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@travelassist.com" className="text-decoration-none text-dark">
              support@travelassist.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+94123456789" className="text-decoration-none text-dark">
              +94 123 456 789
            </a>
          </li>
        </ul>
      </Card>
    </Container>
  );
}

export default Contact;
