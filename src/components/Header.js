import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = (
    <>
      <ScrollLink to="hero" smooth duration={500} offset={-70} spy hashSpy className="nav-link" activeClass="active" onClick={() => setIsMobileMenuOpen(false)}>Home</ScrollLink>
      <ScrollLink to="services" smooth duration={500} offset={-70} spy hashSpy className="nav-link" activeClass="active" onClick={() => setIsMobileMenuOpen(false)}>Services</ScrollLink>
      <ScrollLink to="about" smooth duration={500} offset={-70} spy hashSpy className="nav-link" activeClass="active" onClick={() => setIsMobileMenuOpen(false)}>About</ScrollLink>
      <ScrollLink to="gallery" smooth duration={500} offset={-70} spy hashSpy className="nav-link" activeClass="active" onClick={() => setIsMobileMenuOpen(false)}>Gallery</ScrollLink>
      <ScrollLink to="contact" smooth duration={500} offset={-70} spy hashSpy className="nav-link" activeClass="active" onClick={() => setIsMobileMenuOpen(false)}>Contact</ScrollLink>
      <ScrollLink to="testimonials" smooth duration={500} offset={-70} spy hashSpy className="nav-link" activeClass="active" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</ScrollLink>
    </>
  );

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      className="header"
    >
      <motion.div
        className="logo"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
      >
        Career Clues
      </motion.div>

      {/* Toggle button for mobile */}
      {isMobile && (
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>
      )}

      {/* Mobile Dropdown Nav */}
      <motion.nav
        className={`nav-menu mobile ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks}
      </motion.nav>

      {/* Large Screen Horizontal Nav */}
      <nav className="nav-menu large-screen">
        {navLinks}
      </nav>
    </motion.header>
  );
};

export default Header;
