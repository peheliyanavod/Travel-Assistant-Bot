import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Travel Assist</h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
