import React, { useState } from 'react'
import { Container, Nav, Navbar, Button, Row, Col, Card } from 'react-bootstrap';
import userImage from './images/image.png';
import userImage1 from './images/image1.png';
import userImage2 from './images/image2.png';
import userImage3 from './images/image3.png';
import userImage4 from './images/image4.png';
import userImage5 from './images/image5.png';
import userImage6 from './images/image6.png';

import './HeroSection.css'; // Optional: for custom styles
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import KlypeFormModal from './KlypeFormModal';
export default function LandingPage() {
  const [showForm, setShowForm] = useState(false)
  const handleShowForm = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)
  const users = [
    { name: 'Daniel Lee', role: 'Content Strategist - TechCo', img: userImage },
    { name: 'Amelia Davis', role: 'Founder - StartupBoost', img: userImage1 },
    { name: 'Jane Smith', role: 'Content Strategist - TechCo', img: userImage2 },
    { name: 'Jane Smith', role: 'Content Strategist - TechCo', img: userImage3 },
    { name: 'Daniel Lee', role: 'Marketing Manager - GrowthLabs', img: userImage4 },
    { name: 'Amelia Davis', role: 'Founder - StartupBoost', img: userImage6 },
    { name: 'Jane Smith', role: 'Content Strategist - TechCo', img: userImage5 },
  ];
  const companies = ['Google', 'Amazon', 'Govt. of India'];
  const features = [
    {
      title: 'Personalized Content Calendar',
      subtitle: 'Plan, organize, and add content anytime.',
      image: '🗓️',
    },
    {
      title: '7-Day Personalized Content & Suggestions',
      subtitle: 'Get a tailored content plan with AI-driven recommendations',
      suggestions: ['Suggestion', 'Suggestion', 'Suggestion'],
    },
    {
      title: 'Convert Voice Notes into Posts within 5 Seconds',
      image: '🔊',
    },
    {
      title: 'Create your own Content Workflow within minutes',
      image: '🧩',
    },
    {
      title: 'Convert YouTube Videos into Posts within 5 Seconds',
      image: '🎥 ➡️ 📄',
    },
  ];
  const topFeatures = [
    {
      title: 'Dedicated country-based IP',
      desc: 'Connect securely from anywhere in the world',
    },
    {
      title: 'Seamless LinkedIn Integration',
      desc: 'Schedule, Post as per preferences',
    },
    {
      title: 'Global smart inbox',
      desc: 'Manage all your communications in one place',
    },
  ];
  const pricingData = [
    {
      title: "Standard",
      price: "$18/month",
      buttonStyle: "dark",
      features: [
        "7-days SMART Custom Content Calendar",
        "10x your Profile Views in 15 Days",
        "10+ Hours Saved Per Week",
        "Voice Prompting (16 Credits)",
        "Access to a 5,000+ Engagement Hooks Klype Library",
        "Increase in Inbound Inquiries by 3x",
        "Personalized Post Recommendations",
        "Get Real-Time Analytics on Klype Dashboard"
      ],
    },
    {
      title: "Premium",
      price: "$27/month",
      buttonStyle: "gradient",
      features: [
        "15-Days Smart Content Calendar Plan",
        "30x your Profile Views in 15 Days",
        "10+ Hours Saved Per Week",
        "Voice Prompting (25 Credits)",
        "Access to a 10,000+ Engagement Hooks Klype Library",
        "Search Trending News through Klype Agent",
        "Create posts within 3 seconds (25 Credits)",
        "Automate Content Posting through Klype on LinkedIn",
        "Increase in Inbound Inquiries by 7x",
        "Personalized Post Recommendations",
        "Viral Content for style, keywords, and topics & customize as per",
        "Get Advanced Analytics on Klype Dashboard",
        "Multi-Profile Management (Manage UpTo 2 Profiles at a time)",
        "Instant Search Assistance Ask anything, anytime — LAUNCHING SOON"
      ],
    }
  ];
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.6
      }
    })
  };
  return (
    <>
      <div className="back">
        <div className="hero-section d-flex flex-column min-vh-100 text-white text-center justify-content-between">
          {/* Navbar */}
          <motion.div variants={fadeIn}>
            <Navbar
              expand="md"
              className="py-4 px-3 sticky-top"
              style={{
                backgroundColor:
                  "radial-gradient(circle at center, #29002e, #000000)",
                zIndex: 1030,
              }}
            >
              <Container>
                <Navbar.Brand className="text-white fw-bold fs-4">
                  KLYPE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-center"
                >
                  <Nav className="gap-4">
                    <Nav.Link
                      href="#features"
                      className="text-white fw-semibold nav-link"
                    >
                      Features
                    </Nav.Link>
                    <Nav.Link
                      href="#how-it-works"
                      className="text-white nav-link"
                    >
                      How it works
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="text-white nav-link">
                      Pricing
                    </Nav.Link>
                    <Nav.Link
                      href="#testimonials"
                      className="text-white nav-link"
                    >
                      Testimonials
                    </Nav.Link>
                    <Nav.Link href="#faq" className="text-white nav-link">
                      FAQ
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <Button
                  variant="dark"
                  className="rounded-pill px-4"
                  onClick={handleShowForm}
                >
                  Sign in
                </Button>
              </Container>
            </Navbar>
          </motion.div>

          {/* Main Content */}
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center"
            style={{ minHeight: "50vh" }}
          >
            <motion.h1
              className="display-5 fw-bold text-white"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              style={{
                background: "linear-gradient(to right, #ffffff, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                fontSize: "2.5rem",
              }}
            >
              KLYPE turns Founder insight into Pipeline-Building Content
              <br />
              without sounding like AI or wasting $1000 a month.
            </motion.h1>

            <motion.p
              className="text-secondary fs-5 mt-3"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Your ideas deserve better than recycled AI fluff.
              <br />
              KLYPE turns real insight into content that drives DMs, not
              dopamine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4"
            >
              <Button
                variant="light"
                className="get-started-btn rounded-pill px-5 py-2 fw-semibold"
                style={{
                  border: "1.5px solid #ccc",
                  background: "transparent",
                  color: "#ccc",
                  fontSize: "1.1rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  zIndex: 1,
                }}
                onClick={handleShowForm}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(200, 0, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="rocket-icon" role="img" aria-label="rocket">
                  🚀
                </span>
                <span className="button-text">Get Started with Klype</span>
              </Button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <Container className="text-center pb-5">
            <motion.div
              className="mt-4 px-3 py-2 rounded-pill mx-auto text-center"
              style={{
                maxWidth: "40%",
                background: "transparent",
                color: "transparent",
                fontSize: "0.9rem",
                padding: "0.6rem 1.2rem",
                textAlign: "center",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(#000, #000), linear-gradient(to right, #c800ff, #00f2ff)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                WebkitBackgroundClip: "padding-box, border-box",
                WebkitTextFillColor: "transparent",
                backgroundSize: "100% 100%",
              }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <span
                style={{
                  background: "linear-gradient(to right, #c800ff, #00f2ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                300x performance compared to generic, low-effort AI-generated
                content.
              </span>
            </motion.div>

            <Row className="mt-4">
              {[
                {
                  count: "1,000+",
                  text: "hours of strategic content creation and optimization.",
                },
                {
                  count: "10,000+",
                  text: "viral posts crafted to maximize reach and engagement.",
                },
                {
                  count: "900+",
                  text: "ROI-focused posts designed specifically to drive measurable business results.",
                },
              ].map((item, index) => (
                <Col md={4} className="mb-4" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <h2 className="fw-bold">{item.count}</h2>
                    <p className="text-secondary">{item.text}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <div className=" back   trusted-section py-5 text-white text-center">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            style={{ minHeight: "50vh" }}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <h1
              className=" fw-semibold text-secondary mb-5"
              style={{ letterSpacing: "1px" }}
            >
              <span className="text-white"> Why </span> Klype?
            </h1>
            <h2
              className="fw-bold mb-2"
              style={{
                fontSize: "2rem",
                fontFamily: "Inter, sans-serif",
                background: "linear-gradient(to right, #ffffff, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We’ve Helped Professionals At Top Companies Stay Visible & Get
              <br />
              Noticed – Now It’s Your Turn
            </h2>
            <p
              className="text-secondary mb-4"
              style={{ fontSize: "1.1rem", maxWidth: "700px" }}
            >
              KLYPE converts raw founder experience into content that compounds
              authority, drives leads, and actually sounds like you.
            </p>
          </motion.div>

          <h4
            className="fw-semibold mb-5"
            style={{
              fontSize: "1.5rem",
              fontFamily: "Inter, sans-serif",
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trusted BY 100+ LinkedIn Voices
          </h4>

          {/* Scrolling avatars */}
          <div
            className="marquee-container mt-5 mb-4 d-flex justify-content-center align-items-center text-center"
            style={{ minHeight: "30vh" }}
          >
            <div className="marquee">
              {users.concat(users).map((user, index) => (
                <div className="profile text-center mx-3" key={index}>
                  <img src={user.img} alt={user.name} className="avatar mb-2" />
                  <div className="fw-semibold">{user.name}</div>
                  <div
                    className="text-secondary fw-medium"
                    style={{ fontSize: "0.9rem", color: "#aaa" }}
                  >
                    {user.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* Animated Rating Circle */}
      <div
        className="back text-center text-white bg-dark py-5"
        style={{ minHeight: "30vh" }}
      >
        <motion.div
          className="d-flex justify-content-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ strokeDashoffset: 440 }}
            whileInView={{ strokeDashoffset: 58.81 }}
            transition={{ duration: 2 }}
            style={{ width: 180, height: 180, position: "relative" }}
          >
            <svg width="180" height="180">
              <circle
                cx="90"
                cy="90"
                r="78"
                stroke="#333"
                strokeWidth="10"
                fill="none"
              />
              <motion.circle
                cx="90"
                cy="90"
                r="78"
                stroke="#D100D1"
                strokeWidth="10"
                fill="none"
                strokeDasharray="560.6"
                strokeDashoffset="510.6"
                whileInView={{ strokeDashoffset: 87.72 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              98.2%
            </div>
          </motion.div>
        </motion.div>

        <p className="text-light mb-4" style={{ fontSize: "1.2rem" }}>
          4.9+ Ratings By 1.6k+ Founders
        </p>

        {/* Experts From */}
        {/* Experts From */}
        <h5
          className="text-light mb-3"
          style={{
            fontSize: "2rem",
            fontFamily: "Inter, sans-serif",
            background: "linear-gradient(to right, #ffffff, #888888)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experts from
        </h5>
        <br />

        <div
          className="d-grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, auto)",
            justifyContent: "center",
            maxWidth: "600px",
            margin: "0 auto",
            color: "white",
          }}
        >
          {[
            { name: "Google", icon: "bi-google" },
            { name: "Amazon", icon: "bi-amazon" },
            { name: "Govt. of India", icon: "bi-bank2" },
            { name: "Microsoft", icon: "bi-microsoft" }, // added
            { name: "Accenture", icon: "bi-briefcase" }, // example icon
            { name: "Govt. of India", icon: "bi-bank2" },
          ].map((company, idx) => (
            <div
              key={idx}
              className="d-flex align-items-center gap-2"
              style={{ fontSize: "1.4rem" }}
            >
              <i className={`bi ${company.icon}`} />
              <span style={{ fontSize: "1.2rem" }}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className=" back bg-dark text-light py-5 text-center">
        <h2>
          How <span className="text-white">Klype</span>{" "}
          <span className="text-secondary" style={{ fontWeight: 700 }}>
            works?
          </span>
        </h2>
        <p className="mb-5">All Smart Features you need in one place</p>

        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="bg-black text-light h-100 p-4 rounded-4">
                <Card.Body>
                  <h5>{features[0].title}</h5>
                  <p className="text-secondary">{features[0].subtitle}</p>
                  <div className="display-3">{features[0].image}</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="bg-black text-light h-100 p-4 rounded-4">
                <Card.Body>
                  <h5>{features[1].title}</h5>
                  <p className="text-secondary">{features[1].subtitle}</p>
                  {features[1].suggestions.map((sugg, idx) => (
                    <div
                      key={idx}
                      className="d-flex align-items-center mb-2 px-3 py-2 rounded bg-secondary bg-opacity-25"
                    >
                      <span className="me-2">💡</span> {sugg}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {features.slice(2).map((feat, idx) => (
              <Col md={4} key={idx}>
                <Card className="bg-black text-light h-100 p-4 rounded-4">
                  <Card.Body>
                    <h6>{feat.title}</h6>
                    <div className="display-6 mt-3">{feat.image}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="back bg-dark text-light py-5">
        <Container>
          <Row className="g-4 mb-4">
            {topFeatures.map((feature, idx) => (
              <Col md={4} key={idx}>
                <Card className="bg-black text-light h-100 p-4 rounded-4 text-center">
                  <Card.Body>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p className="text-secondary text-bold mb-0">
                      {feature.desc}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="bg-black text-light text-center p-5 rounded-4">
            <Card.Body>
              <h5 className="fw-bold">Multi-Profile Management</h5>
              <p className="text-secondary mb-3">
                Manage Upto 5 Profiles at a time for your Team at $9 per User
              </p>
              <div className="display-4 mt-4">👥👤👥</div>{" "}
              {/* Replace with image if needed */}
            </Card.Body>
          </Card>
          <motion.div
            className="mt-4 px-3 py-2 mb-3 rounded-pill mx-auto text-center"
            style={{
              maxWidth: "30%",
              background: "transparent",
              color: "transparent",
              fontSize: "1rem",
              padding: "0.6rem 1.2rem",
              textAlign: "center",
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(#000, #000), linear-gradient(to right, #c800ff, #00f2ff)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              WebkitBackgroundClip: "padding-box, border-box",
              WebkitTextFillColor: "transparent",
              backgroundSize: "100% 100%",
            }}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <span
              style={{
                background: "linear-gradient(to right, #c800ff, #00f2ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Zero AI “Stench” = No Shadowban Risk
            </span>
          </motion.div>
        </Container>
      </div>
      <div className="back bg-black text-center text-light py-5">
        <Container>
          {/* Gradient badge */}

          {/* Heading */}
          <h2 className="text-secondary  fw-normal mb-3">
            Why you should worry about LinkedIn content?
          </h2>

          {/* Main message */}
          <h3 className="fw-bold text-white mb-3">
            LinkedIn is cracking down on AI
            <br />
            generated fluff.
          </h3>

          {/* Supporting text */}
          <p
            className="text-secondary mb-3 mx-auto"
            style={{ fontSize: "1.2rem" }}
          >
            Our posts read like you, not a bot. Authentic, relatable,
            <br />
            and built to perform.
          </p>
        </Container>
      </div>
      <div className=" back bg-black text-white py-5">
        <Container>
          <h2 className="text-center text-light mb-5">Pricing & Features</h2>
          <Row className="justify-content-center">
            {pricingData.map((plan, index) => (
              <Col
                key={plan.title}
                md={5}
                className="m-2 p-1 rounded-4"
                style={{
                  backgroundColor:
                    plan.title === "Premium" ? "transparent" : "#1a1a1a",
                  border:
                    plan.title === "Premium"
                      ? "1px solid transparent"
                      : "1px solid #333",
                  backgroundImage:
                    plan.title === "Premium"
                      ? "linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)"
                      : "none",
                  color: plan.title === "Premium" ? "#00ffff" : "#fff",
                }}
              >
                <div
                  className="bg-black p-4 rounded-4 h-100"
                  style={
                    plan.title === "Premium" ? { borderRadius: "1rem" } : {}
                  }
                >
                  <h4 className="text-white">{plan.title}</h4>
                  <h3 className="fw-bold">{plan.price}</h3>
                  <Button
                    variant={plan.buttonStyle === "gradient" ? "light" : "dark"}
                    className={`w-100 my-3 waitlist-btn ${
                      plan.buttonStyle === "gradient"
                        ? "text-dark fw-semibold gradient-btn"
                        : "dark-btn"
                    }`}
                    style={
                      plan.buttonStyle === "gradient"
                        ? {
                            background:
                              "linear-gradient(90deg, #ff00ff, #00ffff)",
                            border: "none",
                          }
                        : {}
                    }
                  >
                    Signup for waitlist
                  </Button>
                  <ul className="list-unstyled mt-3 text-start">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div
        className=" back py-5 "
        style={{
          backgroundColor: "#000",
        }}
      >
        <Container>
          <div
            className="text-center p-5 mx-auto"
            style={{
              background: "radial-gradient(circle at center, #450057, #0c0010)",
              borderRadius: "2rem",
              maxWidth: "900px",
              color: "#fff",
            }}
          >
            <h2 className="fw-bold mb-2">First 100 Users → KLYPE</h2>
            <h5 className="mb-1">AI, Lifetime free ACCESS</h5>
            <h6 className="text-muted mb-4" style={{ fontWeight: 500 }}>
              (18 Spots left)
            </h6>
            <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
              <Button
                variant="dark"
                className="waitlist-btn px-4 py-2 rounded-pill"
                onClick={handleShowForm}
              >
                <span className="btn-content">
                  <span className="btn-icon">❤️</span>
                  Join the waitlist
                </span>
              </Button>
              <Button
                variant="dark"
                className="telegram-btn px-4 py-2 rounded-pill"
              >
                <span className="btn-content">
                  <span className="btn-icon">📩</span>
                  Join Telegram Group
                </span>
              </Button>
            </div>
            <p
              className="text-secondary mb-2"
              style={{
                fontSize: "1.1rem",
                paddingTop: "12px",
                fontWeight: 350,
              }}
            >
              Get a 7-day free LinkedIn Content Calendar (worth $297) and
              experience the power of Klype firsthand!
            </p>
          </div>
        </Container>
      </div>
      <footer
        className="py-5"
        style={{ backgroundColor: "#0a0a0a", color: "#ccc" }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <h4 style={{ color: "#fff" }}>Klype</h4>
              <p>Empowering the world’s professionals to share their stories</p>
              <div className="d-flex align-items-center mt-2">
                <FaLinkedin size={20} />
                <span className="ms-2">Klype</span>
              </div>
            </Col>
            <Col md={4}>
              <ul className="list-unstyled">
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Terms & Conditions</li>
                <li className="mb-2">Blogs & Resources</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Join our Telegram Channel</a>
                </li>
                <li className="mb-2">
                  <a href="#">Join our Facebook Community</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <KlypeFormModal show={showForm} handleClose={handleCloseForm} />
    </>
  );
}
