import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sigiriya from "../Images/Hero slider/Sigiriya.png";
import Sigiriya_2 from "../Images/Hero slider/Sigiriya 2.png";
import Nine_arch from "../Images/Hero slider/Ella nine arch.png";
import Nine_arch_2 from "../Images/Hero slider/Ella nine arch 2.png";
import Unawatuna from "../Images/Hero slider/Unawatuna beach.png";
import Elephants from "../Images/Hero slider/Elephants.jpg";
import Port_city from "../Images/Hero slider/Port_City.jpg";
import Temple from "../Images/Hero slider/Temple.jpg";
import Galle_Fort from "../Images/Hero slider/Galle fort.png";

function Home() {
  return (
    <div>
      {/* === Hero Slider === */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sigiriya}
            alt="Sigiriya Rock Fortress"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Discover the Wonders of Sri Lanka
            </h2>
            <p className="lead">
              From golden beaches to misty mountains — explore paradise island
              with Travel Assist.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Nine_arch}
            alt="Ella Nine Arches Bridge"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Experience Nature & Culture
            </h2>
            <p className="lead">
              Discover tea gardens, ancient cities, and wildlife in every
              corner.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Unawatuna}
            alt="Unawatuna Beach"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Your Journey Starts Here
            </h2>
            <p className="lead">
              Let Travel Assist plan your perfect Sri Lankan getaway.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Elephants}
            alt="Elephants"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Your Journey Starts Here
            </h2>
            <p className="lead">
              Let Travel Assist plan your perfect Sri Lankan getaway.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Port_city}
            alt="Port City"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Your Journey Starts Here
            </h2>
            <p className="lead">
              Let Travel Assist plan your perfect Sri Lankan getaway.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Temple}
            alt="Temple"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Your Journey Starts Here
            </h2>
            <p className="lead">
              Let Travel Assist plan your perfect Sri Lankan getaway.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* === About Section === */}
      <Container className="text-center my-5">
        <h2 className="fw-bold mb-3 text-primary">About Travel Assist</h2>
        <p className="lead text-muted">
          Travel Assist helps you explore Sri Lanka’s beauty — from historical
          sites to tropical beaches — with customized itineraries, local
          insights, and the best travel deals.
        </p>
      </Container>

      {/* === Popular Destinations === */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4 text-primary">
          Top Sri Lankan Destinations
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
        <h2 className="text-center fw-bold mb-4 text-primary">
          Featured Packages in Sri Lanka
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
                  <Card.Text>{pkg.days}</Card.Text>
                  <h4 className="text-success fw-bold">{pkg.price}</h4>
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

      {/* === Why Choose Us === */}
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
          <Col md={3}>
            <i className="bi bi-shield-check fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">Safe & Reliable</h5>
            <p>Travel confidently with verified accommodations and guides.</p>
          </Col>
          <Col md={3}>
            <i className="bi bi-headset fs-1 text-primary"></i>
            <h5 className="mt-3 fw-semibold">24/7 Support</h5>
            <p>
              Always ready to assist you — before, during, and after your trip.
            </p>
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

export default Home;
