// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      {/* Left: Brand */}
      <div className="nav-brand">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          {/* Replace text with official Vedrion logo */}
          <img
            src="/assets/Logo-Transparent.png"   // put your transparent logo here
            alt="Vedrion"
            className="nav-logo"
          />
        </Link>
      </div>

      {/* Middle: Links (desktop only) */}
      <nav className="nav-links">
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Right: CTA (desktop only) */}
      <div className="nav-cta">
        <Link to="/contact" className="book-call-btn">
          Sign up
        </Link>
      </div>

      {/* Mobile toggle */}
      <button className="nav-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li style={{ animationDelay: "0.1s" }}>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li style={{ animationDelay: "0.2s" }}>
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          </li>
          <li style={{ animationDelay: "0.3s" }}>
            <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
          </li>
          <li style={{ animationDelay: "0.4s" }}>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
