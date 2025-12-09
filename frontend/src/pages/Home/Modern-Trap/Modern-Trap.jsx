// src/pages/Home/Second.jsx
import React, { useState, useEffect } from "react";
import "./Modern-Trap.css";
import Divider from "../../../ui/Divider/Divider";
import { Link } from "react-router-dom";

// Top big illustration (doomscrolling + dream life)
import Image1 from "../../../assets/Home/Second-Page/One.png";
// Trap #1 image (IG reel / productivity porn)
import Image2 from "../../../assets/Home/Second-Page/Two.png";
import Image3 from "../../../assets/Home/Second-Page/Three.png";
import Image4 from "../../../assets/Home/Second-Page/Four.png";
import Image5 from "../../../assets/Home/Second-Page/Five.png";

function Second() {
  const slides = [
    {
      id: 1,
      tag: "Trap #1 · Productivity Porn",
      title: "You’re not learning, you’re numbing.",
      text: `
Three-hour podcasts. Endless shorts titled “HOW TO BECOME A MILLIONAIRE”.
Your brain feels busy, but your life is standing still.
You close YouTube and nothing in your bank, body or brain has actually changed.
      `,
      image: Image2,
    },
    {
      id: 2,
      tag: "Trap #2 · Influencer Illusion",
      title: "They sell dreams, not discipline.",
      text: `
Buy this $50/month course. Join this “secret” Discord.
Post a few self-improvement clips and you’ll be rich, right?
You’re funding their lifestyle while your own career, body
and relationships quietly fall apart.
      `,
      image: Image3,
    },
    {
      id: 3,
      tag: "Trap #3 · Fake Progress",
      title: "Consuming advice isn’t action.",
      text: `
You screenshot quotes, save reels, and tell yourself
you’ll “start tomorrow”. But tomorrow looks exactly like today.
No plan, no accountability, just a slightly more depressed version of you.
      `,
      image: Image4,
    },
    {
      id: 4,
      tag: "Trap #4 · Relationship Chaos",
      title: "Clips are training your standards.",
      text: `
Dating advice clips teach you games, not real connection.
You copy tactics from strangers and destroy trust with people who actually care.
Short-term ego, long-term emptiness.
      `,
      image: Image5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  // Scroll-based fade-in (same idea as Infos with reveal-info)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        }),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll(".reveal-trap").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className="second-page" id="modern-trap">
      <div className="second-inner">
        {/* Top headline + punch */}
        <header className="second-header reveal-trap" style={{ "--i": 0 }}>
          <h1>The Modern Trap</h1>
          <p className="second-lead">
            You’re not lazy by accident. You’re being engineered to stay
            distracted, overloaded with “motivation”, and terrified of real work.
          </p>
        </header>

        {/* Intro row with text + main illustration */}
        <div className="second-grid reveal-trap" style={{ "--i": 1 }}>
          <div className="second-text-block">
            <h2>Scroll. Feel inspired. Do nothing.</h2>
            <p>
              Every app is fighting for your attention. The goal isn’t to make
              you successful. The goal is to keep you watching one more video,
              one more clip, one more fake success story while your own life
              stays exactly the same.
            </p>
            <p>
              You think you’re “working on yourself” because you follow the
              right influencers. In reality, they’ve turned your ambition into
              content. You’re a spectator to your own potential.
            </p>
          </div>

          <div className="second-placeholder">
            <img
              src={Image1}
              alt="Young man doomscrolling while others live his dream life"
            />
          </div>
        </div>

        {/* Slider: the different traps */}
        <section className="trap-slider reveal-trap" style={{ "--i": 2 }}>
          <div className="slider-header">
            <p>
              Swipe through the traps you’re stuck in right now. If one of
              these hurts, good — that’s the point.
            </p>
          </div>

          <div className="slider-body">
            <button
              type="button"
              className="slider-arrow left"
              onClick={handlePrev}
              aria-label="Previous trap"
            >
              ‹
            </button>

            <article className="slide">
              <div className="slide-layout">
                {/* LEFT: image */}
                <div className="slide-image-wrapper">
                  {currentSlide.image ? (
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.tag}
                      className="slide-image"
                    />
                  ) : (
                    <div className="slide-image-placeholder">
                      <span>Image placeholder for this trap</span>
                    </div>
                  )}
                </div>

                {/* RIGHT: text */}
                <div className="slide-text-block">
                  <p className="slide-tag">{currentSlide.tag}</p>
                  <h3 className="slide-title">{currentSlide.title}</h3>
                  <p className="slide-text">{currentSlide.text}</p>
                </div>
              </div>
            </article>

            <button
              type="button"
              className="slider-arrow right"
              onClick={handleNext}
              aria-label="Next trap"
            >
              ›
            </button>
          </div>

          <div className="slider-dots">
            {slides.map((slide, index) => (
              <span
                key={slide.id}
                className={`dot ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </section>

        {/* Closing emotional punch */}
        <footer className="second-callout reveal-trap" style={{ "--i": 3 }}>
          <p>
            If this feels uncomfortably accurate, that’s your wake-up call.
            <span> You don’t need another podcast episode.</span>
            You need a plan, hard accountability and a system that drags you
            out of this loop before it eats another year of your life.
          </p>
        </footer>

        {/* Call to action button (before Divider) */}
        <div className="trap-cta-wrapper reveal-trap" style={{ "--i": 4 }}>
          <Link to="/pricing" className="trap-cta-button">
            Get Started
          </Link>
        </div>
      </div>

      <Divider />
    </section>
  );
}

export default Second;
