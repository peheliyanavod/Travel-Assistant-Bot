import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Container className="text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <h1 className="display-3 fw-bold text-danger mb-3">404</h1>
      <h3 className="fw-semibold mb-3 text-dark">Oops! Page Not Found</h3>
      <p className="text-muted mb-4">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Button as={Link} to="/" variant="primary" className="rounded-pill px-4">
        Go Back Home
      </Button>
    </Container>
  );
}

export default PageNotFound;
