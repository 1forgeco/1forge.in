"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./apps.module.css";

const scenarios = [
  { time: "08:14", title: "Settle into your day", accent: "#ff8f8a" },
  { time: "12:30", title: "Make room for a real lunch", accent: "#9ba9d9" },
  { time: "17:45", title: "Close the loops, softly", accent: "#88a58f" },
  { time: "21:08", title: "Leave some space for yourself", accent: "#d49a6d" },
];

const diaryEntries = [
  { quote: "I stop opening five different tools just to know what needs my attention. It feels almost suspiciously calm.", name: "Mira, studio owner", tilt: "softly-note-left" },
  { quote: "It gives our team the useful nudge without making everyone feel like they are being managed by a dashboard.", name: "Karan, operations lead", tilt: "softly-note-right" },
];

const faqs = [
  ["What kind of apps can 1forge build?", "From customer and staff apps to management systems and AI-enabled workflow tools. We shape the product around the real work your team and customers need to do."],
  ["Can an app feel on-brand without being overdesigned?", "Yes. We start with a clear purpose, then use a visual language that feels recognisably yours while staying easy and quick to use."],
  ["Do you help after launch?", "Absolutely. We can keep improving the experience, add new features, connect your existing tools, and make sure the app grows with your business."],
];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SoftlyPhone({ tone, className = "", centre = false }: { tone: "sage" | "lavender" | "peach"; className?: string; centre?: boolean }) {
  return <div className={`softly-phone softly-phone-${tone} ${className}`}>
    <div className="softly-phone-top"><span /> <i /></div>
    <div className="softly-phone-screen">
      <p>{centre ? "A small pause" : tone === "sage" ? "Your gentle list" : "Make space"}</p>
      <h3>{centre ? <>Breathe<br />with your day.</> : tone === "sage" ? "Things can wait." : "One thing at a time."}</h3>
      {centre ? <button type="button" className="softly-breathe-button">Breathe <span>↗</span></button> : <div className="softly-phone-card"><span>{tone === "sage" ? "04:30 pm" : "a note to self"}</span><b>{tone === "sage" ? "Make time to reset" : "Progress can be soft."}</b></div>}
      <div className="softly-phone-dots"><i /><i /><i /></div>
    </div>
  </div>;
}

export default function AppsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".softly-reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.14 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <main className={`${styles.root} softly-page`}>
    <div className="softly-grain" aria-hidden="true" />
    <nav className="softly-nav" aria-label="Primary navigation">
      <Link href="/" className="softly-brand"><span><i /></span>1forge</Link>
      <div className="softly-nav-links"><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/apps" aria-current="page">Apps</Link></div>
      <Link className="softly-nav-cta" href="/#cta">Start a project <Arrow /></Link>
    </nav>

    <section className="softly-hero">
      <div className="softly-blob softly-blob-coral" /><div className="softly-blob softly-blob-lavender" />
      <div className="softly-hero-copy softly-reveal is-visible">
        <p className="softly-eyebrow">1forge app experiences</p><h1>Useful technology,<br />made <em>human.</em></h1>
        <p className="softly-intro">We create grounded mobile experiences that help people make progress—without asking for more of their attention.</p>
        <div className="softly-actions"><Link href="/#cta" className="softly-primary-button">Build an app with us <Arrow /></Link><a href="#app-experience" className="softly-secondary-button">See the feeling <span>↓</span></a></div>
      </div>
    </section>

    <section className="softly-scenarios softly-reveal" aria-labelledby="scenario-heading">
      <div className="softly-section-heading"><p>01 / everyday flow</p><h2 id="scenario-heading">A little more room<br />in the day.</h2></div>
      <div className="softly-scroll" role="list">{scenarios.map((scenario) => <article role="listitem" className="softly-scenario" key={scenario.time} style={{ "--scenario-accent": scenario.accent } as React.CSSProperties}><time>{scenario.time}</time><h3>{scenario.title}</h3><span>↗</span></article>)}</div>
    </section>

    <section id="app-experience" className="softly-preview softly-reveal" aria-labelledby="preview-heading">
      <div className="softly-preview-copy"><p>02 / the experience</p><h2 id="preview-heading">Designed to feel<br /><em>lighter</em> in your hands.</h2><span>Every touchpoint is considered: a little less friction, a little more ease.</span></div>
      <div className="softly-phones" aria-label="Three example mobile app screens"><SoftlyPhone tone="sage" className="softly-phone-left" /><SoftlyPhone tone="peach" centre className="softly-phone-centre" /><SoftlyPhone tone="lavender" className="softly-phone-right" /></div>
    </section>

    <section className="softly-diaries softly-reveal" aria-labelledby="diary-heading">
      <div className="softly-section-heading softly-diaries-heading"><p>03 / words from the room</p><h2 id="diary-heading">What a little<br />calm can change.</h2></div>
      <div className="softly-diary-grid">{diaryEntries.map((entry) => <article className={`softly-diary ${entry.tilt}`} key={entry.name}><span className="softly-quote-mark">“</span><blockquote>{entry.quote}</blockquote><footer><i /> <span>{entry.name}</span></footer></article>)}</div>
    </section>

    <section className="softly-faq softly-reveal" aria-labelledby="faq-heading">
      <div className="softly-section-heading"><p>04 / no pressure, just answers</p><h2 id="faq-heading">A few things you<br />might be wondering.</h2></div>
      <div className="softly-faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <article className={`softly-faq-item ${isOpen ? "is-open" : ""}`} key={question}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{question}</span><i>+</i></button><div className="softly-faq-answer"><p>{answer}</p></div></article>; })}</div>
    </section>

    <section className="softly-waitlist softly-reveal" id="waitlist">
      <div className="softly-waitlist-blob one" /><div className="softly-waitlist-blob two" /><div className="softly-waitlist-icon"><i /></div>
      <p>Let’s make something useful</p><h2>Your next app can<br />feel <em>good</em> to use.</h2>
      <form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="app-email">Email address</label><input id="app-email" type="email" placeholder="Your email address" required /><button type="submit">Start a conversation <Arrow /></button></form><small>No newsletters, no noise. Just a thoughtful reply from our team.</small>
    </section>
  </main>;
}
