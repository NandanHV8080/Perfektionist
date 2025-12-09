// src/pages/FAQ/FAQ.jsx
import React, { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Divider from '../../../ui/Divider/Divider'

const faqs = [
  {
    question: "Who is Perfektionist actually for?",
    answer:
      "Perfektionist is for guys who know they’re underperforming and are tired of half-assing their potential. You’ve tried YouTube, podcasts, maybe a few “systems”, but you keep slipping. If you’re ready to be called out, tracked, and pushed across all 7 pillars instead of just “grinding blindly”, this is for you.",
  },
  {
    question: "What’s the difference between Initiate, Titan and Conqueror?",
    answer:
      "Initiate is the full 7-pillar cheatbook for self-starters who want the system and will execute alone. Titan adds a 1:1 deep-dive call, custom action plan and templates so we rebuild your routines with you. Conqueror includes all of that plus weekly accountability calls, 24/7 WhatsApp support, daily reminders and progress reviews so you can’t hide from your goals",
  },
  {
    question: "Is Perfektionist just another motivation page?",
    answer:
      "No. If you want wallpapers and quotes, Instagram has you covered. Perfektionist exists to force you into action: real plans, real check-ins, real consequences when you vanish. Less dopamine, more discipline.",
  },
  {
    question: 'Do I need to be "broken" to start?',
    answer:
      "You just need to be honest. Maybe you’re not a mess, but you know you’re underperforming your potential by 60–70%. That gap between who you are and who you could be is exactly where we work.",
  },
  {
    question: "Will you tell me to cut off dating and grind for 5 years?",
    answer:
      "No. That advice sounds hardcore but it quietly destroys your social skills and emotional health. We help you build a life where your dating, friendships and career all support each other instead of competing for attention.",
  },
  {
    question: "What if I’m already watching self-improvement content every day?",
    answer:
      "Perfect. That means your brain already wants more. The problem is you’re stuck in ‘content consumption mode’. We’ll convert that energy into a daily execution plan with someone actually checking whether you did the work.",
  },
  {
    question: "Can Perfektionist replace therapy or a medical professional?",
    answer:
      "No. We’re not doctors, therapists or psychiatrists. We’re here for structure, accountability and life systems. If you’re dealing with serious mental health issues, talk to a qualified professional first — and then use Perfektionist as an execution layer on top.",
  },
];

function FAQPage() {
  // Start with everything closed like a typical FAQ
  const [openIndex, setOpenIndex] = useState(-1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    console.log("FAQ contact form data:", form);
  };

  return (
    <section
      className="faq-page reveal-faq"
      id="faq"
      style={{ "--i": 0 }}
    >
      <div className="faq-inner">
        {/* Header */}
        <header
          className="faq-header reveal-faq"
          style={{ "--i": 1 }}
        >
          <p className="faq-tag">Questions · Doubts · Edge Cases</p>
          <h1>Still not sure if this is for you?</h1>
          <p>
            Read the answers on the right. If your brain is still wrestling
            with a specific situation, send it on the left. We’ll treat it like
            a real person’s problem, not a generic comment.
          </p>
        </header>

        {/* Two-column layout: left contact, right FAQ */}
        <div
          className="faq-grid reveal-faq"
          style={{ "--i": 2 }}
        >
          {/* CONTACT PANEL – LEFT */}
          <aside className="faq-contact-panel">
            <h2>Ask your personal question</h2>
            <p className="contact-subtext">
              Tell us where you’re stuck — studies, business, habits,
              relationships, or all of the above. Short, honest and specific is
              best.
            </p>

            <form className="faq-form" onSubmit={handleSubmit}>
              <div className="field-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="message">Describe your situation</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Be brutally honest. The more real you are, the more useful our reply can be."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="faq-submit-btn">
                Send question
              </button>

              {submitted && (
                <p className="form-note success">
                  Got it. Your question is saved on our side. Once the backend
                  is connected, this will send straight to the Perfektionist
                  team.
                </p>
              )}

              <p className="form-note">
                We’re not crisis support. If you’re in a serious mental or
                physical emergency, contact a local professional or emergency
                service first.
              </p>
            </form>
          </aside>

          {/* FAQ ACCORDION – RIGHT */}
          <section className="faq-accordion">
            <h2>Frequently asked questions</h2>
            <p className="accordion-intro">
              Start here before overthinking it. If your exact scenario isn’t
              covered, that’s what the form is for.
            </p>

            <div className="faq-list">
              {faqs.map((item, index) => {
                const open = openIndex === index;
                return (
                  <article
                    key={item.question}
                    className={
                      "faq-item reveal-faq" + (open ? " open" : "")
                    }
                    style={{ "--i": 3 + index }}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => handleToggle(index)}
                      aria-expanded={open}
                    >
                      <span>{item.question}</span>
                      <span className="icon">
                        {open ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>

                    {/* Always render, animate via CSS */}
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    <Divider />
  </section>
  );
}

export default FAQPage;
