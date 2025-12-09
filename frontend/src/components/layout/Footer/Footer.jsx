// src/components/layout/Footer/Footer.jsx
// This is a reusable Footer component you can drop at the bottom of any page.
// It focuses on structure + professionalism (like Cluely), not on fancy UI yet.

import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* BRAND + SHORT EXPLANATION + CONTACT */}
        <div className="footer-brand">
          {/* Simple text logo for now – you can swap this for an <img> later */}
          <div className="footer-logo-mark">P</div>

          <div className="footer-brand-text">
            <h3>Perfektionist</h3>
            <p>
              A 7-pillar execution system for students and young builders who
              are done underperforming. Less noise, more structure,
              accountability and brutal honesty.
            </p>

            <p className="footer-contact-line">
              Contact:{" "}
              <a href="mailto:support@perfektionist.gg">
                support@perfektionist.gg
              </a>
            </p>
          </div>
        </div>

        {/* LINK COLUMNS */}
        <div className="footer-columns">
          {/* Programs / Product */}
          <div className="footer-column">
            <h4>Programs</h4>
            <ul>
              <li>
                <a href="/#programs">Overview</a>
              </li>
              <li>
                <a href="/#initiate">Initiate</a>
              </li>
              <li>
                <a href="/#titan">Titan</a>
              </li>
              <li>
                <a href="/#conqueror">Conqueror</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/contact">Contact support</a>
              </li>
              <li>
                <a href="/faq#contact-form">Ask a personal question</a>
              </li>
              <li>
                <a href="/resources/getting-started">
                  Getting started guide
                </a>
              </li>
              <li>
                <a href="/resources/self-assessment">
                  7-pillar self-assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/resources/cheatbook">Perfektionist cheatbook</a>
              </li>
              <li>
                <a href="/blog">Articles & mental models</a>
              </li>
              <li>
                <a href="/resources/tools">Free tools & templates</a>
              </li>
              <li>
                <a href="/newsletter">Newsletter (coming soon)</a>
              </li>
            </ul>
          </div>

          {/* Company + Careers */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Perfektionist</a>
              </li>
              <li>
                <a href="/mission">Mission & philosophy</a>
              </li>
              <li>
                <a href="/partners">Partnerships</a>
              </li>
              <li>
                <a href="/press">Press & media</a>
              </li>
            </ul>

            <h4 className="footer-column-subheading">Careers</h4>
            <ul>
              <li>
                <a href="/careers">Open roles</a>
              </li>
              <li>
                <a href="/careers#teams">Teams & roles</a>
              </li>
              <li>
                <a href="/careers#culture">Culture & expectations</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/legal/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/legal/terms-of-service">Terms of Service</a>
              </li>
              <li>
                <a href="/legal/cookie-policy">Cookie Policy</a>
              </li>
              <li>
                <a href="/legal/data-processing-agreement">
                  Data Processing Agreement
                </a>
              </li>
              <li>
                <a href="/legal/subprocessors">Subprocessors</a>
              </li>
              <li>
                <a href="/legal/refund-policy">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Security & Data */}
          <div className="footer-column">
            <h4>Security & data</h4>
            <ul>
              <li>
                <a href="/security">Security overview</a>
              </li>
              <li>
                <a href="/security/data-protection">Data protection</a>
              </li>
              <li>
                <a href="/security/responsible-use">
                  Responsible use guidelines
                </a>
              </li>
              <li>
                <a href="/security/compliance">Compliance & certifications</a>
              </li>
              <li>
                <a href="/security/report-issue">Report a vulnerability</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT + BADGES + SOCIALS */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© {currentYear} Perfektionist. All rights reserved.</p>
          </div>

          {/* Fake “badges” for now – you can swap these for real certification logos later */}
          <div className="footer-badges">
            <span className="footer-badge">GDPR-aware</span>
            <span className="footer-badge">Student-first design</span>
            <span className="footer-badge">Accountability-focused</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Perfektionist on Instagram"
            >
              IG
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Perfektionist on X"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Perfektionist on LinkedIn"
            >
              in
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Perfektionist on YouTube"
            >
              YT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
