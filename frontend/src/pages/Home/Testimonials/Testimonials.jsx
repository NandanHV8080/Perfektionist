import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import Divider from '../../../ui/Divider/Divider'

const humanTestimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    age: "21",
    role: "Computer Science student · Germany",
    headline: "From drunk Thursdays to 6 A.M. gym check-ins.",
    quote:
      "Before Perfektionist I was that guy who ‘knew everything’ from podcasts but still slept at 3 A.M. scrolling. In 8 weeks my screen time dropped by 60%, I’m lifting 2x what I used to, and my professor actually asked what changed. It wasn’t motivation. It was someone calling me out every single week.",
    image: null, // <- put image path later
  },
  {
    id: 2,
    name: "Mia Kovács",
    age: "23",
    role: "Marketing intern · Budapest",
    headline: "No more ‘heal era’, just execution.",
    quote:
      "I used to binge self-help reels, journal about ‘future me’ and then do absolutely nothing. The accountability calls felt uncomfortable at first, but now my calendar, diet and dating life all have structure. My friends still talk about changing. I quietly tick boxes and move.",
    image: null,
  },
];

const alienTestimonials = [
  {
    id: 1,
    name: "Zor’Thax-17",
    age: "142 galactic cycles",
    role: "Strategic Admiral · Andromeda Trade Fleet",
    headline: "Upgraded from planetary procrastinator to cosmic operator.",
    quote:
      "Our species can bend space, but my crew still couldn’t stop doomscrolling human ‘hustle clips’. After applying the 7 pillars, fleet output rose by 312%, and no one has watched a 3-hour podcast on 2x speed since. Highly efficient primitive software.",
    image: null,
  },
  {
    id: 2,
    name: "Luma of Kepler-452b",
    age: "89 light-years old",
    role: "Neural Architect · Outer Ring",
    headline: "Seven pillars > seven suns.",
    quote:
      "We literally orbit seven suns, and yet my focus was worse than a human teenager’s. The Perfektionist system made me rebuild my routines, relationships and revenue streams. Side effect: I now get called ‘that alien who actually does things’ on my planet.",
    image: null,
  },
];

function Testimonials() {
  const [mode, setMode] = useState("human"); // "human" | "alien"

  // Fade-in like Infos, but a bit faster
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        }),
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    document
      .querySelectorAll(".reveal-testimonial")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  const list = mode === "human" ? humanTestimonials : alienTestimonials;
  const main = list[0];
  const others = list.slice(1);

  return (
    <section
      className="testimonials-section reveal-testimonial"
      id="testimonials"
      style={{ "--i": 0 }}
    >
      <div className="testimonials-inner">
        {/* Header */}
        <header
          className="testimonials-header reveal-testimonial"
          style={{ "--i": 1 }}
        >
          <p className="testimonials-tag">Proof · Stories · Ripples</p>
          <h2>What happens when you stop being a spectator.</h2>
          <p>
            Not everyone finishes the system. The ones who do don’t sound like
            podcast comments — they sound like people who finally got tired of
            their own excuses.
          </p>
        </header>

        {/* Toggle buttons */}
        <div
          className="testimonial-toggle reveal-testimonial"
          style={{ "--i": 2 }}
        >
          <button
            type="button"
            className={`toggle-btn ${mode === "human" ? "active" : ""}`}
            onClick={() => setMode("human")}
          >
            Human Testimonials
          </button>
          <button
            type="button"
            className={`toggle-btn ${mode === "alien" ? "active" : ""}`}
            onClick={() => setMode("alien")}
          >
            Alien Testimonials
          </button>
        </div>

        {/* Disclaimer (changes by mode) */}
        <div
          className="testimonial-disclaimer reveal-testimonial"
          style={{ "--i": 3 }}
        >
          {mode === "human" ? (
            <p>
              These are real stories from real people who were sick of
              procrastinating their 20s away. No fairy-tale overnight success —
              just consistent, boring execution.
            </p>
          ) : (
            <p>
              ⚠️ <strong>Disclaimer:</strong> Alien testimonials are obviously
              fictional. They exist because life is allowed to be fun while you
              fix it. The system, the work and the results are very real.
            </p>
          )}
        </div>

        {/* Irregular grid layout */}
        <div
          className="testimonials-grid reveal-testimonial"
          style={{ "--i": 4 }}
        >
          {/* Main big card */}
          {main && (
            <article className="testimonial-card card-main">
              <div className="card-top-row">
                <div className="avatar-shell">
                  {/* Put <img src={main.image} /> later */}
                  <div className="avatar-placeholder">
                    <span>{main.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="identity">
                  <h3>{main.name}</h3>
                  <p className="role">
                    {main.age} · {main.role}
                  </p>
                </div>
                <div className="badge">
                  {mode === "human" ? "Verified human" : "Galactic client"}
                </div>
              </div>

              <h4 className="headline">{main.headline}</h4>
              <p className="quote">“{main.quote}”</p>
            </article>
          )}

          {/* Side cards */}
          {others.map((t, index) => (
            <article
              key={t.id}
              className={`testimonial-card card-side card-side-${index + 1}`}
            >
              <div className="card-top-row">
                <div className="avatar-shell small">
                  {/* Put <img src={t.image} /> later */}
                  <div className="avatar-placeholder">
                    <span>{t.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="identity">
                  <h3>{t.name}</h3>
                  <p className="role">
                    {t.age} · {t.role}
                  </p>
                </div>
              </div>

              <h4 className="headline">{t.headline}</h4>
              <p className="quote small">“{t.quote}”</p>
            </article>
          ))}
        </div>

        {/* Tiny note at bottom */}
        <p
          className="testimonials-footnote reveal-testimonial"
          style={{ "--i": 5 }}
        >
          Everyone starts in the “before” column. The question is whether you
          stay there for another year, or you give yourself systems that don’t
          let you slide back.
        </p>
      </div>
    <Divider />
    </section>
  );
}

export default Testimonials;
