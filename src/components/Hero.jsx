import React from 'react';
import { Link } from 'react-scroll';
import '../styles/animations.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text slide-in-left">
            <h4>Hello, I'm</h4>
            <h1>Vigneshwaran Theerthagiri</h1>
            <h2>Software Developer</h2>
            <p>
              PHP and .NET Web Developer with 3 years of experience in developing dynamic web applications.
            </p>
            <div className="hero-buttons">
              <Link to="contact" smooth={true} duration={500} className="btn">
                Contact Me
              </Link>
              <a href="#projects" className="btn secondary-btn">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-image slide-in-right">
            <div className="image-wrapper">
              <div className="glow"></div>
              <div className="profile-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;