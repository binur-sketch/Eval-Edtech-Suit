import React from 'react';

const ClientLogoMarquee = () => {
  const logos = [
    'IIT DELHI', 'HERO MOTOCORP', 'FIITJEE', 'AAKASH',
    'NCERT', 'AMITY UNIVERSITY', 'ALLEN CAREER', 'MANIPAL',
    'BITS PILANI', 'VIT UNIVERSITY', 'SYMBIOSIS', 'TATA CONSULTANCY'
  ];

  return (
    <section style={{ 
      background: 'white', 
      padding: '3rem 0', 
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '100%', background: 'linear-gradient(90deg, white, transparent)', zIndex: 2 }}></div>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '100%', background: 'linear-gradient(270deg, white, transparent)', zIndex: 2 }}></div>
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted-foreground)', marginBottom: 0 }}>
          Trusted by 5000+ leading institutions worldwide
        </p>
      </div>

      <div className="marquee-track" style={{
        display: 'flex',
        gap: '4rem',
        animation: 'marquee 30s linear infinite',
        width: 'max-content'
      }}>
        {[...logos, ...logos].map((name, i) => (
          <div key={i} style={{ 
            fontSize: '1.25rem', 
            fontWeight: '900', 
            color: '#d1d5db', 
            whiteSpace: 'nowrap',
            letterSpacing: '-0.025em',
            userSelect: 'none',
            flexShrink: 0
          }}>
            {name}
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

export default ClientLogoMarquee;
