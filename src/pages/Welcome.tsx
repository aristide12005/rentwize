import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRightLeft, FileCheck2, EyeOff } from 'lucide-react';

export const Welcome: React.FC = () => {
  return (
    <div className="welcome-page" style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      {/* 1. Global Navigation Bar */}
      <nav style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100, 
        backgroundColor: 'rgba(234, 249, 231, 0.9)', 
        backdropFilter: 'blur(12px)', 
        padding: '16px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid rgba(1, 50, 55, 0.05)' 
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#013237' }}>RentWise</div>
        <Link to="/login" className="btn btn-primary">University Login</Link>
      </nav>

      {/* 2. The Hero Section (Split Layout) */}
      <section className="welcome-hero-split">
        <div className="hero-content">
          <h1 style={{ color: '#013237', fontWeight: 700 }}>
            The Smart Way to Secure Your Off-Campus Lifestyle.
          </h1>
          <p style={{ color: '#013237', opacity: 0.8, lineHeight: 1.6 }}>
            Join the verified network where incoming students and graduating seniors securely hand over leases, furniture, and local knowledge.
          </p>
          <Link to="/signup" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
            Unlock Campus Network
          </Link>
        </div>
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
            alt="Student on campus holding keys" 
          />
        </div>
      </section>

      {/* 3. The Video Section */}
      <section style={{ backgroundColor: '#C0E6BA', padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#013237', fontSize: '2.5rem', marginBottom: '60px', fontWeight: 700 }}>
            See How The Handover Works.
          </h2>
          
          <div className="video-container-wrapper">
            {/* Floating UI Elements */}
            <div className="float-card float-left">
              <ShieldCheck size={20} color="#4CA771" />
              <span>100% Verified</span>
            </div>
            <div className="float-card float-right">
              <EyeOff size={20} color="#4CA771" />
              <span>Zero Public Listings</span>
            </div>

            <div className="video-player">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&showinfo=0&rel=0&autoplay=0&loop=1&mute=1" 
                title="RentWise Experience Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Three Pillars */}
      <section style={{ padding: '100px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            {/* Step 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ color: '#013237', fontSize: '1.5rem', marginBottom: '16px' }}>Exclusive Verification</h3>
              <p style={{ color: '#013237', opacity: 0.8, lineHeight: 1.6 }}>
                Every user is verified through our partner universities. No strangers, no public access, no scams.
              </p>
            </div>

            {/* Step 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ArrowRightLeft size={32} />
              </div>
              <h3 style={{ color: '#013237', fontSize: '1.5rem', marginBottom: '16px' }}>Peer-to-Peer Handovers</h3>
              <p style={{ color: '#013237', opacity: 0.8, lineHeight: 1.6 }}>
                Graduating soon? List your room and sell your furniture directly to incoming students before they arrive.
              </p>
            </div>

            {/* Step 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FileCheck2 size={32} />
              </div>
              <h3 style={{ color: '#013237', fontSize: '1.5rem', marginBottom: '16px' }}>Institutional Security</h3>
              <p style={{ color: '#013237', opacity: 0.8, lineHeight: 1.6 }}>
                Digital condition reports and standardized contracts ensure your deposit and agreements are protected and legally binding.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The Trust & Partnership Footer */}
      <footer style={{ backgroundColor: '#013237', padding: '60px 0 30px', overflow: 'hidden' }}>
        
        {/* Trust Banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', paddingLeft: '40px', marginBottom: '60px' }}>
          <span style={{ color: '#C0E6BA', fontSize: '1.125rem', fontWeight: 500, whiteSpace: 'nowrap', zIndex: 2 }}>
            Trusted by students from:
          </span>
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="marquee-logo">Groupe ISM</span>
              <span className="marquee-logo">Sup de Co</span>
              <span className="marquee-logo">BEM Dakar</span>
              <span className="marquee-logo">UCAD</span>
              <span className="marquee-logo">AFI L'UE</span>
              <span className="marquee-logo">IAM</span>
              {/* Duplicate for seamless infinite scroll */}
              <span className="marquee-logo">Groupe ISM</span>
              <span className="marquee-logo">Sup de Co</span>
              <span className="marquee-logo">BEM Dakar</span>
              <span className="marquee-logo">UCAD</span>
              <span className="marquee-logo">AFI L'UE</span>
              <span className="marquee-logo">IAM</span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 40px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>RentWise</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Terms of Service</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Contact Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
