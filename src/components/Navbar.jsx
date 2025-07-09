import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/animations.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} fade-in`}>
      <div className="container">
        <div className="navbar-brand">
          <span className="logo">Vigneshwaran</span>
        </div>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        
        <div 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;