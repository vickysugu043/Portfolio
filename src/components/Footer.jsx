import React from 'react';
import '../styles/animations.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Vigneshwaran</span>
            <p>Software Developer</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li><i className="fas fa-phone"></i> +91 81247 91232</li>
              <li><i className="fas fa-envelope"></i> vickysugu043@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Dharmapuri, TN</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vigneshwaran Theerthagiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;