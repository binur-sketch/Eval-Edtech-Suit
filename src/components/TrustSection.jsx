import React from 'react';

const TrustSection = () => {
  const clients = [
    'FIITJEE', 'Aakash', 'IIT Delhi', 'NCERT', 'Amity', 'HERO MOTOCORP'
  ];

  return (
    <section style={{ padding: '4rem 0', background: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          fontSize: '0.875rem', 
          fontWeight: '800', 
          textTransform: 'uppercase', 
          color: 'var(--muted-foreground)', 
          letterSpacing: '0.1em',
          marginBottom: '3rem' 
        }}>
          Trusted by 5000+ Premier Institutions
        </p>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '4rem', 
          alignItems: 'center', 
          filter: 'grayscale(100%)',
          opacity: 0.6
        }}>
          {clients.map((c, i) => (
            <div key={i} style={{ 
              fontSize: '1.5rem', 
              fontWeight: '900', 
              color: 'var(--foreground)',
              userSelect: 'none'
            }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
