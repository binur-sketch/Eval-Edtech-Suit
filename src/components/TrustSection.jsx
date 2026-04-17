import React from 'react';

const TrustSection = () => {
  const eduLogos = [
    '/assets/images/school/dps.webp',
    '/assets/images/university/BANARAS HINDU UNIVERSITY.png',
    '/assets/images/coaching/physics wallah.webp',
    '/assets/images/school/RPS International School.jpg',
    '/assets/images/university/Parul University.jpg',
    '/assets/images/coaching/aakash logo.png',
    '/assets/images/school/OASIS International School.jpg',
    '/assets/images/university/Jamia Millia Islamia.jpg',
    '/assets/images/coaching/career launcher.jpg',
    '/assets/images/university/Silver Oak University.png'
  ];

  const govLogos = [
    '/assets/images/government/National Cadet Corps.png',
    '/assets/images/government/Union Public Service Commission.jpg',
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
      background: 'white',
      borderTop: '1px solid var(--border)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '100%', background: 'linear-gradient(90deg, white, transparent)', zIndex: 2 }}></div>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '100%', background: 'linear-gradient(270deg, white, transparent)', zIndex: 2 }}></div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted-foreground)', marginBottom: 0 }}>
          Trusted by Elite Schools, Universities & Colleges
        </p>
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
            height: '70px',
            width: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img src={src} alt="Client Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted-foreground)', marginBottom: 0 }}>
          Trusted by Government Bodies & Segment Leaders
        </p>
      </div>

      <div className="marquee-track" style={{
        display: 'flex',
        gap: '4rem',
        animation: 'marquee 35s linear infinite reverse',
        width: 'max-content'
      }}>
        {[...govLogos, ...govLogos].map((src, i) => (
          <div key={`gov-${i}`} style={{
            height: '70px',
            width: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img src={src} alt="Client Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
