import React from "react";
import { Carousel } from "react-bootstrap";
import Sigiriya from "../Images/Hero slider/Sigiriya.png";
// import Sigiriya_2 from "../Images/Hero slider/Sigiriya 2.png";
import Nine_arch from "../Images/Hero slider/Ella nine arch.png";
// import Nine_arch_2 from "../Images/Hero slider/Ella nine arch 2.png";
import Unawatuna from "../Images/Hero slider/Unawatuna beach.png";
import Elephants from "../Images/Hero slider/Elephants.jpg";
import Port_city from "../Images/Hero slider/Port_City.jpg";
import Temple from "../Images/Hero slider/Temple.jpg";
import TempleOfTooth from "../Images/Hero slider/temple_of_tooth.png";
// import Galle_Fort from "../Images/Hero slider/Galle fort.png";

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
              Discover the Iconic Sigiriya Rock Fortress
            </h2>
            <p className="lead">
              Climb the Lion Rock, admire ancient frescoes, and stay in scenic
              resorts nearby - your royal adventure awaits with{" "}
              <strong>Travel Assist</strong>.
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
              Journey Through the Misty Hills of Ella
            </h2>
            <p className="lead">
              Watch the trains pass over the famous Nine Arch Bridge and relax
              in cozy hillside lodges surrounded by lush tea gardens.
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
              Escape to the Golden Shores of Unawatuna
            </h2>
            <p className="lead">
              Sun, sand, and serenity - unwind at beachside villas and enjoy the
              vibrant coastal life with <strong>Travel Assist</strong>.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Elephants}
            alt="Sri Lankan Elephants"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Witness the Majestic Giants of Sri Lanka
            </h2>
            <p className="lead">
              Experience unforgettable wildlife safaris and get closer to nature
              at Yala and Minneriya National Parks.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Port_city}
            alt="Port City Colombo"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Discover the Modern Charm of Colombo
            </h2>
            <p className="lead">
              From luxury hotels to oceanfront dining - explore Sri Lanka’s
              thriving capital with ease through <strong>Travel Assist</strong>.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TempleOfTooth}
            alt="Temple of the Tooth, Kandy"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-light bg-dark bg-opacity-50 p-2 rounded">
              Explore the Sacred City of Kandy
            </h2>
            <p className="lead">
              Visit the world-famous Temple of the Tooth and immerse yourself in
              Sri Lanka’s rich cultural heritage.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSlider;
