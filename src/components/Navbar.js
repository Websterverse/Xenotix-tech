import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar glassy-navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Xenotix Tech</span>
      </div>
      <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <ul className="navbar-center">
        <li><a href="#home">Home</a></li>
        <li><a href="#tech">Tech Stack</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#articles">Articles</a></li>
      </ul>
      <div className="navbar-right">
        <button className="navbar-theme-toggle" aria-label="Toggle theme">🌙</button>
        <button className="navbar-contact">Contact Now →</button>
      </div>
      {menuOpen && (
        <div className="navbar-mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="navbar-mobile-content" onClick={e => e.stopPropagation()}>
            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#tech" onClick={() => setMenuOpen(false)}>Tech Stack</a></li>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#articles" onClick={() => setMenuOpen(false)}>Articles</a></li>
            </ul>
            <button className="navbar-contact mobile" onClick={() => setMenuOpen(false)}>Contact Now →</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 