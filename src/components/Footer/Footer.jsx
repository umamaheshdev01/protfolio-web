import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            Let’s Collaborate <br />
            umamaheshdev01<span>@</span>gmail.com
          </h3>

          <p className="secondary">
            From front-end design to full-stack solutions — I’m always open to web development collaborations. Let’s build something amazing together. Reach out anytime.
          </p>

          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Work</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>Uma</h1>
          <h1>Mahesh</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Uma Mahesh 2025</p>
          <p className="primary sm">Website made by Uma</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
