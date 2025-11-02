import React from "react";
import { Carousel } from "react-bootstrap";
import Sigiriya from "../Images/Hero slider/Sigiriya.png";
import Sigiriya_2 from "../Images/Hero slider/Sigiriya 2.png";
import Nine_arch from "../Images/Hero slider/Ella nine arch.png";
import Nine_arch_2 from "../Images/Hero slider/Ella nine arch 2.png";
import Unawatuna from "../Images/Hero slider/Unawatuna beach.png";
import Elephants from "../Images/Hero slider/Elephants.jpg";
import Port_city from "../Images/Hero slider/Port_City.jpg";
import Temple from "../Images/Hero slider/Temple.jpg";
import Galle_Fort from "../Images/Hero slider/Galle fort.png";

function HeroSlider() {
  return (
    <div>
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
    </div>
  );
}

export default HeroSlider;
