// src/pages/Home/Blog-Section/Blog-Section.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog-Section.css";
import SevenPillarsImg from "../../../assets/Home/Blog-Section/SevenPillars.png";
import Divider from '../../../ui/Divider/Divider'

const blogPosts = [
  {
    id: 1,
    tag: "7 Pillars · Deep Dive",
    title: "Why you can’t hack life without all 7 pillars",
    date: "December 6th, 2025",
    readTime: "14 min read",
    excerpt:
      "Everyone online is telling you to grind, cut off dating and binge ‘mindset’ clips. Nobody tells you that your diet, body, mind and relationships are quietly deciding whether you ever become that millionaire version of you.",
    href: "/blog/seven-pillars-perfektionist",
    status: "live",
    image: SevenPillarsImg,        // ✅ only first post has an image
  },
  {
    id: 2,
    tag: "Coming soon",
    title: "How to build a monk-level focus in a noisy world",
    date: "January 2026",
    readTime: "Coming soon",
    excerpt:
      "A practical breakdown of how to protect your attention like a billionaire CEO, even if you’re a broke student in a noisy dorm.",
    href: "#",
    status: "soon",
    image: null,
  },
  {
    id: 3,
    tag: "Coming soon",
    title: "Why most ‘grind’ advice quietly destroys your 20s",
    date: "January 2026",
    readTime: "Coming soon",
    excerpt:
      "Where the hustle culture is right, where it’s delusional, and how to actually stack skills, money and memories at the same time.",
    href: "#",
    status: "soon",
    image: null,
  },
  {
    id: 4,
    tag: "Coming soon",
    title: "The psychology of choosing the wrong partner (again and again)",
    date: "February 2026",
    readTime: "Coming soon",
    excerpt:
      "Patterns, attachment styles and how to finally stop dating people who drag your life backwards.",
    href: "#",
    status: "soon",
    image: null,
  },
  {
    id: 5,
    tag: "Coming soon",
    title: "Designing a life system that doesn’t collapse when you’re tired",
    date: "February 2026",
    readTime: "Coming soon",
    excerpt:
      "How to build routines and accountability structures that work even on your worst, laziest days.",
    href: "#",
    status: "soon",
    image: null,
  },
];

function BlogSection() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // ---- Slider helpers ----
  const scrollToIndex = (idx) => {
    const el = trackRef.current;
    if (!el) return;

    const clamped = Math.max(0, Math.min(idx, blogPosts.length - 1));
    const targetEl = el.children[clamped + 1]; // +1 = skip left cap
    if (!targetEl) return;

    const targetLeft = targetEl.offsetLeft;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  const goNext = () => scrollToIndex(active + 1);
  const goPrev = () => scrollToIndex(active - 1);

  // Determine which card is closest to left edge
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const getNearestIndex = () => {
      const children = [...el.children].slice(1, -1); // exclude caps
      let best = 0;
      let min = Infinity;
      const sc = el.scrollLeft;
      children.forEach((ch, i) => {
        const d = Math.abs(ch.offsetLeft - sc);
        if (d < min) {
          min = d;
          best = i;
        }
      });
      return best;
    };

    const onScroll = () => setActive(getNearestIndex());
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Pointer drag (swipe) support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onDown = (e) => {
      isDown = true;
      startX = e.clientX;
      scrollStart = el.scrollLeft;
      el.classList.add("dragging");
      el.setPointerCapture?.(e.pointerId);
    };

    const onMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = scrollStart - dx;
    };

    const onUp = (e) => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("dragging");
      el.releasePointerCapture?.(e.pointerId);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  // Fade-in reveal like Infos
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        }),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll(".reveal-blog").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const atStart = active === 0;
  const atEnd = active === blogPosts.length - 1;

  return (
    <section
      className="home-blog-section reveal-blog"
      id="blog-preview"
      style={{ "--i": 0 }}
    >
      <div className="blog-inner">
        {/* Header */}
        <header className="blog-header reveal-blog" style={{ "--i": 1 }}>
          <div className="blog-eyebrow">
            <span className="blog-pill">Perfektionist Blog</span>
          </div>
          <h2>The long-form truth behind the 7–pillar life.</h2>
          <p>
            This isn’t “10 tips for success” fluff. These are field notes for
            people who are tired of clips and finally ready to read, think and
            change.
          </p>
        </header>

        {/* Slider */}
        <div className="blog-slider-wrapper reveal-blog" style={{ "--i": 2 }}>
          <button
            type="button"
            className={`blog-nav left ${atStart ? "disabled" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              if (!atStart) goPrev();
            }}
            aria-disabled={atStart}
          >
            ‹
          </button>

          <div className="blog-track" ref={trackRef}>
            {/* left cap so next card edge never peeks */}
            <div className="blog-cap blog-cap-left" aria-hidden="true" />

            {blogPosts.map((post, i) => (
              <article
                key={post.id}
                className="blog-card reveal-blog"
                style={{ "--i": i + 3 }}
              >
                <div
                  className={
                    "blog-card-image" + (!post.image ? " placeholder" : "")
                  }
                >
                  {post.image ? (
                    <img src={post.image} alt={post.title} />
                  ) : (
                    <span>IMAGE PLACEHOLDER</span>
                  )}
                </div>

                <div className="blog-card-content">
                  <p className="blog-tag">{post.tag}</p>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>

                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {post.status === "live" ? (
                    <Link to={post.href} className="blog-readmore">
                      Read more
                    </Link>
                  ) : (
                    <button className="blog-readmore soon" disabled>
                      Coming soon
                    </button>
                  )}
                </div>
              </article>
            ))}

            {/* right cap */}
            <div className="blog-cap blog-cap-right" aria-hidden="true" />
          </div>

          <button
            type="button"
            className={`blog-nav right ${atEnd ? "disabled" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              if (!atEnd) goNext();
            }}
            aria-disabled={atEnd}
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="blog-dots reveal-blog" style={{ "--i": 3 }}>
          {blogPosts.map((post, index) => (
            <span
              key={post.id}
              className={`blog-dot ${index === active ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    <Divider />
  </section>
  );
}

export default BlogSection;
