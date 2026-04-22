import React from 'react';

const TrustSection = () => {
  const eduLogos = [
    '/assets/images/school/dps.webp',
    '/assets/images/university/BANARAS HINDU UNIVERSITY.png',
    '/assets/images/coaching/physics wallah.webp',
    '/assets/images/school/RPS International School.png',
    '/assets/images/university/Parul University.png',
    '/assets/images/coaching/aakash logo.png',
    '/assets/images/school/OASIS International School.png',
    '/assets/images/university/Jamia Millia Islamia.png',
    '/assets/images/coaching/career launcher.png',
    '/assets/images/university/Silver Oak University.png'
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
    <section className="section-padding" style={{
      background: 'var(--muted)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '100%', zIndex: 2 }}></div>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '100%', zIndex: 2 }}></div>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="badge">Institutional Trust</span>
        <h2>
          Trusted by <span className="gradient-text">Elite Schools, Universities & Colleges</span>
        </h2>
      </div>

      <div className="marquee-track" style={{
        display: 'flex',
        gap: '4rem',
        animation: 'marquee 30s linear infinite',
        width: 'max-content',
        marginBottom: '3.5rem'
      }}>
        {[...eduLogos, ...eduLogos].map((src, i) => (
          <div key={`edu-${i}`} style={{
            height: '100px',
            width: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img src={src} alt="Client Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>
          Trusted by <span className="gradient-text">Government Bodies & Segment Leaders</span>
        </h2>
      </div>

      <div className="marquee-track" style={{
        display: 'flex',
        gap: '4rem',
        animation: 'marquee 35s linear infinite reverse',
        width: 'max-content'
      }}>
        {[...govLogos, ...govLogos].map((src, i) => (
          <div key={`gov-${i}`} style={{
            height: '100px',
            width: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img src={src} alt="Client Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section >
  );
};

export default TrustSection;
