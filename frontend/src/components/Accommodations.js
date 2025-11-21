import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ocean_view from "../Images/Accommodations/ocean_view.png";
import hilltop_resort from "../Images/Accommodations/hilltop.png";
import safari_lodge from "../Images/Accommodations/safari_lodge.png";


const accommodations = [
  {
    id: 1,
    name: "Ocean View Hotel",
    location: "Colombo",
    price: "$120 / night",
    image: ocean_view,
  },
  {
    id: 2,
    name: "Hilltop Resort",
    location: "Kandy",
    price: "$95 / night",
    image: hilltop_resort,
  },
  {
    id: 3,
    name: "Safari Lodge",
    location: "Yala",
    price: "$150 / night",
    image: safari_lodge,
  },
];

function Accommodations() {
  return (
    <div className="py-5 bg-light">
      <Container className="text-center">
        <h2 className="fw-bold mb-5 text-primary">
          Available Accommodations
        </h2>
        <Row className="g-4">
          {accommodations.map((acc) => (
            <Col key={acc.id} md={4} sm={6}>
              <Card className="shadow-sm border-0 h-100 hover-shadow transition">
                <Card.Img
                  variant="top"
                  src={acc.image}
                  alt={acc.name}
                  className="rounded-top"
                />
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">
                    {acc.name}
                  </Card.Title>
                  <Card.Text className="text-muted mb-1">
                    {acc.location}
                  </Card.Text>
                  <Card.Text className="text-primary fw-semibold mb-3">
                    {acc.price}
                  </Card.Text>
                  <Button variant="primary" className="rounded-pill px-4">
                    Find Stays
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

export default Accommodations;
