<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
=======
import React, { useState } from "react";
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
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
<<<<<<< HEAD
import { 
  FaArrowRight, 
  FaCheck, 
  FaLock, 
  FaRocket, 
  FaStar, 
  FaRegStar, 
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import custom styles
import "./EnhancedUI.css";
=======

>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
import "./HeroSection.css";
import { FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion, useScroll, useTransform } from "framer-motion";
=======
import { motion } from "framer-motion";
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
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
<<<<<<< HEAD
      name: "Michael Johnson",
=======
      name: "Jane Smith",
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
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
<<<<<<< HEAD
      name: "Sarah Wilson",
=======
      name: "Jane Smith",
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
      role: "Content Strategist - TechCo",
      img: userImage5,
    },
  ];
<<<<<<< HEAD
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Marketing Director at TechVision",
      avatar: userImage,
      quote: "Klype AI has completely transformed our LinkedIn strategy. The content it generates is not only engaging but sounds exactly like our brand voice. We've seen a 300% increase in engagement since we started using it.",
      rating: 5
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Startup Founder & CEO",
      avatar: userImage1,
      quote: "As a busy founder, I never had time to maintain a consistent LinkedIn presence. Klype changed everything - now I post high-quality content regularly without spending hours writing. My network has grown exponentially!",
      rating: 5
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Sales Executive at Enterprise Solutions",
      avatar: userImage2,
      quote: "The leads I've generated through Klype-powered content have been incredible. The AI understands my industry and creates content that resonates with my target audience. It's like having a content team in my pocket.",
      rating: 4
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Personal Brand Coach",
      avatar: userImage3,
      quote: "I recommend Klype to all my clients. The personalization is unmatched - it captures your unique voice and expertise while optimizing for engagement. It's the perfect tool for anyone serious about LinkedIn.",
      rating: 5
    },
    {
      id: 5,
      name: "David Kim",
      role: "Tech Entrepreneur",
      avatar: userImage4,
      quote: "The voice note feature is a game-changer. I can record my thoughts while driving and Klype transforms them into perfectly structured posts. My engagement has increased by 250% in just two months.",
      rating: 5
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Digital Marketing Consultant",
      avatar: userImage5,
      quote: "What impresses me most about Klype is how it stays on top of LinkedIn algorithm changes. My content consistently performs well because the AI adapts its strategy based on what's working right now.",
      rating: 4
    }
  ];
  const companies = ["Google", "Amazon", "Govt. of India","Accenture","Microsoft"];
  const features = [
    {
      title: "AI-Powered Content Calendar",
      subtitle: "Smart scheduling for maximum engagement",
      description: "Our intelligent calendar analyzes your audience's activity patterns and optimizes posting times to ensure your content reaches the maximum number of people when they're most likely to engage.",
      icon: <FaRocket style={{ color: "#fff" }} />,
      color: "linear-gradient(135deg, #c800ff, #ff00ff)",
      benefits: ["Increased visibility", "Consistent posting schedule", "Optimal engagement times"],
    },
    {
      title: "Personalized Content Suggestions",
      subtitle: "Custom recommendations tailored to your audience",
      description: "Leverage our AI to generate content ideas that resonate with your specific audience. Get data-driven suggestions based on trending topics in your industry and what's performing well for similar profiles.",
      icon: <FaLock style={{ color: "#fff" }} />,
      color: "linear-gradient(135deg, #00a2ff, #00f2ff)",
      suggestions: ["Industry-specific topics", "Trending conversations", "Engagement hooks", "Competitor insights"],
    },
    {
      title: "Voice-to-Post Conversion",
      subtitle: "Speak your ideas, we'll craft the perfect post",
      description: "Record your thoughts on the go and our advanced AI will transform them into polished, professional content that maintains your authentic voice and style while optimizing for engagement.",
      icon: <FaRocket style={{ color: "#fff" }} />,
      color: "linear-gradient(135deg, #c800ff, #00f2ff)",
      benefits: ["Save time on writing", "Maintain authentic voice", "Create content anywhere"],
    },
    {
      title: "Custom Workflow Automation",
      subtitle: "Streamline your content production process",
      description: "Build a personalized content workflow that fits your specific needs. Automate repetitive tasks, set approval processes, and ensure consistent quality across all your LinkedIn content.",
      icon: <FaLock style={{ color: "#fff" }} />,
      color: "linear-gradient(135deg, #ff00ff, #ff9500)",
      benefits: ["Reduce manual work", "Consistent quality", "Scalable content production"],
    },
    {
      title: "Multi-Format Content Creation",
      subtitle: "Transform any content into LinkedIn-optimized posts",
      description: "Convert YouTube videos, articles, podcasts, and more into engaging LinkedIn posts. Our AI extracts key insights and reformats them for maximum impact on the platform.",
      icon: <FaRocket style={{ color: "#fff" }} />,
      color: "linear-gradient(135deg, #00f2ff, #00ff95)",
      benefits: ["Repurpose existing content", "Diversify your content mix", "Reach wider audience"],
    },
    {
      title: "Advanced Analytics Dashboard",
      subtitle: "Track performance and optimize your strategy",
      description: "Get comprehensive insights into how your content performs. Monitor engagement metrics, audience growth, and conversion rates to continuously refine your LinkedIn strategy.",
      icon: <FaLock style={{ color: "#fff" }} />,
      color: "linear-gradient(135deg, #ff9500, #ff00ff)",
      benefits: ["Data-driven decisions", "Performance tracking", "Strategy optimization"],
=======
  const companies = ["Google", "Amazon", "Govt. of India","Accenture","Microsoft"];
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
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <>
      <div className="back">
        <div className="hero-section d-flex flex-column min-vh-100 text-white text-center justify-content-between">
          {/* Navbar */}
          <motion.div variants={fadeIn}>
            <Navbar
              expand="md"
              className="py-2 px-3"
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                zIndex: 1030,
                marginBottom: "1.5rem",
              }}
            >
              <Container fluid>
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <Navbar.Brand
                    className="fw-bold"
                    style={{
                      cursor: "pointer",
                      fontSize: "2rem",
                      fontFamily: "Montserrat, sans-serif",
                      color: "#fff",
                      letterSpacing: "0.5px",
                      marginRight: "1.5rem",
                    }}
                  >
                    KLYPE
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#fff",
                      fontSize: "1.5rem", 
                    }}
                  />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                  >
                    <Nav
                      className="mx-auto"
                      style={{ gap: "1.2rem" }} 
                    >
                      {[
                        { to: "features", label: "Features" },
                        { to: "features", label: "How it works" },
                        { to: "pricing", label: "Pricing" },
                        { to: "testimonials", label: "Testimonials" },
                        { to: "faq", label: "FAQ" },
                      ].map((item, idx) => (
                        <ScrollLink
                          key={idx}
                          to={item.to}
                          smooth={true}
                          duration={600}
                          offset={-70}
                          className="nav-link px-0"
                          style={{
                            cursor: "pointer",
                            fontSize: "1.01rem", 
                            color: "#fff",
                            fontWeight: 500,
                            letterSpacing: "0.01em",
                            background: "none",
                            border: "none",
                            transition: "all 0.2s ease",
                            whiteSpace: "nowrap",
                            padding: "0 0.3rem",
                          }}
                          activeClass="active-nav-link"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.fontWeight = "700";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.fontWeight = "500";
                            e.currentTarget.style.color = "#fff";
                          }}
                        >
                          {item.label}
                        </ScrollLink>
                      ))}
                    </Nav>
                  </Navbar.Collapse>
                  <Button
                    variant="dark"
                    className="rounded-pill px-3 py-2"
                    onClick={handleShowForm}
                    style={{
                      background: "#222",
                      border: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#fff",
                      boxShadow: "none",
                      whiteSpace: "nowrap",
                      minWidth: "90px",
                      padding: "0.5rem 1.2rem",
                    }}
                  >
                    Sign in
                  </Button>
                </div>
              </Container>
            </Navbar>
          </motion.div>

          {/* Main Content */}
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center px-2"
            style={{
              minHeight: "100vh",
                maxWidth: "100%",
                margin: "0 auto",
                flex: 1,
                justifyContent: "flex-start", 
                padding: "0.2rem 0 0.5rem 0",
              }}
              >
              <div className="container-fluid">
                <div className="row justify-content-center">
                <div className="col-lg-10">
                  <motion.h1
                  className="text-center mt-2 mb-2"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  style={{
                    fontWeight: 500, 
                    fontSize: "clamp(1.2rem, 2vw, 2rem)",
                    lineHeight: 1.2,
                    marginBottom: "0.5rem",
                    background: "linear-gradient(to right, #ffffff, #888888)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    maxWidth: "100%", 
                    margin: "0 auto",
                  }}
                  >
                  KLYPE turns Founder insight into Pipeline-Building Content without sounding like AI or wasting $1000 a month.
                  </motion.h1>
                </div>
                </div>
              </div>
              <motion.p
                className="text-secondary mt-2 mb-2"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                style={{
                fontSize: "0.8rem", 
                maxWidth: "600px",
                margin: "0 auto",
                color: "#aaa",
                fontWeight: 300, 
                opacity: 0.8,
                }}
              >
                Your ideas deserve better than recycled AI fluff. KLYPE turns real insight into content that drives DMS, not dopamine.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-2"
              >
                <span
                style={{
                  display: "inline-block",
                  padding: "0.5rem 0.8rem", 
                  borderRadius: "1.5rem",
                  border: "2px solid #00e0ff",
                  color: "#00e0ff",
                  background: "rgba(0,0,0,0.3)",
                  fontWeight: 450, 
                  fontSize: "0.9rem", 
                  marginBottom: "1.5rem",
                  boxShadow: "0 0 0 2px #c800ff inset",
                  backgroundClip: "padding-box",
                }}
                >
                300x performance compared to generic, low-effort AI-generated content.
                </span>
              </motion.div>

              {/* Stats Section */}
            <Container className="text-center pb-3 mt-3">
              <Row className="mt-3 g-3 justify-content-center">
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
                  <Col lg={4} md={6} className="mb-2" key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 * index }}
                      className="p-3 h-100"
                      style={{
                        background: "transparent",
                        borderRadius: "12px", // Adjusted border radius
                        border: "none",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "0.9rem", // Reduced font size
                      }}
                    >
                      <h3
                        className="fw-bold mb-1"
                        style={{ fontSize: "1.5rem", color: "#fff" }} // Reduced font size
                      >
                        {item.count}
                      </h3>
                      <p
                        className="text-secondary mb-0"
                        style={{ fontSize: "0.9rem", color: "#aaa" }} // Reduced font size
                      >
                        {item.text}
                      </p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div className="back trusted-section py-5 text-white text-center">
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

<<<<<<< HEAD
          {/* Testimonials Slider */}
         
=======
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
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

      <div
        className="back py-5 text-center"
        id="features"
        style={{ color: "#ccc" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h2
            className="mb-3"
            style={{ fontSize: "2.2rem", fontWeight: "600" }}
          >
            How <span style={{ color: "#fff" }}>Klype</span>{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b300b3, #ff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              works
            </span>
          </h2>
          <p
            className="mx-auto"
            style={{
              maxWidth: "550px",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#999",
              lineHeight: "1.6",
            }}
          >
            Streamlined workflow to transform your LinkedIn presence with
            AI-powered content
          </p>
        </motion.div>

        <Container>
          {/* Process steps */}
          <div className="position-relative mb-5">
            {/* Connection line */}
            <div
              className="position-absolute d-none d-lg-block"
              style={{
                height: "3px",
                background:
                  "linear-gradient(to right, rgba(200, 0, 255, 0.7), rgba(0, 242, 255, 0.7))",
                top: "100px",
                left: "10%",
                right: "10%",
                zIndex: 0,
              }}
            ></div>

            <Row className="g-4 justify-content-center">
              {[
                {
                  step: "01",
                  title: "Connect & Configure",
                  description:
                    "Link your LinkedIn profile and set your content preferences and goals",
                  icon: "🔗",
                  color: "rgba(200, 0, 255, 0.2)",
                },
                {
                  step: "02",
                  title: "AI Content Generation",
                  description:
                    "Our AI analyzes your audience and creates tailored content strategies",
                  icon: "🧠",
                  color: "rgba(150, 100, 255, 0.2)",
                },
                {
                  step: "03",
                  title: "Review & Approve",
                  description:
                    "Preview generated content and make any adjustments before publishing",
                  icon: "✅",
                  color: "rgba(100, 150, 255, 0.2)",
                },
                {
                  step: "04",
                  title: "Schedule & Publish",
                  description:
                    "Set your posting schedule and let Klype handle the rest automatically",
                  icon: "🚀",
                  color: "rgba(0, 242, 255, 0.2)",
                },
              ].map((step, idx) => (
                <Col lg={3} md={6} key={idx}>
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="h-100 position-relative z-1"
                  >
                    <Card
                      className="bg-black text-light h-100 p-4 rounded-4 border-0"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{
                          width: "70px",
                          height: "70px",
                          background: step.color,
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <span style={{ fontSize: "1.8rem" }}>{step.icon}</span>
                      </div>

                      <Card.Body className="text-center">
                        <h5
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            color: "#fff",
                            marginBottom: "0.8rem",
                          }}
                        >
                          {step.title}
                        </h5>
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "#aaa",
                            lineHeight: "1.5",
                          }}
                        >
                          {step.description}
                        </p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Features heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 pt-4 mb-5"
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Powerful Features
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#999",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Everything you need to create high-converting LinkedIn content
            </p>
          </motion.div>

<<<<<<< HEAD
          {/* Features grid with modern design */}
          <Row className="g-4 justify-content-center mb-5">
            {features.map((feature, idx) => (
              <Col lg={4} md={6} key={idx}>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="h-100"
                >
                  <div className="feature-card">
                    {/* Glow effect */}
                    <div 
                      className={`position-absolute glow-effect ${idx % 2 === 0 ? 'glow-purple' : 'glow-blue'}`}
                      style={{ 
                        width: '200px', 
                        height: '200px', 
                        top: idx % 2 === 0 ? '-50px' : 'auto',
                        bottom: idx % 2 === 0 ? 'auto' : '-50px',
                        left: idx % 3 === 0 ? '-50px' : 'auto',
                        right: idx % 3 === 0 ? 'auto' : '-50px',
                        opacity: 0.5,
                        zIndex: 0
                      }}
                    ></div>
                    
                    {/* Feature icon */}
                    <div 
                      className="feature-icon-container"
                      style={{ 
                        background: feature.color,
                      }}
                    >
                      {feature.icon}
                    </div>
                    
                    {/* Feature title */}
                    <h3 className="feature-title">
                      {feature.title}
                    </h3>
                    
                    {/* Feature subtitle */}
                    <h5 className="feature-subtitle">
                      {feature.subtitle}
                    </h5>
                    
                    {/* Feature description */}
                    <p className="feature-description">
                      {feature.description}
                    </p>
                    
                    {/* Feature suggestions if available */}
                    {feature.suggestions && (
                      <div className="feature-benefits">
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#bbb",
                            fontWeight: "600",
                            marginBottom: "1rem",
                          }}
                        >
                          Smart suggestions include:
                        </p>
                        <ul
                          style={{
                            listStyleType: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {feature.suggestions.map((suggestion, i) => (
                            <motion.li
                              key={i}
                              className="feature-benefit-item"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.2 }}
                            >
                              <FaCheck className="feature-check-icon" />
                              <span className="feature-benefit-text">{suggestion}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Feature benefits if available */}
                    {feature.benefits && (
                      <div className="feature-benefits">
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#bbb",
                            fontWeight: "600",
                            marginBottom: "1rem",
                          }}
                        >
                          Key benefits:
                        </p>
                        <ul
                          style={{
                            listStyleType: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {feature.benefits.map((benefit, i) => (
                            <motion.li
                              key={i}
                              className="feature-benefit-item"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.2 }}
                            >
                              <FaCheck className="feature-check-icon" />
                              <span className="feature-benefit-text">{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Decorative gradient line */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        background: feature.color,
                        opacity: 0.7,
                      }}
                    ></div>
                  </div>

          {/* First features row
          <Row className="g-4 justify-content-center mb-5">
            {features.slice(0, 2).map((feat, idx) => (
              <Col md={6} key={idx}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      idx === 0
                        ? "0 8px 25px rgba(200, 0, 255, 0.2)"
                        : "0 8px 25px rgba(0, 242, 255, 0.2)",
                  }}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="h-100"
                >
                  <Card
                    className="bg-black text-light h-100 p-4 rounded-4 feature-card"
                    style={{
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(10px)",
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
                      <h5
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "600",
                          background:
                            idx === 0
                              ? "linear-gradient(135deg, #b300b3, #ff00ff)"
                              : "linear-gradient(135deg, #00a2ff, #00f2ff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          marginBottom: "1rem",
                        }}
                      >
                        {feat.title}
                      </h5>
                      <p style={{ color: "#aaa", fontSize: "0.95rem" }}>
                        {feat.subtitle}
                      </p>
                      {feat.suggestions ? (
                        <div className="mt-4">
                          {feat.suggestions.map((sugg, i) => (
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
                                fontSize: "0.9rem",
                                border: "1px solid rgba(255, 255, 255, 0.03)",
                              }}
                            >
                              <span className="me-2 suggestion-icon">💡</span>{" "}
                              {sugg}
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center mt-4">
                          <div style={{ fontSize: "3rem" }}>{feat.image}</div>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Next features row */}
          {/* <Row className="g-4 justify-content-center mb-5">
            {features.slice(2).map((feat, idx) => (
              <Col md={4} key={idx}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 8px 25px rgba(200, 0, 255, 0.2)",
                  }}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="h-100"
                >
                  <Card
                    className="bg-black text-light h-100 p-4 rounded-4 feature-card"
                    style={{
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(10px)",
                      color: "#eee",
                      boxShadow: "0 4px 15px rgba(200, 0, 255, 0.1)",
                      border: "1px solid rgba(200, 0, 255, 0.1)",
                    }}
                  >
                    <Card.Body className="text-center">
                      <h6
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          background:
                            "linear-gradient(135deg, #b300b3, #ff00ff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          marginBottom: "1rem",
                        }}
                      >
                        {feat.title}
                      </h6>
                      <div style={{ fontSize: "2.5rem", marginTop: "1rem" }}>
                        {feat.image}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))} */}
          </Row> */}

          {/* Multi-profile management */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <motion.div
                className="p-5 rounded-4 feature-card text-center"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(0,0,0,0.8), rgba(20,0,20,0.9))",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(200, 0, 255, 0.15)",
                  border: "1px solid rgba(200, 0, 255, 0.1)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  boxShadow: "0 15px 40px rgba(200, 0, 255, 0.25)",
                  y: -5,
                }}
              >
                <div className="position-relative mb-4">
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      background: "linear-gradient(135deg, #b300b3, #ff00ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: "1rem",
                      display: "inline-block",
                    }}
                  >
                    Multi-Profile Management
                  </h4>
                  <div
                    className="position-absolute"
                    style={{
                      top: "-15px",
                      right: "-15px",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(5px)",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      color: "#fff",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    Team Feature
                  </div>
                </div>

                <p
                  className="mb-4 mx-auto"
                  style={{
                    maxWidth: "600px",
                    color: "#aaa",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  Manage up to 5 LinkedIn profiles simultaneously for your
                  entire team at just $9 per user
                </p>

                <div className="position-relative">
                  <div
                    className="position-absolute d-none d-md-block"
                    style={{
                      height: "2px",
                      background:
                        "linear-gradient(to right, rgba(200, 0, 255, 0.1), rgba(200, 0, 255, 0.7), rgba(200, 0, 255, 0.1))",
                      top: "50%",
                      left: "10%",
                      right: "10%",
                      zIndex: 0,
                    }}
                  ></div>

                  <div
                    className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap position-relative"
                    style={{ zIndex: 1 }}
                  >
                    {[
                      // avatar colors and sizes
                      { color: "#d39cfb", size: 45, delay: 0 },
                      { color: "#c6f6d5", size: 65, delay: 0.1 },
                      { color: "#a3d8ff", size: 85, delay: 0.2 },
                      { color: "#ffbdbd", size: 65, delay: 0.3 },
                      { color: "#ffd699", size: 45, delay: 0.4 },
                    ].map(({ color, size, delay }, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: delay,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          y: -10,
                          boxShadow: `0 10px 20px ${color}80`,
                          scale: 1.05,
                        }}
                        viewport={{ once: true }}
                        style={{
                          width: size,
                          height: size,
                          borderRadius: "50%",
                          backgroundColor: color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 4px 15px ${color}50`,
                          border: "2px solid rgba(255, 255, 255, 0.2)",
                          position: "relative",
                          zIndex: 2,
                          cursor: "default",
                          userSelect: "none",
                        }}
                      >
                        {/* User icon */}
                        <svg
                          width={size * 0.5}
                          height={size * 0.5}
                          viewBox="0 0 24 24"
                          fill="rgba(0,0,0,0.7)"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                          <path d="M12 14c-3.33 0-6 2.67-6 6v2h12v-2c0-3.33-2.67-6-6-6z" />
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline-light"
                  className="mt-5 rounded-pill px-4 py-2"
                  style={{
                    background: "rgba(200, 0, 255, 0.1)",
                    borderColor: "rgba(200, 0, 255, 0.3)",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200, 0, 255, 0.2)";
                    e.currentTarget.style.borderColor =
                      "rgba(200, 0, 255, 0.5)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(200, 0, 255, 0.1)";
                    e.currentTarget.style.borderColor =
                      "rgba(200, 0, 255, 0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Learn More About Team Features
                </Button>
              </motion.div>
            </Col>
          </Row>

<<<<<<< HEAD
       
=======
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
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b

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
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                background: "linear-gradient(135deg, #ffffff, #aaaaaa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1rem",
              }}
            >
              Choose Your Plan
            </h2>
            <p
              className="mx-auto"
              style={{
                maxWidth: "600px",
                fontSize: "0.95rem",
                color: "#999",
                lineHeight: "1.6",
              }}
            >
              Select the perfect plan for your LinkedIn growth strategy
            </p>
          </motion.div>

          {/* Background decorative elements */}
          <div className="position-relative">
            <div
              className="position-absolute d-none d-lg-block"
              style={{
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(200, 0, 255, 0.05) 0%, rgba(200, 0, 255, 0) 70%)",
                top: "5%",
                left: "0%",
                borderRadius: "50%",
                filter: "blur(50px)",
                zIndex: 0,
              }}
            ></div>
            <div
              className="position-absolute d-none d-lg-block"
              style={{
                width: "250px",
                height: "250px",
                background:
                  "radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, rgba(0, 242, 255, 0) 70%)",
                bottom: "10%",
                right: "5%",
                borderRadius: "50%",
                filter: "blur(50px)",
                zIndex: 0,
              }}
            ></div>

            <Row
              className="justify-content-center g-4 position-relative"
              style={{ zIndex: 1 }}
            >
              {pricingData.map((plan, index) => {
                const isSelected = selectedPlan === index;
                const isPrimary = index === 1; // Assuming the second plan is the primary/recommended one

                return (
                  <Col
                    as={motion.div}
                    key={plan.title}
                    lg={4}
                    md={6}
                    className={`mx-md-2 pricing-card ${
                      isPrimary ? "order-md-2" : ""
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedPlan(index)}
                  >
                    <motion.div
                      className={`h-100 rounded-4 position-relative ${
                        isPrimary ? "scale-md-1.05" : ""
                      }`}
                      whileHover={{
                        y: -10,
                        boxShadow: isPrimary
                          ? "0 20px 40px rgba(200, 0, 255, 0.25)"
                          : "0 15px 30px rgba(0, 0, 0, 0.2)",
                      }}
                      style={{
                        background: isPrimary
                          ? "linear-gradient(145deg, rgba(20, 0, 20, 0.8), rgba(0, 0, 0, 0.9))"
                          : "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                        border: isPrimary
                          ? "1px solid rgba(200, 0, 255, 0.2)"
                          : "1px solid rgba(255, 255, 255, 0.05)",
                        boxShadow: isPrimary
                          ? "0 10px 30px rgba(200, 0, 255, 0.15)"
                          : "0 8px 20px rgba(0, 0, 0, 0.15)",
                        cursor: "pointer",
                        transition: "all 0.4s ease",
                        overflow: "hidden",
                      }}
                    >
                      {/* Popular tag */}
                      {isPrimary && (
                        <div
                          className="position-absolute"
                          style={{
                            top: "12px",
                            right: "-30px",
                            background:
                              "linear-gradient(135deg, #b300b3, #ff00ff)",
                            color: "#fff",
                            padding: "5px 30px",
                            fontSize: "0.7rem",
                            fontWeight: "600",
                            transform: "rotate(45deg)",
                            boxShadow: "0 2px 10px rgba(200, 0, 255, 0.3)",
                            zIndex: 2,
                          }}
                        >
                          POPULAR
                        </div>
                      )}

                      <div className="p-4 p-lg-5 h-100 d-flex flex-column">
                        {/* Plan name and price */}
                        <div className="text-center mb-4">
                          <h4
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: "600",
                              color: "#fff",
                              marginBottom: "1rem",
                            }}
                          >
                            {plan.title}
                          </h4>

                          <div
                            style={{
                              fontSize: isPrimary ? "2.5rem" : "2.2rem",
                              fontWeight: "700",
                              background: isPrimary
                                ? "linear-gradient(135deg, #b300b3, #ff00ff)"
                                : "linear-gradient(135deg, #ffffff, #aaaaaa)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {plan.price}
                          </div>

                          <p
                            style={{
                              fontSize: "0.85rem",
                              color: "#999",
                              marginBottom: "1.5rem",
                            }}
                          >
                            {index === 0
                              ? "Billed monthly"
                              : "Billed annually (save 20%)"}
                          </p>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{
                            y: -3,
                            boxShadow: isPrimary
                              ? "0 8px 20px rgba(200, 0, 255, 0.3)"
                              : "0 8px 20px rgba(0, 0, 0, 0.2)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="btn rounded-pill py-2 px-4 w-100 mb-4"
                          style={
                            isPrimary
                              ? {
                                  background:
                                    "linear-gradient(135deg, #b300b3, #ff00ff)",
                                  border: "none",
                                  color: "#fff",
                                  fontWeight: "500",
                                  fontSize: "0.9rem",
                                  boxShadow:
                                    "0 4px 15px rgba(200, 0, 255, 0.2)",
                                }
                              : {
                                  background: "rgba(255, 255, 255, 0.05)",
                                  border: "1px solid rgba(255, 255, 255, 0.1)",
                                  color: "#fff",
                                  fontWeight: "500",
                                  fontSize: "0.9rem",
                                }
                          }
                        >
                          Get Started
                        </motion.button>

                        {/* Divider */}
                        <div
                          style={{
                            height: "1px",
                            background:
                              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
                            margin: "0.5rem 0 1.5rem",
                          }}
                        ></div>

                        {/* Features list */}
                        <div className="flex-grow-1">
                          <p
                            style={{
                              fontSize: "0.85rem",
                              color: "#aaa",
                              fontWeight: "500",
                              marginBottom: "1rem",
                            }}
                          >
                            What's included:
                          </p>

                          <ul className="list-unstyled feature-list mb-0">
                            {plan.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="mb-3 d-flex align-items-start"
                              >
                                <span
                                  className="me-2 feature-icon"
                                  style={{
                                    color: isPrimary ? "#ff00ff" : "#00f2ff",
                                  }}
                                >
                                  {isPrimary ? "✦" : "✓"}
                                </span>
                                <span
                                  style={{
                                    fontSize: "0.85rem",
                                    color: "#ddd",
                                    lineHeight: "1.5",
                                  }}
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </div>

          {/* Money-back guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-5 pt-3"
          >
            <div
              className="d-inline-block mx-auto px-4 py-2 rounded-pill"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <p
                className="mb-0"
                style={{ fontSize: "0.85rem", color: "#aaa" }}
              >
                <span style={{ color: "#00f2ff", marginRight: "8px" }}>✓</span>
                14-day money-back guarantee
                <span style={{ color: "#999", margin: "0 10px" }}>|</span>
                <span style={{ color: "#00f2ff", marginRight: "8px" }}>✓</span>
                Cancel anytime
              </p>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Testimonials Section */}
<<<<<<< HEAD
      <div id="testimonials" className="back py-5 text-white testimonial-slider">
=======
      <div id="testimonials" className="back py-5 text-white">
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2
              className="mb-3"
              style={{
<<<<<<< HEAD
                fontSize: "2.2rem",
                fontWeight: "700",
=======
                fontSize: "2rem",
                fontWeight: "600",
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
                background: "linear-gradient(135deg, #ffffff, #aaaaaa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What Our Users Say
            </h2>
            <p
              className="mx-auto"
              style={{
                maxWidth: "600px",
<<<<<<< HEAD
                fontSize: "1rem",
=======
                fontSize: "0.95rem",
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
                color: "#999",
                lineHeight: "1.6",
              }}
            >
              Hear from professionals who have transformed their LinkedIn
              presence with Klype
            </p>
          </motion.div>

<<<<<<< HEAD
          {/* Testimonial slider with modern design */}
          <div className="position-relative">
            {/* Background decorative elements */}
            <div className="position-absolute d-none d-lg-block glow-effect glow-purple"
              style={{
                width: "300px",
                height: "300px",
                top: "10%",
                left: "5%",
              }}
            ></div>
            <div className="position-absolute d-none d-lg-block glow-effect glow-blue"
              style={{
                width: "400px",
                height: "400px",
                bottom: "10%",
                right: "5%",
              }}
            ></div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative"
              style={{ zIndex: 1 }}
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 5,
                  stretch: 0,
                  depth: 100,
                  modifier: 3,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                loop={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{ 
                  padding: '50px 0',
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} style={{ width: '450px', maxWidth: '90%' }}>
                    <motion.div 
                      className="testimonial-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      {/* Rating */}
                      <div className="testimonial-rating">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <span key={i}>
                              {i < testimonial.rating ? 
                                <FaStar className="star-icon" /> : 
                                <FaRegStar className="star-icon" style={{ color: 'rgba(255, 215, 0, 0.3)' }} />
                              }
=======
          {/* Testimonial cards with modern design */}
          <div className="position-relative">
            {/* Background decorative elements */}
            <div
              className="position-absolute d-none d-lg-block"
              style={{
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle, rgba(200, 0, 255, 0.1) 0%, rgba(200, 0, 255, 0) 70%)",
                top: "10%",
                left: "5%",
                borderRadius: "50%",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            ></div>
            <div
              className="position-absolute d-none d-lg-block"
              style={{
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, rgba(0, 242, 255, 0) 70%)",
                bottom: "10%",
                right: "5%",
                borderRadius: "50%",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            ></div>

            <Row
              className="g-4 justify-content-center position-relative"
              style={{ zIndex: 1 }}
            >
              {[
                {
                  name: "Sarah Johnson",
                  role: "Marketing Director",
                  image: userImage,
                  text: "Klype has completely transformed my LinkedIn strategy. I'm getting 3x more engagement and quality leads since I started using it.",
                  rating: 5,
                  gradient:
                    "linear-gradient(135deg, rgba(200, 0, 255, 0.05), rgba(200, 0, 255, 0.15))",
                },
                {
                  name: "Michael Chen",
                  role: "Tech Entrepreneur",
                  image: userImage1,
                  text: "As a busy founder, I never had time for consistent LinkedIn posting. Klype solved that problem - now I have a steady stream of content that actually sounds like me.",
                  rating: 5,
                  gradient:
                    "linear-gradient(135deg, rgba(0, 242, 255, 0.05), rgba(0, 242, 255, 0.15))",
                },
                {
                  name: "Priya Sharma",
                  role: "Sales Consultant",
                  image: userImage2,
                  text: "The personalized content calendar is a game-changer. I've seen a 40% increase in inbound inquiries since using Klype for just two months.",
                  rating: 4,
                  gradient:
                    "linear-gradient(135deg, rgba(200, 0, 255, 0.05), rgba(0, 242, 255, 0.15))",
                },
              ].map((testimonial, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="h-100"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      className="testimonial-card h-100 p-4 rounded-4 position-relative"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        transition: "all 0.3s ease",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                        overflow: "hidden",
                      }}
                    >
                      {/* Quote icon */}
                      <div
                        className="position-absolute"
                        style={{
                          top: "15px",
                          right: "15px",
                          fontSize: "3rem",
                          opacity: "0.1",
                          color: "#fff",
                          fontFamily: "serif",
                        }}
                      >
                        "
                      </div>

                      {/* Background gradient */}
                      <div
                        className="position-absolute"
                        style={{
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "100%",
                          background: testimonial.gradient,
                          opacity: 0.5,
                          zIndex: -1,
                        }}
                      ></div>

                      {/* Rating */}
                      <div className="mb-3" style={{ color: "#FFD700" }}>
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <span
                              key={i}
                              style={{ fontSize: "0.9rem", marginRight: "3px" }}
                            >
                              {i < testimonial.rating ? "★" : "☆"}
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
                            </span>
                          ))}
                      </div>

                      {/* Testimonial text */}
<<<<<<< HEAD
                      <div className="position-relative mb-4">
                        <FaQuoteLeft className="quote-icon quote-left" />
                        <p className="testimonial-quote">
                          <span style={{ fontSize: '1.5em', lineHeight: '0', verticalAlign: 'middle', color: 'rgba(200, 0, 255, 0.7)', marginRight: '5px' }}>"</span>
                          {testimonial.quote}
                        </p>
                        <FaQuoteRight className="quote-icon quote-right" />
                      </div>

                      {/* User info */}
                      <motion.div 
                        className="d-flex align-items-center mt-4"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="testimonial-avatar me-3"
                        />
                        <div>
                          <h5 className="testimonial-author">{testimonial.name}</h5>
                          <p className="testimonial-role">{testimonial.role}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
=======
                      <p
                        className="mb-4"
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: "1.7",
                          color: "#eee",
                          fontStyle: "italic",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        "{testimonial.text}"
                      </p>

                      {/* User info */}
                      <div className="d-flex align-items-center mt-4">
                        <div
                          className="rounded-circle overflow-hidden me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            border: "2px solid rgba(255, 255, 255, 0.2)",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div>
                          <h5
                            className="mb-0"
                            style={{
                              fontSize: "1rem",
                              fontWeight: "600",
                              color: "#fff",
                            }}
                          >
                            {testimonial.name}
                          </h5>
                          <p
                            className="mb-0"
                            style={{
                              fontSize: "0.8rem",
                              color: "#aaa",
                              fontWeight: "500",
                            }}
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-5 pt-4"
          >
            <p
              style={{
<<<<<<< HEAD
                fontSize: "1rem",
=======
                fontSize: "0.9rem",
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
                color: "#999",
                fontWeight: "500",
              }}
            >
              Trusted by professionals from companies like
            </p>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mt-3">
              {["Google", "Microsoft", "LinkedIn", "Salesforce", "HubSpot"].map(
                (company, idx) => (
<<<<<<< HEAD
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      padding: "10px 20px",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "30px",
                      fontSize: "0.9rem",
                      color: "#ddd",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {company}
                  </motion.div>
=======
                  <div
                    key={idx}
                    style={{
                      padding: "8px 16px",
                      background: "rgba(255, 255, 255, 0.03)",
                      borderRadius: "30px",
                      fontSize: "0.85rem",
                      color: "#aaa",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    {company}
                  </div>
>>>>>>> 5dd595195dc5c875221912625472365e3737ca0b
                )
              )}
            </div>
          </motion.div>
        </Container>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="back py-5 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "1.8rem",
                background: "linear-gradient(to right, #ffffff, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "700px", fontSize: "0.95rem" }}
            >
              Everything you need to know about Klype
            </p>
          </motion.div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="accordion custom-accordion" id="faqAccordion">
                {[
                  {
                    question: "What is Klype?",
                    answer:
                      "Klype is an AI-powered LinkedIn content engine built for Founders, Freelancers, Consultants, to consistently create high-converting, personalized posts—without hiring a LinkedIn Ghostwriter.",
                  },
                  {
                    question:
                      "How does Klype's AI-driven content calendar work?",
                    answer:
                      "Klype maps your ICP, tone, and GTM goals into a weekly content system. It auto-generates strategy-led post drafts tailored to your voice and audience pain points.",
                  },
                  {
                    question: "Can I automate LinkedIn posts using Klype?",
                    answer:
                      "Yes—Klype integrates with scheduling tools so you can review, approve, and auto-publish posts without managing them daily.",
                  },
                  {
                    question:
                      "Is Klype suitable for users without technical expertise?",
                    answer:
                      "Absolutely. Klype is built for non-technical founders with no content background—it's plug-and-play, with a clean, intuitive UI.",
                  },
                  {
                    question:
                      "How does Klype ensure content authenticity and avoid AI-detection algorithms on LinkedIn?",
                    answer:
                      "Klype uses humanized writing frameworks trained on real founder voices, avoiding robotic patterns and AI-detection triggers.",
                  },
                  {
                    question:
                      "What are the cost benefits of using Klype compared to hiring content consultants?",
                    answer:
                      "Klype gives you strategy, writing, and scheduling at less than 10% of the cost of hiring a ghostwriter or agency—without the overhead.",
                  },
                  {
                    question:
                      "Does Klype offer analytics to track content performance?",
                    answer:
                      "Yes. Klype tracks performance by post type, format, and timing—then uses that data to improve future content recommendations automatically.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="accordion-item border-0 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                    whileHover={{
                      boxShadow: "0 8px 30px rgba(200, 0, 255, 0.15)",
                      borderColor: "rgba(200, 0, 255, 0.1)",
                    }}
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          color: "#fff",
                          fontSize: "0.95rem",
                          fontWeight: "500",
                          padding: "1rem 1.25rem",
                          boxShadow: "none",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <span
                          className="me-3"
                          style={{
                            color: "rgba(200, 0, 255, 0.7)",
                            fontSize: "1rem",
                          }}
                        >
                          Q:
                        </span>
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div
                        className="accordion-body text-secondary"
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                          background: "rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <span
                          className="me-2"
                          style={{
                            color: "rgba(0, 242, 255, 0.7)",
                            fontWeight: "500",
                          }}
                        >
                          A:
                        </span>
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="back py-5"
        style={
          {
            // backgroundColor: "#000",
          }
        }
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
              <span
                style={{
                  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
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
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #000000)",
          color: "#666",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <Container>
          <Row className="gy-4">
            <Col lg={4} md={6}>
              <h2
                style={{
                  background: "linear-gradient(to right, #ffffff, #888888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  fontWeight: "600",
                }}
              >
                Klype
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                  color: "#999",
                }}
              >
                Empowering the world's professionals to share their stories that
                convert
              </p>
              <div className="social-links d-flex gap-3">
                <Link
                  to="#"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "rgba(200, 0, 255, 0.2)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#666";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaLinkedin size={18} />
                </Link>
                <Link
                  to="#"
                  className="text-decoration-none"
                  style={{
                    color: "#666",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "rgba(0, 242, 255, 0.2)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#666";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  K
                </Link>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <h5
                style={{
                  fontSize: "1rem",
                  color: "#aaa",
                  marginBottom: "1.2rem",
                  fontWeight: "500",
                }}
              >
                Resources
              </h5>
              <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-decoration-none d-inline-block"
                    style={{
                      color: "#777",
                      transition: "all 0.3s ease",
                      padding: "0.3rem 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#777";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-decoration-none d-inline-block"
                    style={{
                      color: "#777",
                      transition: "all 0.3s ease",
                      padding: "0.3rem 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#777";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-decoration-none d-inline-block"
                    style={{
                      color: "#777",
                      transition: "all 0.3s ease",
                      padding: "0.3rem 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#777";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Blogs & Resources
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6}>
              <h5
                style={{
                  fontSize: "1rem",
                  color: "#aaa",
                  marginBottom: "1.2rem",
                  fontWeight: "500",
                }}
              >
                Community
              </h5>
              <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-decoration-none d-inline-block"
                    style={{
                      color: "#777",
                      transition: "all 0.3s ease",
                      padding: "0.3rem 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#777";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Join our Telegram Channel
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-decoration-none d-inline-block"
                    style={{
                      color: "#777",
                      transition: "all 0.3s ease",
                      padding: "0.3rem 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#777";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Join our Facebook Community
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <div
            className="text-center mt-5 pt-4"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              fontSize: "0.85rem",
              color: "#555",
            }}
          >
            © {new Date().getFullYear()} Klype. All rights reserved.
          </div>
        </Container>
      </footer>
      <KlypeFormModal show={showForm} handleClose={handleCloseForm} />
    </>
  );
}
