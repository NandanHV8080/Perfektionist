// src/pages/Home/BeforeAfter.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BeforeAfter.css";
import BeforeImage from "../../../assets/Home/BeforeAfter/Before.png";
import AfterImage from "../../../assets/Home/BeforeAfter/After.png";
import Divider from '../../../ui/Divider/Divider'

function BeforeAfter() {
  // Scroll reveal (same pattern as Infos / Modern Trap / Services)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        }),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll(".reveal-ba").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ba-section" id="before-after">
      <div className="ba-inner">
        {/* HEADER */}
        <header className="ba-header reveal-ba" style={{ "--i": 0 }}>
          <p className="ba-tag">Before &amp; After</p>
          <h1>From numb &amp; lost to dangerous &amp; respected.</h1>
          <p className="ba-lead">
            Same person. Same 24 hours. Different choices. Perfektionist doesn’t
            sell you a fantasy life — it forces you to kill the version of you
            that wastes it.
          </p>
        </header>

        {/* SPLIT LIFE VIEW */}
        <div className="ba-grid reveal-ba" style={{ "--i": 1 }}>
          {/* BEFORE COLUMN */}
          <div className="ba-column ba-before">
            <div className="ba-col-header">
              <p className="ba-pill ba-pill-before">Before Perfektionist</p>
              <h2>Drifting through life.</h2>
              <p className="ba-col-sub">
                Alarm snoozed. Phone grabbed. Dopamine hits. Hangovers,
                half-finished projects and a body you avoid looking at in the
                mirror.
              </p>
            </div>

            {/* BEFORE IMAGE */}
            <div className="ba-photo-placeholder before">
              <img
                src={BeforeImage}
                alt="Before: unfocused student drifting through life"
              />
            </div>

            <ul className="ba-list ba-list-before">
              <li>
                Weekends blurred by alcohol, junk food and “one more episode”
                that turns into 4AM.
              </li>
              <li>
                Scrolling other people’s success while lying to yourself that
                “you’re just in your learning phase”.
              </li>
              <li>
                Clothes that don’t fit, posture collapsing, no one taking you
                seriously when you talk about your goals.
              </li>
              <li>
                Random DMs, shallow flings, broken trust and zero long-term
                respect from anyone that actually matters.
              </li>
              <li>
                Every birthday feels heavier because deep down you know: another
                year went by and you didn’t change a thing.
              </li>
            </ul>
          </div>

          {/* AFTER COLUMN */}
          <div className="ba-column ba-after">
            <div className="ba-col-header">
              <p className="ba-pill ba-pill-after">
                After 90 days with Perfektionist
              </p>
              <h2>Becoming "that guy".</h2>
              <p className="ba-col-sub">
                No secret hack. Just boring, brutal consistency — tracked,
                measured and pushed until your old life can’t keep up.
              </p>
            </div>

            {/* AFTER IMAGE */}
            <div className="ba-photo-placeholder after">
              <img
                src={AfterImage}
                alt="After: focused, well-dressed man moving forward on his mission"
              />
            </div>

            <ul className="ba-list ba-list-after">
              <li>
                Clear sleeping schedule, clean diet, sharp body — your reflection
                finally matches the ambition in your head.
              </li>
              <li>
                Calendar full of non-negotiable blocks: training, deep work,
                money-making and recovery — tracked weekly with your coach.
              </li>
              <li>
                Clothes that fit, shoulders back, eye contact steady. People
                start asking “What happened to you?” — in the good way.
              </li>
              <li>
                Fewer but deeper relationships — friends, family and dating,
                built on standards instead of desperation.
              </li>
              <li>
                Bank account trending up, skills compounding, long-term plan on
                paper instead of “I’ll figure it out one day”.
              </li>
            </ul>
          </div>
        </div>

        {/* MID CTA — directly under the comparison */}
        <div className="ba-mid-cta reveal-ba" style={{ "--i": 2 }}>
          {/* Scrolls down to Services section on the same page */}
          <a href="#services" className="ba-mid-cta-button">
            Get Started
          </a>
        </div>

        {/* TRANSITION STRIP */}
        <div className="ba-strip reveal-ba" style={{ "--i": 3 }}>
          <p>
            Most people never make this jump because{" "}
            <span>no one is keeping score</span>. Perfektionist adds pressure,
            structure and consequences until your “before” becomes unrecognisable.
          </p>
        </div>

        {/* BOTTOM CTA → separate page for future system breakdown */}
        <div className="ba-cta reveal-ba" style={{ "--i": 4 }}>
          <p>
            You already know which side you’re living on right now. The question
            is whether you’re willing to let someone drag you to the other.
          </p>
          <Link to="/how-it-works" className="ba-cta-button">
            See How The System Works
          </Link>
        </div>
      </div>
      <Divider />
    </section>
  );
}

export default BeforeAfter;
