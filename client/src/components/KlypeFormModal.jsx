//KlypeFormModal.jsx
import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

export default function KlypeFormModal({ show, handleClose }) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      linkedin: e.target.linkedinUrl.value,
    };

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL || "http://localhost:3001/api/waitlist",
        data
      );
      if (response.status === 200) {
        alert("You're in the waitlist!");
        handleClose();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="bg-black text-white rounded-4 border-0"
    >
      <Row className="g-0">
        {/* Left Gradient Panel */}
        <Col
          md={6}
          className="d-none d-md-flex flex-column justify-content-center align-items-start p-5 rounded-start"
          style={{
            background: "linear-gradient(180deg, #F78CF5 0%, #5A2D8B 100%)",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: "2rem",
              lineHeight: 1.2,
            }}
          >
            Step in.
            <br />
            Optimise.
            <br />
            Grow.
          </h2>
        </Col>

        {/* Right Form Panel */}
        <Col md={6} className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold m-0">KLYPE</h3>
            <Button
              variant="outline-light"
              onClick={handleClose}
              size="sm"
              className="border-0 rounded-circle"
              style={{ width: "30px", height: "30px", padding: 0 }}
              aria-label="Close"
            >
              ✕
            </Button>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                name="name"
                id="name"
                type="text"
                placeholder="e.g. John Doe"
                className="bg-dark text-white border-0 rounded-3 px-3 py-2"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="linkedinUrl">
              <Form.Control
                name="linkedinUrl"
                id="linkedinUrl"
                type="url"
                placeholder="e.g. https://linkedin.com/in/johnwick"
                className="bg-dark text-white border-0 rounded-3 px-3 py-2"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="email">
              <Form.Control
                name="email"
                id="email"
                type="email"
                placeholder="e.g. john@example.com"
                className="bg-dark text-white border-0 rounded-3 px-3 py-2"
                required
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              className="w-100 py-2 fw-bold rounded-3"
              style={{ backgroundColor: "#222", borderColor: "#222" }}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Sign up"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
}