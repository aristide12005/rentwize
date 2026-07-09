import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="welcome-v3">
      <header className="welcome-v3-header">
        <nav>
          <div className="logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3B7A57" strokeWidth="2" strokeLinecap="round">
              <circle cx="8" cy="8" r="4.5"/>
              <path d="M11 11l9 9"/>
              <path d="M16.5 15.5l2.5-2.5"/>
              <path d="M19 18l2-2"/>
            </svg>
            Rentwize
          </div>
          <div className="nav-links">
            <a href="#how" onClick={(e) => { e.preventDefault(); handleScroll('how'); }}>How it works</a>
            <a href="#trust" onClick={(e) => { e.preventDefault(); handleScroll('trust'); }}>Trust & Safety</a>
            <a href="#story" onClick={(e) => { e.preventDefault(); handleScroll('story'); }}>About</a>
          </div>
          <button className="nav-cta" onClick={() => navigate('/login')}>Get Started</button>
        </nav>
      </header>

      <section className="hero">

        <h1>List your room, <span className="accent">safely.</span></h1>
        <p>Find the next trusted student to take over your place — verified users, a simple process, complete peace of mind.</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => navigate('/login')}>Get Started Now</button>
          <button className="btn-secondary" onClick={() => handleScroll('how')}>See How It Works</button>
        </div>
      </section>

      <section className="section section-alt" id="how">
        <div className="section-head">
          <div className="eyebrow">Process</div>
          <h2>How Rentwize works</h2>
          <p>Three simple steps to pass on your keys.</p>
        </div>

        <div className="steps">
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-num">01</div>
            <h3>Post your room</h3>
            <p>Create a quick listing. We only accept verified student emails to keep the platform safe.</p>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <h3>We connect you</h3>
            <p>Interested students reach out securely. You choose who takes over your lease.</p>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <h3>Move out</h3>
            <p>Pass on the keys and move on to your next adventure with zero stress.</p>
          </div>
        </div>
      </section>

      <section className="section" id="trust">
        <div className="trust">
          <div className="trust-copy">
            <div className="eyebrow">Trust & Safety</div>
            <h2>Every student on Rentwize is verified — no exceptions.</h2>
            <p>We restrict access to university email addresses, so every listing and every message comes from someone who's actually enrolled.</p>
            <ul className="trust-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M8 12l3 3 6-6"/><circle cx="12" cy="12" r="9"/>
                </svg> 
                University email verification on every account
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M8 12l3 3 6-6"/><circle cx="12" cy="12" r="9"/>
                </svg> 
                Secure, in-platform messaging only
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M8 12l3 3 6-6"/><circle cx="12" cy="12" r="9"/>
                </svg> 
                Reported listings reviewed within 24 hours
              </li>
            </ul>
          </div>
          <div className="trust-visual">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" alt="Safety and Trust" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section section-alt" id="story">
        <div className="testimonial">
          <div className="avatar">A</div>
          <blockquote>"I built Rentwize to make student housing safe and simple. By restricting access to verified university emails, we've eliminated scams so you can confidently pass on your room."</blockquote>
          <div className="name">Aristide</div>
          <div className="role">Founder, Rentwize</div>
        </div>
      </section>

      <section className="section final-cta">
        <h2>Ready to pass on your keys?</h2>
        <p>Join the verified network of students subletting with confidence.</p>
        <button className="btn-primary" onClick={() => navigate('/login')}>Get Started Now</button>
      </section>

      <footer>
        © 2026 Rentwize. Built for students, by students.
      </footer>
    </div>
  );
};
