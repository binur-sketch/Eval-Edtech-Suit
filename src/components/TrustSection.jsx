import React from 'react';

const TrustSection = () => {
  const eduLogos = [
    // Schools
    '/assets/images/school/dps.png',
    '/assets/images/school/RPS International School.png',
    '/assets/images/school/OASIS International School.png',
    '/assets/images/school/SURAJ SCHOOL.png',
    '/assets/images/school/St Francis De Sales Sr Sec School.webp',
    // Universities
    '/assets/images/university/BANARAS HINDU UNIVERSITY.png',
    '/assets/images/university/Parul University.png',
    '/assets/images/university/Jamia Millia Islamia.png',
    '/assets/images/university/Silver Oak University.png',
    '/assets/images/university/ADANI UNIVERSITY.png',
    // Colleges & Institutes
    '/assets/images/coaching/physics wallah.webp',
    '/assets/images/coaching/aakash logo.png',
    '/assets/images/coaching/career launcher.png',
    '/assets/images/coaching/Resonance.png',
    '/assets/images/school/ICFAI Business School.png'
  ];

  const govLogos = [
    '/assets/images/government/National Cadet Corps.png',
    '/assets/images/government/Union Public Service Commission.png',
    '/assets/images/government/AIIMS.svg',
    '/assets/images/government/IIT Goa.png',
    '/assets/images/government/NIT Goa.png',
    '/assets/images/government/Indian Railway.png',
    '/assets/images/government/QUALITY COUNCIL OF INDIA.png',
    '/assets/images/government/Council of Scientific and Industrial Research.png',
    '/assets/images/government/Maulana Azad Medical College.png'
  ];

  return (
    <section className="section-padding trust-section" style={{
      background: 'var(--muted)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Fade edges */}
      <div className="trust-fade-left" style={{ position: 'absolute', top: 0, left: 0, width: '15%', height: '100%', zIndex: 2, background: 'linear-gradient(to right, var(--muted), transparent)', pointerEvents: 'none' }}></div>
      <div className="trust-fade-right" style={{ position: 'absolute', top: 0, right: 0, width: '15%', height: '100%', zIndex: 2, background: 'linear-gradient(to left, var(--muted), transparent)', pointerEvents: 'none' }}></div>

      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="badge">Institutional Trust</span>
        <h2 style={{ maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Trusted by <span className="gradient-text">Elite Schools, Universities & Colleges</span>
        </h2>
      </div>

      <div className="marquee-wrapper" style={{ overflow: 'hidden', width: '100%', marginBottom: '3.5rem' }}>
        <div className="marquee-track" style={{
          display: 'flex',
          gap: 'clamp(2rem, 5vw, 4rem)',
          animation: 'marquee 30s linear infinite',
          width: 'max-content'
        }}>
          {[...eduLogos, ...eduLogos].map((src, i) => (
            <div key={`edu-${i}`} className="trust-logo-item" style={{
              height: 'clamp(60px, 10vw, 100px)',
              width: 'clamp(120px, 20vw, 180px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <img src={src} alt="Client Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.8 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>
          Trusted by <span className="gradient-text">Government Bodies & Segment Leaders</span>
        </h2>
      </div>

      <div className="marquee-wrapper" style={{ overflow: 'hidden', width: '100%' }}>
        <div className="marquee-track" style={{
          display: 'flex',
          gap: 'clamp(2rem, 5vw, 4rem)',
          animation: 'marquee 35s linear infinite reverse',
          width: 'max-content'
        }}>
          {[...govLogos, ...govLogos].map((src, i) => (
            <div key={`gov-${i}`} className="trust-logo-item" style={{
              height: 'clamp(60px, 10vw, 100px)',
              width: 'clamp(120px, 20vw, 180px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <img src={src} alt="Client Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.8 }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .trust-section {
            padding: 4rem 0;
          }
          .trust-fade-left, .trust-fade-right {
            width: 10%;
          }
        }
      `}</style>
    </section >
  );
};

export default TrustSection;
