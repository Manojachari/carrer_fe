import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import './Header.css';
import CareerClues_logo from '../assests/CareerClues_logo-03.png';

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
      <ScrollLink to="hero" smooth duration={500} offset={-70} spy hashSpy className="home-page-nav-link" activeClass="home-page-active" onClick={() => setIsMobileMenuOpen(false)}>Home</ScrollLink>
      <ScrollLink to="services" smooth duration={500} offset={-70} spy hashSpy className="home-page-nav-link" activeClass="home-page-active" onClick={() => setIsMobileMenuOpen(false)}>Services</ScrollLink>
      <ScrollLink to="about" smooth duration={500} offset={-70} spy hashSpy className="home-page-nav-link" activeClass="home-page-active" onClick={() => setIsMobileMenuOpen(false)}>About</ScrollLink>
      <ScrollLink to="gallery" smooth duration={500} offset={-70} spy hashSpy className="home-page-nav-link" activeClass="home-page-active" onClick={() => setIsMobileMenuOpen(false)}>Gallery</ScrollLink>
      <ScrollLink to="contact" smooth duration={500} offset={-70} spy hashSpy className="home-page-nav-link" activeClass="home-page-active" onClick={() => setIsMobileMenuOpen(false)}>Contact</ScrollLink>
      <ScrollLink to="testimonials" smooth duration={500} offset={-70} spy hashSpy className="home-page-nav-link" activeClass="home-page-active" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</ScrollLink>
    </>
  );

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      className="home-page-header"
    >
      <motion.div
        className="home-page-logo"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
      >
        <img src={CareerClues_logo} width={60} alt=''/>
        Career Clues
      </motion.div>

      {/* Toggle button for mobile */}
      {isMobile && (
        <button
          className={`home-page-mobile-menu-toggle ${isMobileMenuOpen ? 'home-page-open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="home-page-hamburger"></span>
        </button>
      )}

      {/* Mobile Dropdown Nav */}
      <motion.nav
        className={`home-page-nav-menu home-page-mobile ${isMobileMenuOpen ? 'home-page-open' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks}
      </motion.nav>

      {/* Large Screen Horizontal Nav */}
      <nav className="home-page-nav-menu home-page-large-screen">
        {navLinks}
      </nav>
    </motion.header>
  );
};

export default Header;