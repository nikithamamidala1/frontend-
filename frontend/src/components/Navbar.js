import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
        <li><a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
