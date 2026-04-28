import React from 'react';

const CertificationsSection = () => {
  const certs = [
    { src: '/assets/images/cmmi logo.png', alt: 'CMMI Level 3' },
    { src: '/assets/images/iso9001.png', alt: 'ISO 9001' },
    { src: '/assets/images/iso14001.png', alt: 'ISO 14001' },
    { src: '/assets/images/msme.png', alt: 'MSME' },
    { src: '/assets/images/gem.png', alt: 'GeM India' }
  ];

  return (
    <section style={{
      background: 'var(--muted)',
      padding: '5rem 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', marginBottom: '0.75rem' }}>Compliance & Trust</p>
          <h3 style={{ fontSize: '2rem' }}>Awards & <span className="gradient-text">Certifications</span></h3>
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 'clamp(2rem, 5vw, 5rem)', 
          alignItems: 'center' 
        }}>
          {certs.map((cert, i) => (
            <div key={i} className="hover-lift" style={{
              height: 'clamp(60px, 8vw, 85px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.9,
              transition: 'all 0.3s ease'
            }}>
              <img
                src={cert.src}
                alt={cert.alt}
                style={{ maxHeight: '100%', maxWidth: '180px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
