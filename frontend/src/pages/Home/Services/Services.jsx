// src/pages/Home/Services.jsx
import React, { useEffect } from "react";
import "./Services.css";
import Divider from '../../../ui/Divider/Divider'

function Services() {
  // Scroll-based reveal (same pattern as Infos + Modern Trap)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        }),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll(".reveal-service").forEach((el) =>
      io.observe(el)
    );

    return () => io.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        {/* SECTION HEADER */}
        <header className="services-header reveal-service" style={{ "--i": 0 }}>
          <p className="services-tag">Choose your difficulty level</p>
          <h2>Services that punish excuses, not effort.</h2>
          <p className="services-lead">
            Perfektionist isn’t a “feel good” course. It’s a system that forces
            you to move from passive consumer to disciplined operator — one
            level at a time.
          </p>
        </header>

        {/* VERTICAL PATH OF TIERS */}
        <div className="services-path">
          {/* INITIATE */}
          <article
            className="service-card initiate reveal-service"
            style={{ "--i": 1 }}
          >
            <div className="service-top">
              <p className="tier-label">Stage 1 · Initiate</p>
              <h3 className="tier-name">Initiate</h3>

              {/* PRICING */}
              <div className="tier-price-row">
                <span className="tier-price">Free</span>
                <span className="tier-price-note">One-time · Cheatbook PDF</span>
              </div>

              <p className="tier-tagline">
                Wake up to the truth about your habits, routines and wasted
                potential.
              </p>
            </div>

            <div className="service-body">
              <p className="service-pill">70-page cheatbook</p>
              <p className="service-desc">
                A brutally clear breakdown of the 7 pillars you’ve been
                neglecting: Diet, Fitness, Fashion, Wealth, Productivity,
                Relationships (friends, family & dating) and Mental Health.
              </p>

              <ul className="service-list">
                <li>See why your current lifestyle guarantees regret.</li>
                <li>Simple, no-fluff frameworks you can start today.</li>
                <li>
                  Designed to be re-read, not finished once and forgotten.
                </li>
              </ul>

              <div className="service-download-row">
                {/*
                  IMPORTANT:
                  1. Put your PDF in: frontend/public/perfektionist-initiate.pdf
                  2. href should be "/perfektionist-initiate.pdf"
                  Browser will serve it from the root on any device.
                */}
                <a
                  className="download-link"
                  href="/perfektionist-initiate.pdf" // TODO: replace with actual file name
                  download="Perfektionist-Initiate-Cheatbook.pdf"
                >
                  ⬇ Download Initiate Cheatbook
                </a>
                <p className="download-note">
                  No email walls. No upsell funnel. Just read it and decide if
                  you’re serious enough for Titan or Conqueror.
                </p>
              </div>
            </div>
          </article>

          {/* TITAN */}
          <article
            className="service-card titan reveal-service"
            style={{ "--i": 2 }}
          >
            <div className="service-top">
              <p className="tier-label">Stage 2 · Titan</p>
              <h3 className="tier-name">Titan</h3>

              {/* PRICING */}
              <div className="tier-price-row">
                <span className="tier-price">$75</span>
                <span className="tier-price-note">One-time · Deep reset</span>
              </div>

              <p className="tier-tagline">
                For people who want a full reset — with someone watching every
                move.
              </p>
            </div>

            <div className="service-body">
              <p className="service-pill">Deep-dive 1–1 coaching</p>
              <p className="service-desc">
                Everything in Initiate, plus a guided assault on your worst
                habits, blind spots and excuses. You don’t guess your way
                through change — you get a map.
              </p>

              <ul className="service-list">
                <li>Pre-call questionnaire so we don’t waste a second.</li>
                <li>One 60-minute 1–1 call with an expert.</li>
                <li>Recording of the call so you can re-watch week after week.</li>
                <li>Clear, written action steps tailored to your life.</li>
                <li>
                  2 elite productivity templates with full setup (worth $200 of
                  value).
                </li>
                <li>
                  1 self-introspection template with setup (worth $100 of value).
                </li>
              </ul>

              {/* CTA (hook to backend later) */}
              <div className="service-cta-row">
                <button type="button" className="service-cta-button">
                  Get Started
                </button>
              </div>
            </div>
          </article>

          {/* CONQUEROR */}
          <article
            className="service-card conqueror reveal-service"
            style={{ "--i": 3 }}
          >
            <div className="service-top">
              <p className="tier-label">Stage 3 · Conqueror</p>
              <h3 className="tier-name">Conqueror</h3>

              {/* PRICING */}
              <div className="tier-price-row">
                <span className="tier-price">$300</span>
                <span className="tier-price-note">Per month · 1–1 container</span>
              </div>

              <p className="tier-tagline">
                You don’t need more information. You need someone who refuses
                to let you disappear.
              </p>
            </div>

            <div className="service-body">
              <p className="service-pill">Elite accountability container</p>
              <p className="service-desc">
                Everything in Titan, plus relentless tracking, daily contact and
                real consequences when you drift. This is built for the student
                or founder who wants their entire life on a scoreboard.
              </p>

              <ul className="service-list">
                <li>4× 60-minute 1–1 accountability calls per month.</li>
                <li>
                  WhatsApp access for daily doubts and micro-course corrections.
                </li>
                <li>
                  Daily motivation reminders via your preferred mode of
                  communication.
                </li>
                <li>
                  Evening reminders to screenshot your day and set your to-do
                  list for tomorrow.
                </li>
                <li>
                  Monthly progress report with honest assessment + next steps.
                </li>
                <li>
                  Bonus: business/career idea review + practical tips to scale
                  and optimize.
                </li>
              </ul>

              {/* CTA (hook to backend later) */}
              <div className="service-cta-row">
                <button type="button" className="service-cta-button">
                  Get Started
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* FOOTNOTE / CTA */}
        <div className="services-footer reveal-service" style={{ "--i": 4 }}>
          <p>
            Most people stay stuck at “Initiate” forever — reading, saving,
            screenshotting. <span>Perfektionist exists for the few</span> who
            are ready to move up the ladder and let someone else hold the whip
            when discipline slips.
          </p>
        </div>
      </div>
    <Divider />
  </section>
  );
}

export default Services;
