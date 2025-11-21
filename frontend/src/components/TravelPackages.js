import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function TravelPackages() {
  return (
    <div>
      <Container className="my-5 bg-light p-5 rounded-4">
        <h2 className="text-center fw-bold mb-4 text-primary">
          Featured Travel & Stay Packages in Sri Lanka
        </h2>

        <Row>
          {[
            {
              title: "Hill Country Escape",
              price: "Rs. 65,000",
              days: "5 Days / 4 Nights",
            },
            {
              title: "Cultural Heritage Tour",
              price: "Rs. 55,000",
              days: "4 Days / 3 Nights",
            },
            {
              title: "Southern Beach Bliss",
              price: "Rs. 75,000",
              days: "6 Days / 5 Nights",
            },
          ].map((pkg, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="text-center border-0 shadow-lg rounded-4">
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    {pkg.title}
                  </Card.Title>
                  <h4 className="text-success fw-bold">{pkg.price}</h4>
                  <Card.Text>
                    {pkg.days} <br />
                    Includes hotel bookings, guided tours, and transfers.
                  </Card.Text>

                  <Button
                    variant="outline-primary"
                    className="rounded-pill mt-3"
                  >
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TravelPackages;
