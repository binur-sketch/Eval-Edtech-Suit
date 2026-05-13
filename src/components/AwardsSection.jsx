import React from 'react';
import Reveal from './common/Reveal';

const AwardsSection = () => {
  const awards = [
    {
      src: '/assets/images/award_best_edtech.png',
      name: 'New Normal Award',
      desc: 'Partner Recognition'
    },
    {
      src: '/assets/images/award_innovation.png',
      name: 'Amar Ujala',
      desc: 'Leading Technology Company in Education Domain'
    },
    {
      src: '/assets/images/award_excellence.png',
      name: 'Deccan College Pune',
      desc: 'Appreciation for development of Virasat'
    },
    {
      src: '/assets/images/award_top_omr.png',
      name: 'EGN- Winner',
      desc: 'Excellence in Education Technology'
    },
    {
      src: '/assets/images/award_trusted.png',
      name: 'New Normal Award',
      desc: 'Partner Excellence'
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Reveal>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--primary)',
              marginBottom: '0.75rem'
            }}>
              Recognition
            </p>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Awards & <span className="gradient-text">Recognitions</span>
            </h3>
            <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
              Our commitment to excellence has been recognized by leading industry bodies and educational institutions.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch'
        }} className="awards-grid">
          {awards.map((award, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <div className="hover-lift" style={{ 
                textAlign: 'center', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'white',
                padding: '1.25rem',
                borderRadius: '2rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}>
                <div style={{
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '1.2',
                  padding: '0'
                }}>
                  <img
                    src={award.src}
                    alt={award.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <h4 style={{
                  fontSize: '0.875rem',
                  fontWeight: '800',
                  marginBottom: '0.4rem',
                  color: 'var(--secondary)',
                  lineHeight: '1.3'
                }}>
                  {award.name}
                </h4>
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--muted-foreground)', 
                  lineHeight: '1.4',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {award.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .awards-grid {
              grid-template-columns: repeat(5, 1fr) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AwardsSection;
