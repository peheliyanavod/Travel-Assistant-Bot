import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Chatbot from "./components/Chatbot";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";
import Accommodations from "./components/Accommodations";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
