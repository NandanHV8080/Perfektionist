// src/pages/Home/Comparison.jsx
import React, { useEffect } from "react";
import "./Comparison.css";
import { FaCheck, FaTimes } from "react-icons/fa";
import Divider from '../../../ui/Divider/Divider'

const comparisonPoints = [
  {
    label: "Real-time accountability, not just motivation",
    perfDetail:
      "Daily reminders, 1-1 calls and check-ins so you physically can’t hide from your goals.",
    otherDetail:
      "You watch, feel inspired, close the tab – and nobody notices when you disappear.",
  },
  {
    label: "Personalised plans across all 7 pillars of life",
    perfDetail:
      "Diet, fitness, fashion, wealth, productivity, relationships and mental health – all connected.",
    otherDetail:
      "Random tips on dropshipping, cold DMs and ‘high income skills’ while your basics stay broken.",
  },
  {
    label: "Direct access to experts who actually track you",
    perfDetail:
      "Titan & Conqueror include 1-1 calls, call recordings, templates and clear action steps.",
    otherDetail:
      "Creator records once, uploads forever. No feedback, no follow-up, no one checking your execution.",
  },
  {
    label: "Career & business review, not fantasy selling",
    perfDetail:
      "Honest feedback on your ideas and practical scaling tips for your situation.",
    otherDetail:
      "‘Real World’ dreams: basic dropshipping/copywriting modules in saturated markets sold as golden tickets.",
  },
];

function Comparison() {
  // Scroll-based reveal (Infos-style)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        }),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll(".reveal-comp").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className="comparison-section" id="comparison">
      <div className="comparison-inner">
        {/* Header */}
        <header className="comparison-header reveal-comp" style={{ "--i": 0 }}>
          <p className="comparison-tag">Why Perfektionist exists</p>
          <h2>Stop buying dreams. Start buying discipline.</h2>
          <p className="comparison-lead">
            Courses and clips keep you entertained. Perfektionist is built to
            make you uncomfortable, accountable and impossible to ignore.
          </p>
        </header>

        {/* Card labels (desktop emphasis) */}
        <div
          className="comparison-pill-row reveal-comp"
          style={{ "--i": 1 }}
        >
          <div className="pill pill-perf">
            <span className="pill-label-main">Perfektionist</span>
            <span className="pill-label-sub">Initiate · Titan · Conqueror</span>
          </div>
          <div className="pill pill-other">
            <span className="pill-label-main">Courses & Influencer Videos</span>
            <span className="pill-label-sub">
              Pods · Reels · “Secret” Discords
            </span>
          </div>
        </div>

        {/* Main comparison cards */}
        <div className="comparison-cards">
          {/* Perfektionist side */}
          <article
            className="comp-card perf-card reveal-comp"
            style={{ "--i": 2 }}
          >
            <div className="card-header">
              <h3>Perfektionist</h3>
              <p>
                For people who are done flirting with potential and ready to
                execute.
              </p>
            </div>

            <ul className="comp-list">
              {comparisonPoints.map((point, idx) => (
                <li key={idx} className="comp-item">
                  <div className="comp-icon good">
                    <FaCheck />
                  </div>
                  <div className="comp-text">
                    <p className="comp-label">{point.label}</p>
                    <p className="comp-detail">{point.perfDetail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Other side */}
          <article
            className="comp-card other-card reveal-comp"
            style={{ "--i": 3 }}
          >
            <div className="card-header">
              <h3>Courses & Influencer Videos</h3>
              <p>
                Built to keep you watching, not to drag you through boring,
                painful execution.
              </p>
            </div>

            <ul className="comp-list">
              {comparisonPoints.map((point, idx) => (
                <li key={idx} className="comp-item">
                  <div className="comp-icon bad">
                    <FaTimes />
                  </div>
                  <div className="comp-text">
                    <p className="comp-label">{point.label}</p>
                    <p className="comp-detail other-detail">
                      {point.otherDetail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Urgency strip */}
        <div
          className="comparison-urgency reveal-comp"
          style={{ "--i": 4 }}
        >
          <p>
            If you’re still buying $50/month “secret communities” hoping to wake
            up rich, you’re the product.{" "}
            <span>
              Perfektionist is for the 1% who’d rather suffer through daily
              action than binge another piece of content.
            </span>
          </p>
          <p className="urgency-note">
            When you’re ready to treat your life like a serious project, not an
            aesthetic, choose Initiate, Titan or Conqueror and commit for 90
            days.
          </p>
        </div>
      </div>
    <Divider />
    </section>
  );
}

export default Comparison;
