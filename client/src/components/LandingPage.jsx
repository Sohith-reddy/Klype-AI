import React, { useState } from 'react'
import { Container, Nav, Navbar, Button, Row, Col,Card } from 'react-bootstrap';
import './HeroSection.css'; // Optional: for custom styles
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import KlypeFormModal from './KlypeFormModal';
export default function LandingPage() {
  const [showForm, setShowForm] = useState(false)
  const handleShowForm = () => setShowForm(true)
  const handleCloseForm = () => setShowForm(false)
    const users = [
  { name: 'Daniel Lee', role: 'Content Strategist - TechCo', img: '/images/daniel.png' },
  { name: 'Amelia Davis', role: 'Founder - StartupBoost', img: '/images/amelia1.png' },
  { name: 'Jane Smith', role: 'Content Strategist - TechCo', img: '/images/jane1.png' },
  { name: 'Jane Smith', role: 'Content Strategist - TechCo', img: '/images/jane2.png' },
  { name: 'Daniel Lee', role: 'Marketing Manager - GrowthLabs', img: '/images/daniel2.png' },
  { name: 'Amelia Davis', role: 'Founder - StartupBoost', img: '/images/amelia2.png' },
  { name: 'Jane Smith', role: 'Content Strategist - TechCo', img: '/images/jane3.png' },
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

  return (
    <>
      <div className="back">
        <div className="hero-section d-flex flex-column min-vh-100 text-white text-center justify-content-between">
          {/* Navbar */}
          <Navbar expand="md" className="py-4 px-3">
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
                  <Nav.Link href="#" className="text-white fw-semibold">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white">
                    How it works
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white">
                    Pricing
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white">
                    Testimonials
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white">
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

          {/* Main Content */}
          <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bold display-6 px-2 px-md-4">
              KLYPE turns Founder insight into Pipeline-Building Content
              <br />
              without sounding like AI or wasting $1000 a month.
            </h1>
            <p className="text-secondary mt-3">
              Your ideas deserve better than recycled AI fluff.
              <br />
              KLYPE turns real insight into content that drives DMs, not
              dopamine.
            </p>
          </Container>

          {/* Stats Section */}
          <Container className="text-center pb-5">
            <div
              className="badge mt-4 py-2 px-3 rounded-pill text-white"
              style={{
                background: "linear-gradient(to right, #c800ff, #00f2ff)",
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>
                300x performance compared to generic, low-effort AI-generated
                content.
              </span>
            </div>
            <Row className="mt-4">
              <Col md={4} className="mb-4">
                <h2 className="fw-bold">1,000+</h2>
                <p className="text-secondary">
                  hours of strategic content creation and optimization.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <h2 className="fw-bold">10,000+</h2>
                <p className="text-secondary">
                  viral posts crafted to maximize reach and engagement.
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <h2 className="fw-bold">900+</h2>
                <p className="text-secondary">
                  ROI-focused posts designed specifically to drive measurable
                  business results.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className=" back   trusted-section py-5 text-white text-center">
        <Container>
          <h2 className="fw-bold mb-2">
            We’ve Helped Professionals At Top Companies Stay Visible & Get
            Noticed – Now It’s Your Turn
          </h2>
          <p className="text-secondary mb-5">
            KLYPE converts raw founder experience into content that compounds
            authority, drives leads, <br />
            and actually sounds like you.
          </p>

          <h4 className="fw-semibold mb-4">Trusted BY 100+ LinkedIn Voices</h4>

          {/* Scrolling avatars */}
          <div className="marquee-container">
            <div className="marquee">
              {users.concat(users).map((user, index) => (
                <div className="profile text-center" key={index}>
                  <img src={user.img} alt={user.name} className="avatar mb-2" />
                  <div className="fw-semibold">{user.name}</div>
                  <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {user.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className=" back text-center text-white bg-dark py-5">
        {/* Circle with Rating */}
        <div className="d-flex justify-content-center mb-3">
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "10px solid #D100D1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            99.9%
          </div>
        </div>

        {/* Rating Text */}
        <p className="text-light mb-4">4.9+ Ratings By 1.6k+ Founders</p>

        {/* Experts From */}
        <h5 className="text-light mb-3">Experts from</h5>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {Array(2)
            .fill(null)
            .map((_, rowIndex) => (
              <div className="d-flex gap-4" key={rowIndex}>
                {companies.map((company, idx) => (
                  <div
                    className="d-flex align-items-center gap-2 text-light"
                    key={`${rowIndex}-${idx}`}
                  >
                    <i
                      className={`bi ${
                        company === "Google"
                          ? "bi-google"
                          : company === "Amazon"
                          ? "bi-amazon"
                          : "bi-bank2"
                      }`}
                    />
                    <span>{company}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div className=" back bg-dark text-light py-5 text-center">
        <h2>
          How <span className="text-white">Klype</span>{" "}
          <span className="text-secondary" style={{fontWeight:700}}>works?</span>
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
                    <p className="text-secondary text-bold mb-0">{feature.desc}</p>
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
        </Container>
      </div>
      <div className="back bg-black text-center text-light py-5">
        <Container>
          {/* Gradient badge */}
          <div
            className="d-inline-block px-4 py-2 rounded-pill mb-4 fw-semibold"
            style={{
              background: "linear-gradient(90deg, #A020F0, #00C2FF)",
              color: "#fff",
              fontSize: "0.9rem",
            }}
          >
            Zero AI “Stench” = No Shadowban Risk
          </div>

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
                    className={`w-100 my-3 ${
                      plan.buttonStyle === "gradient"
                        ? "text-dark fw-semibold"
                        : ""
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
                className="px-4 py-2 rounded-pill"
                onClick={handleShowForm}
              >
                Join the waitlist
              </Button>
              <Button variant="dark" className="px-4 py-2 rounded-pill">
                Join Telegram Group
              </Button>
            </div>
            <p className="text-secondary mb-2" style={{fontSize: "1.1rem",paddingTop:'12px',fontWeight:350}}>
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
                <li className="mb-2">Join our Telegram Channel</li>
                <li className="mb-2">Join our Facebook Community</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <KlypeFormModal show={showForm} handleClose={handleCloseForm} />
    </>
  );
}
