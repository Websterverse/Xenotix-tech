import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar glassy-navbar">
    <div className="navbar-left">
      <span className="navbar-logo">Xenotix Tech</span>
    </div>
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
  </nav>
);

export default Navbar; 