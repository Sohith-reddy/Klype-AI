<<<<<<< HEAD
// KlypeFormModal.js
import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
=======
import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
>>>>>>> dff87f9ad4b20dc6399b9e0ec900fabaf88d4c9e

export default function KlypeFormModal({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="bg-black text-white rounded-4 border-0"
    >
      <Row className="g-0">
        {/* Left Gradient Panel (optional) */}
        <Col
          md={6}
          className="d-none d-md-flex flex-column justify-content-center align-items-start p-5 rounded-start"
          style={{
            background: 'linear-gradient(180deg, #F78CF5 0%, #5A2D8B 100%)'
          }}
        >
          <h2 style={{ color: '#fff', fontWeight: 500, fontSize: '2rem', lineHeight: 1.2 }}>
            Step in.<br />
            Optimise.<br />
            Grow.
          </h2>
        </Col>

<<<<<<< HEAD
        {/* Right Form Panel */}
        <Col md={6} className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold m-0">KLYPE</h3>
            <Button
              variant="outline-light"
              onClick={handleClose}
              size="sm"
              className="border-0 rounded-circle"
              style={{ width: '30px', height: '30px', padding: 0 }}
            >
              ✕
            </Button>
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="e.g. John Doe"
                className="bg-dark text-white border-0 rounded-3 px-3 py-2"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="linkedinUrl">
              <Form.Control
                type="url"
                placeholder="e.g. https://linkedin.com/in/johndoe"
                className="bg-dark text-white border-0 rounded-3 px-3 py-2"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="email">
              <Form.Control
                type="email"
                placeholder="e.g. john@example.com"
                className="bg-dark text-white border-0 rounded-3 px-3 py-2"
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              className="w-100 py-2 fw-bold rounded-3"
              style={{ backgroundColor: '#222', borderColor: '#222' }}
            >
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Modal>
=======
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        contentClassName="bg-black text-white rounded-4 border-0"
      >
        <Row className="g-0">
          {/* Left Gradient Section */}
          <Col
            md={6}
            className="d-none d-md-flex flex-column justify-content-center align-items-start p-5 rounded-start"
            style={{
              background: "linear-gradient(180deg, #F78CF5 0%, #5A2D8B 100%)",
              color: "#fff",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            <h2 style={{ fontWeight: 500, fontSize: "2rem", lineHeight: 1.2 }}>
              Step in.
              <br />
              Optimise.
              <br />
              Grow.
            </h2>
          </Col>

          {/* Right Form Section */}
          <Col md={6} className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="fw-bold m-0">KLYPE</h3>
              <Button
                variant="outline-light"
                onClick={handleClose}
                size="sm"
                className="border-0"
              >
                ✕
              </Button>
            </div>
            <Form>
              <Form.Group className="mb-4" controlId="mobileNumber">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="bg-dark text-white border-0 rounded-3"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="linkedinUrl">
                <Form.Control
                  type="url"
                  placeholder="Linkedin URL"
                  className="bg-dark text-white border-0 rounded-3"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="bg-dark text-white border-0 rounded-3"
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                className="w-100 py-2 fw-bold"
                style={{ backgroundColor: "#222", borderColor: "#222" }}
              >
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
>>>>>>> dff87f9ad4b20dc6399b9e0ec900fabaf88d4c9e
  );
}
