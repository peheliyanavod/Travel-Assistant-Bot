import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import Sigiriya from "../Images/Hero slider/Sigiriya.png";
import Sigiriya_2 from "../Images/Hero slider/Sigiriya 2.png";
// import Nine_arch from "../Images/Hero slider/Ella nine arch.png";
import Nine_arch_2 from "../Images/Hero slider/Ella nine arch 2.png";
// import Unawatuna from "../Images/Hero slider/Unawatuna beach.png";
// import Elephants from "../Images/Hero slider/Elephants.jpg";
// import Port_city from "../Images/Hero slider/Port_City.jpg";
// import Temple from "../Images/Hero slider/Temple.jpg";
import Galle_Fort from "../Images/Hero slider/Galle fort.png";

function PopularDestinations() {
  return (
    <div>
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4 text-primary">
          Top Sri Lankan Destinations & Nearby Stays
        </h2>

        <Row>
          {[
            { name: "Ella", img: Nine_arch_2 },
            { name: "Galle Fort", img: Galle_Fort },
            { name: "Sigiriya", img: Sigiriya_2 },
          ].map((place, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={place.img}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{place.name}</Card.Title>
                  <Button variant="primary" className="rounded-pill">
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

export default PopularDestinations;
