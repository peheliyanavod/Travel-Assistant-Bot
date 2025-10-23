import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      {/* === Hero Slider === */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Tropical Paradise"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Discover Your Next Adventure
            </h2>
            <p className="lead">Explore exotic destinations around the world with Travel Assist.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Beach Vibes"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Explore Hidden Gems
            </h2>
            <p className="lead">Find breathtaking spots and local experiences across the globe.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef"
            alt="City Lights"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Make Memories That Last Forever
            </h2>
            <p className="lead">Plan your perfect vacation effortlessly with Travel Assist.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* === About Section === */}
      <Container className="text-center my-5">
        <h2 className="fw-bold mb-3 text-primary">About Travel Assist</h2>
        <p className="lead text-muted">
          Travel Assist helps you plan your dream trips with ease — from destinations and
          itineraries to exclusive travel deals. Let us guide your next unforgettable adventure.
        </p>
      </Container>

      {/* === Popular Destinations === */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4 text-primary">Popular Destinations</h2>
        <Row>
          {[
            {
              name: "Bali, Indonesia",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            },
            {
              name: "Paris, France",
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            },
            {
              name: "Tokyo, Japan",
              img: "https://images.unsplash.com/photo-1558981033-7a89d8e0e5d2",
            },
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
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* === Travel Packages === */}
      <Container className="my-5 bg-light p-5 rounded-4">
        <h2 className="text-center fw-bold mb-4 text-primary">Featured Packages</h2>
        <Row>
          {[
            { title: "Romantic Getaway", price: "$899", days: "5 Days / 4 Nights" },
            { title: "Adventure Escape", price: "$699", days: "4 Days / 3 Nights" },
            { title: "Luxury Cruise", price: "$1299", days: "7 Days / 6 Nights" },
          ].map((pkg, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="text-center border-0 shadow-lg rounded-4">
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">{pkg.title}</Card.Title>
                  <Card.Text>{pkg.days}</Card.Text>
                  <h4 className="text-success fw-bold">{pkg.price}</h4>
                  <Button variant="outline-primary" className="rounded-pill mt-3">
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* === Why Choose Us === */}
      <Container className="text-center my-5">
        <h2 className="fw-bold mb-4 text-primary">Why Choose Travel Assist?</h2>
        <Row>
          <Col md={3}>
            <i className="bi bi-compass fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Expert Guides</h5>
            <p>Get insights from local experts for the best experience.</p>
          </Col>
          <Col md={3}>
            <i className="bi bi-currency-dollar fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Best Prices</h5>
            <p>Affordable travel packages tailored for every budget.</p>
          </Col>
          <Col md={3}>
            <i className="bi bi-shield-check fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Safe Travels</h5>
            <p>We ensure top-notch safety and comfort for all travelers.</p>
          </Col>
          <Col md={3}>
            <i className="bi bi-heart-fill fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Customer Care</h5>
            <p>24/7 support to help you before, during, and after your trip.</p>
          </Col>
        </Row>
      </Container>

      {/* === Call to Action === */}
      <div
        className="text-center text-light py-5"
        style={{
          background: "linear-gradient(90deg, #0077b6, #00b4d8)",
        }}
      >
        <h2 className="fw-bold mb-3">Ready to Start Your Journey?</h2>
        <p className="lead mb-4">
          Plan your next unforgettable trip with Travel Assist — the smarter way to travel.
        </p>
        <Button variant="light" size="lg" className="rounded-pill fw-bold px-4">
          Plan My Trip
        </Button>
      </div>
    </div>
  );
}

export default Home;
