// src/pages/Home/Hero-Section.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroBackground from "../../../assets/hero-bg.jpg";
import "./Hero-Section.css";
import { FaChevronDown } from "react-icons/fa";

function HeroSection() {
  // Smooth scroll to next section (adjust ID as needed)
  const handleScrollDown = () => {
    const nextSection = document.getElementById("about-section"); // or "modern-trap", "services-section", etc.
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 0, 20, 0.82), rgba(3, 0, 20, 0.9)), url(${heroBackground})`,
      }}
    >
      <div className="hero-inner">
        <p className="hero-eyebrow hero-seq hero-1">
          Perfektionist · Accountability · Progress
        </p>

        <h1 className="hero-title hero-seq hero-2">
          Stop Scrolling & Start Growing.
        </h1>

        <h2 className="hero-subtitle hero-seq hero-3">
          Accountability Engine using AI
        </h2>

        <p className="hero-subtext hero-seq hero-4">
          Trade binge-watching and endless reels for taking action with the help
          of regular guidance from experts and AI assistance.
        </p>

        <div className="hero-cta-row hero-seq hero-5">
          <Link to="/pricing" className="cta-button primary">
            Get Started
          </Link>
          <Link to="/services" className="cta-button ghost">
            See How It Works
          </Link>
        </div>

        <p className="hero-footnote hero-seq hero-6">
          Lock in beta pricing for the next 6 months before subscriptions jump
          3× in January.
        </p>
      </div>

      {/* Chevron at bottom of hero */}
      <button
        type="button"
        className="chevron-down hero-seq hero-7"
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <FaChevronDown />
      </button>
    </section>
  );
}

export default HeroSection;
