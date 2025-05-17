import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import userImage from "./images/image.png";
import userImage1 from "./images/image1.png";
import userImage2 from "./images/image2.png";
import userImage3 from "./images/image3.png";
import userImage4 from "./images/image4.png";
import userImage5 from "./images/image5.png";
import userImage6 from "./images/image6.png";
import { Link as ScrollLink } from "react-scroll";

import "./HeroSection.css";
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import KlypeFormModal from "./KlypeFormModal";

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const users = [
    { name: "Daniel Lee", role: "Content Strategist - TechCo", img: userImage },
    { name: "Amelia Davis", role: "Founder - StartupBoost", img: userImage1 },
    {
      name: "Jane Smith",
      role: "Content Strategist - TechCo",
      img: userImage2,
    },
    {
      name: "Jane Smith",
      role: "Content Strategist - TechCo",
      img: userImage3,
    },
    {
      name: "Daniel Lee",
      role: "Marketing Manager - GrowthLabs",
      img: userImage4,
    },
    { name: "Amelia Davis", role: "Founder - StartupBoost", img: userImage6 },
    {
      name: "Jane Smith",
      role: "Content Strategist - TechCo",
      img: userImage5,
    },
  ];
  const companies = ["Google", "Amazon", "Govt. of India"];
  const features = [
    {
      title: "Personalized Content Calendar",
      subtitle: "Plan, organize, and add content anytime.",
      image: "🗓️",
    },
    {
      title: "7-Day Personalized Content & Suggestions",
      subtitle: "Get a tailored content plan with AI-driven recommendations",
      suggestions: ["Suggestion", "Suggestion", "Suggestion"],
    },
    {
      title: "Convert Voice Notes into Posts within 5 Seconds",
      image: "🔊",
    },
    {
      title: "Create your own Content Workflow within minutes",
      image: "🧩",
    },
    {
      title: "Convert YouTube Videos into Posts within 5 Seconds",
      image: "🎥 ➡️ 📄",
    },
  ];
  const topFeatures = [
    {
      title: "Dedicated country-based IP",
      desc: "Connect securely from anywhere in the world",
    },
    {
      title: "Seamless LinkedIn Integration",
      desc: "Schedule, Post as per preferences",
    },
    {
      title: "Global smart inbox",
      desc: "Manage all your communications in one place",
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
        "Get Real-Time Analytics on Klype Dashboard",
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
        "Instant Search Assistance Ask anything, anytime — LAUNCHING SOON",
      ],
    },
  ];
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.6,
      },
    }),
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
    backgroundColor: "radial-gradient(circle at center, #29002e, #000000)",
    zIndex: 1030,
  }}
>
  <Container>
    <Navbar.Brand className="text-white fw-bold fs-4"   style={{ cursor: "pointer" }}>KLYPE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav className="gap-4">
        <ScrollLink
          to="features"
          smooth={true}
          duration={600}
          offset={-70}
          className="nav-link text-white fw-semibold"
          style={{ cursor: "pointer" }}
        >
          Features
        </ScrollLink>
        <ScrollLink
          to="features"
          smooth={true}
          duration={600}
          offset={-70}
          className="nav-link text-white"
          style={{ cursor: "pointer" }}
        >
          How it works
        </ScrollLink>
        <ScrollLink
          to="pricing"
          smooth={true}
          duration={600}
          offset={-70}
          className="nav-link text-white"
          style={{ cursor: "pointer" }}
        >
          Pricing
        </ScrollLink>
        <ScrollLink
          to="testimonials"
          smooth={true}
          duration={600}
          offset={-70}
          className="nav-link text-white"
          style={{ cursor: "pointer" }}
        >
          Testimonials
        </ScrollLink>
        <ScrollLink
          to="faq"
          smooth={true}
          duration={600}
          offset={-70}
          className="nav-link text-white"
          style={{ cursor: "pointer" }}
        >
          FAQ
        </ScrollLink>
      </Nav>
    </Navbar.Collapse>
    <Button variant="dark" className="rounded-pill px-4" onClick={handleShowForm}>
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
        className="back text-center text-white  py-5"
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
              99.2%
            </div>
          </motion.div>
        </motion.div>

        <p className="text-light mb-4" style={{ fontSize: "1.2rem" }}>
          4.9+ Ratings By 1.6k+ Founders
        </p>

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

 <div className="back py-5 text-center" id="features" style={{ color: "#ccc" }}>
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mb-5"
  >
    How <span style={{ color: "#fff" }}>Klype</span>{" "}
    <span style={{ color: "#b300b3", fontWeight: 700 }}>works?</span>
    <br />
    <p
      className="fs-5 mx-auto"
      style={{
        maxWidth: "550px",
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(to right, #8f8f8f, #aaaaaa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      All Smart Features you need in one place
    </p>
  </motion.h2>

  <Container>
    {/* First features row */}
    <Row className="g-4 justify-content-center mb-5">
      {features.slice(0, 2).map((feat, idx) => (
        <Col md={6} key={idx}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="h-100"
          >
            <Card
              className="bg-black text-light h-100 p-4 rounded-4 feature-card"
              style={{
                color: "#eee",
                boxShadow:
                  idx === 0
                    ? "0 4px 15px rgba(200, 0, 255, 0.15)"
                    : "0 4px 15px rgba(0, 242, 255, 0.15)",
                border:
                  idx === 0
                    ? "1px solid rgba(200, 0, 255, 0.1)"
                    : "1px solid rgba(0, 242, 255, 0.1)",
              }}
            >
              <Card.Body>
                <h5 className="gradient-text">{feat.title}</h5>
                <p style={{ color: "#aaa" }}>{feat.subtitle}</p>
                {feat.suggestions ? (
                  feat.suggestions.map((sugg, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="suggestion-item d-flex align-items-center mb-2 px-3 py-2 rounded"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "#ccc",
                        backdropFilter: "blur(5px)",
                        userSelect: "none",
                        cursor: "default",
                      }}
                    >
                      <span className="me-2 suggestion-icon">💡</span> {sugg}
                    </motion.div>
                  ))
                ) : (
                  <div className="display-3 feature-icon">{feat.image}</div>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>

    {/* Next features row */}
    <Row className="g-4 justify-content-center mb-5">
      {features.slice(2).map((feat, idx) => (
        <Col md={4} key={idx}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="h-100"
          >
            <Card
              className="bg-black text-light h-100 p-4 rounded-4 feature-card"
              style={{
                color: "#eee",
                boxShadow: "0 4px 15px rgba(200, 0, 255, 0.1)",
                border: "1px solid rgba(200, 0, 255, 0.1)",
              }}
            >
              <Card.Body>
                <h6 className="gradient-text">{feat.title}</h6>
                <div className="display-6 mt-3 feature-icon">{feat.image}</div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>

    {/* Multi-profile management */}
    <Row className="justify-content-center mb-5">
      <Col md={10}>
        <motion.div
          className="bg-black text-light p-5 rounded-4 feature-card text-center"
          style={{
            boxShadow: "0 4px 15px rgba(200, 0, 255, 0.1)",
            border: "1px solid rgba(200, 0, 255, 0.1)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h5 className="gradient-text mb-2">Multi-Profile Management</h5>
          <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Manage UpTo 5 Profiles at a time for your Team at $9 per User
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            {[ // avatar colors and sizes
              { color: "#d39cfb", size: 40 },
              { color: "#c6f6d5", size: 60 },
              { color: "#a3d8ff", size: 80 },
              { color: "#ffbdbd", size: 60 },
              { color: "#ffd699", size: 40 },
            ].map(({ color, size }, idx) => (
              <motion.div
                key={idx}
                style={{
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 8px rgba(200, 0, 255, 0.5)",
                  cursor: "default",
                  userSelect: "none",
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 16px rgba(200, 0, 255, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* User icon */}
                <svg
                  width={size * 0.6}
                  height={size * 0.6}
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                  <path d="M12 14c-3.33 0-6 2.67-6 6v2h12v-2c0-3.33-2.67-6-6-6z" />
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Col>
    </Row>

    {/* Additional top features */}
    <Row className="g-4 justify-content-center">
      {topFeatures.map((item, index) => (
        <Col md={4} key={index}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="h-100"
          >
            <Card
              className="bg-black text-light h-100 p-4 rounded-4 feature-card"
              style={{
                boxShadow: "0 4px 15px rgba(200, 0, 255, 0.1)",
                border: "1px solid rgba(200, 0, 255, 0.1)",
              }}
            >
              <Card.Body>
                <h5 className="gradient-text">{item.title}</h5>
                <p className="text-secondary">{item.desc}</p>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>

    {/* Bottom badge */}
    <motion.div
      className="mt-4 px-3 py-2 mb-3 rounded-pill mx-auto text-center"
      style={{
        maxWidth: "30%",
        fontSize: "1rem",
        padding: "0.6rem 1.2rem",
        backgroundImage:
          "linear-gradient(#000, #000), linear-gradient(to right, #c800ff, #00f2ff)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        WebkitBackgroundClip: "padding-box, border-box",
        border: "2px solid transparent",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
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


      <div className="back  text-center text-light py-5">
        <Container>


          {/* Heading */}
          <motion.h2
            className="text-secondary fw-normal mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why you should worry about LinkedIn content?
          </motion.h2>

          {/* Main message */}
          <motion.h3
            className="fw-bold text-white mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              fontSize: "1.5rem",
              fontFamily: "Inter, sans-serif",
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LinkedIn is cracking down on AI
            <br />
            generated fluff.
          </motion.h3>

          {/* Supporting text */}
          <motion.p
            className="text-secondary mb-3 mx-auto"
            style={{ fontSize: "1.2rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our posts read like you, not a bot. Authentic, relatable,
            <br />
            and built to perform.
          </motion.p>
        </Container>
      </div>

      <div className="back text-white py-5" id="pricing">
        <Container>
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
           style={{
              fontSize: "2.5rem",
              fontFamily: "Inter, sans-serif",
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pricing & Features
          </motion.h2>


          <Row className="justify-content-center g-5">
            {pricingData.map((plan, index) => {
              const isSelected = selectedPlan === index;

              return (
                <Col
                  as={motion.div}
                  key={plan.title}
                  md={5}
                  className="mx-4 p-1 rounded-4 pricing-card"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedPlan(index)}
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: isSelected
                      ? "1px solid #333"
                      : "1px solid #333",
                    backgroundImage: isSelected
                      ? "linear-gradient(135deg, #a100a1 0%, #008b8b 100%)"
                      : "none",
                    color: isSelected ? "#ffff" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    className="bg-black p-5 rounded-4 h-100"
                    style={isSelected ? { borderRadius: "1rem" } : {}}
                  >
                    <h4 className="text-white mb-3">{plan.title}</h4>
                    <h3 className="fw-bold mb-4">{plan.price}</h3>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                      className={`btn w-100 my-4 py-3 waitlist-btn ${plan.buttonStyle === ""
                          ? "text-dark fw-semibold gradient-btn"
                          : "dark-btn"
                        }`}
                      style={
                        plan.buttonStyle === "gradient"
                          ? {
                              background: "#222",
                            border: "1px solid #444",
                            color: "#fff",
                          }
                          : {
                            background: "#222",
                            border: "1px solid #444",
                            color: "#fff",
                          }
                      }
                    >
                      Signup for waitlist
                    </motion.button>

                    <ul className="list-unstyled mt-4 text-start feature-list">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="mb-3 d-flex align-items-start"
                        >
                          <span className="me-2 feature-icon">✅</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div
        className="back py-5"
        style={{
          // backgroundColor: "#000",
        }}
      >
        <Container>
          <motion.div
            className="text-center p-5 mx-auto"
            style={{
              background: "radial-gradient(circle at center, #450057, #0c0010)",
              borderRadius: "2rem",
              maxWidth: "900px",
              color: "#fff",
              boxShadow: "0 0 40px rgba(255, 0, 255, 0.1)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="fw-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              First 100 Users →{" "}
              <span style={{ background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                KLYPE
              </span>
            </motion.h2>

            <motion.h5
              className="mb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              AI, Lifetime free ACCESS
            </motion.h5>

            <motion.h6
              className="text-secondary mb-4"
              style={{ fontWeight: 500 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              (18 Spots left)
            </motion.h6>

            <motion.div
              className="d-flex justify-content-center gap-3 mb-3 flex-wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button
                className="waitlist-btn px-4 py-2 rounded-pill fw-semibold"
                onClick={handleShowForm}
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px #ff00ff" }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{

                  border: "2px solid #444",
                  color: "#fff",
                }}
              >
                <span className="btn-content">
                  <span className="btn-icon me-2">❤️</span>
                  Join the waitlist
                </span>
              </motion.button>

              <motion.button
                className="telegram-btn px-4 py-2 rounded-pill fw-semibold text-white"
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px #00ffff" }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{

                  border: "2px solid #444",
                }}
              >
                <span className="btn-content d-flex align-items-center">
                  <span className="btn-icon me-2">
                    <SiTelegram size={18} />
                  </span>
                  Join Telegram Group
                </span>
              </motion.button>
            </motion.div>

            <motion.p
              className="text-secondary mb-2"
              style={{
                fontSize: "1.1rem",
                paddingTop: "12px",
                fontWeight: 350,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Get a 7-day free LinkedIn Content Calendar (worth $297) and
              experience the power of Klype firsthand!
            </motion.p>
          </motion.div>
        </Container>
      </div>

      <footer
        className="py-5"
        style={{ backgroundColor: "#000000", color: "#666" }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                Klype
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
                Empowering the world's professionals
                <br />
                to share their stories
              </p>
              <div className="social-links d-flex gap-3">
                <Link
                  to="#"
                  className="text-decoration-none"
                  style={{ color: "#666" }}
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  to="#"
                  className="text-decoration-none"
                  style={{ color: "#666" }}
                >
                  Klype
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <ul className="list-unstyled" style={{ fontSize: "1.1rem" }}>
                <li className="mb-3">
                  <Link
                    to="#"
                    className="text-decoration-none"
                    style={{ color: "#666" }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="#"
                    className="text-decoration-none"
                    style={{ color: "#666" }}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="#"
                    className="text-decoration-none"
                    style={{ color: "#666" }}
                  >
                    Blogs & Resources
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <ul className="list-unstyled" style={{ fontSize: "1.1rem" }}>
                <li className="mb-3">
                  <Link
                    to="#"
                    className="text-decoration-none"
                    style={{ color: "#666" }}
                  >
                    Join our Telegram Channel
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="#"
                    className="text-decoration-none"
                    style={{ color: "#666" }}
                  >
                    Join our Facebook Community
                  </Link>
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
