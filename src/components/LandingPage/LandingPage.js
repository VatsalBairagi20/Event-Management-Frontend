import React, { useRef } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import VideoBg from "./event-video.mp4"; // Placeholder for a video file
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"; // Social icons

const LandingPage = () => {
  const navigate = useNavigate();
  const eventsRef = useRef(null);

  const goToLogin = () => {
    navigate("/login");
  };

  const scrollToEvents = () => {
    if (eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="landing-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay loop muted className="hero-video">
          <source src={VideoBg} loop type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>College Events Unleashed</h1>
          <p>Experience the Pulse of Campus Life at Parul University</p>
          <div className="hero-buttons">
            <button className="cta-login" onClick={goToLogin}>Join Now</button>
            <button className="cta-explore" onClick={scrollToEvents}>Explore Events</button>
          </div>
        </div>
      </section>

      {/* Event Highlights Carousel */}
      <section className="event-highlights" ref={eventsRef}>
        <h2>Event Highlights</h2>
        <div className="carousel">
          <div className="carousel-item" style={{ backgroundImage: `url(${require('./Image1.jpg')})` }}>
            <div className="carousel-caption">Cultural Fest 2023</div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${require('./Image2.jpg')})` }}>
            <div className="carousel-caption">Hackathon Night</div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${require('./Image3.jpg')})` }}>
            <div className="carousel-caption">Fresher Party</div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${require('./Image4.jpg')})` }}>
            <div className="carousel-caption">Summit 2023</div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="event-categories">
        <h2>What’s Happening?</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Cultural Extravaganza</h3>
            <p>Dance, music, and art come alive in our vibrant fests.</p>
          </div>
          <div className="category-card">
            <h3>Tech Titans</h3>
            <p>Hackathons and summits for the tech-savvy minds.</p>
          </div>
          <div className="category-card">
            <h3>Social Nights</h3>
            <p>Parties and gatherings to kick off the semester.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Our Events</h2>
        <p>
          At Parul University, we celebrate creativity, innovation, and community through a diverse range of events. 
          From cultural festivals to academic summits, our events are designed to inspire, connect, and empower students.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Get in Touch</h3>
          <p>Email: events@paruluniversity.edu</p>
          <p>Address: Parul University, Limda, Vadodara, Gujarat</p>
          <p>Phone: +91 98765 43210</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
          <button className="register-now">Register for Events</button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;