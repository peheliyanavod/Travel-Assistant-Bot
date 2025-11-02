import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi there! I'm your Travel Assistant. How can I help you plan your next trip?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Hello, I'm your Travel Assistant! How can I help you today?",
        },
      ]);
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Header
                className="text-center text-light fw-bold fs-4 rounded-top-4"
                style={{
                  background:
                    "linear-gradient(90deg, #0077b6, #00b4d8, #90e0ef)",
                }}
              >
                ✈️ Travel Assistant Chatbot
              </Card.Header>

              <Card.Body
                className="p-3"
                style={{
                  backgroundColor: "#f8f9fa",
                  height: "60vh",
                  overflowY: "auto",
                }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`d-flex mb-3 ${
                      msg.sender === "user"
                        ? "justify-content-end"
                        : "justify-content-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-4 shadow-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-light text-dark"
                      }`}
                      style={{ maxWidth: "75%" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </Card.Body>

              <Card.Footer className="bg-white rounded-bottom-4">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="d-flex"
                >
                  <Form.Control
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="rounded-pill me-2"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      background:
                        "linear-gradient(90deg, #0077b6, #00b4d8, #90e0ef)",
                      border: "none",
                    }}
                  >
                    <SendFill size={20} />
                  </Button>
                </Form>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Chatbot;
