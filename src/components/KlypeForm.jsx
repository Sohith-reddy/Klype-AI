import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

export default function KlypeFormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Trigger Button */}
      <Button variant="primary" onClick={handleShow}>
        Open KLYPE Form
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="bg-black text-white rounded-4 border-0">
        <Row className="g-0">
          {/* Left Gradient Section */}
          <Col
            md={6}
            className="d-none d-md-flex flex-column justify-content-center align-items-start p-5 rounded-start"
            style={{
              background: 'linear-gradient(180deg, #F78CF5 0%, #5A2D8B 100%)',
              color: '#fff',
              borderTopLeftRadius: '1rem',
              borderBottomLeftRadius: '1rem'
            }}
          >
            <h2 style={{ fontWeight: 500, fontSize: '2rem', lineHeight: 1.2 }}>
              Step in.<br />
              Optimise.<br />
              Grow.
            </h2>
          </Col>

          {/* Right Form Section */}
          <Col md={6} className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="fw-bold m-0">KLYPE</h3>
              <Button variant="outline-light" onClick={handleClose} size="sm" className="border-0">
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
                style={{ backgroundColor: '#222', borderColor: '#222' }}
              >
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
