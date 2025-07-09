import React from 'react';
import '../styles/animations.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              I'm a dedicated Web Developer with 3 years of hands-on experience in designing and 
              developing dynamic, high-performance web applications using PHP and .NET. 
              Adept in backend integration, database management, and building scalable solutions 
              that meet user needs.
            </p>
            <p>
              Known for clean code practices, automation, and a focus on continuous learning, 
              I strive to create efficient and maintainable solutions for complex problems.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span>Name:</span>
                <span>Vigneshwaran Theerthagiri</span>
              </div>
              <div className="detail-item">
                <span>Email:</span>
                <span>vickysugu043@gmail.com</span>
              </div>
              <div className="detail-item">
                <span>Phone:</span>
                <span>81247 91232</span>
              </div>
              <div className="detail-item">
                <span>From:</span>
                <span>Dharmapuri, Tamilnadu</span>
              </div>
            </div>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
          <div className="about-image zoom-in">
            <div className="image-frame">
              <div className="image-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;