import React from 'react';
import Reveal from './common/Reveal';

const AwardsSection = () => {
  const awards = [
    { 
      src: '/assets/images/award_best_edtech.png', 
      title: 'Best EdTech Solution',
      desc: 'Annual Innovation Excellence'
    },
    { 
      src: '/assets/images/award_innovation.png', 
      title: 'Innovation in Assessment',
      desc: 'Tech Leadership Summit'
    },
    { 
      src: '/assets/images/award_excellence.png', 
      title: 'Excellence in Tech',
      desc: 'Global Education Awards'
    },
    { 
      src: '/assets/images/award_top_omr.png', 
      title: 'Top OMR Provider',
      desc: 'Market Leadership Recognition'
    },
    { 
      src: '/assets/images/award_trusted.png', 
      title: 'Trusted Institutional Partner',
      desc: 'Academic Partnership Excellence'
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
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Awards & <span className="gradient-text">Recognitions</span>
            </h3>
            <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
              Our commitment to excellence has been recognized by leading industry bodies and educational institutions.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {awards.map((award, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <div style={{ textAlign: 'center' }}>
                <div className="hover-lift" style={{
                  background: 'var(--muted)',
                  borderRadius: '2rem',
                  padding: '2.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '1',
                  border: '1px solid var(--border)',
                  transition: 'all 0.4s ease'
                }}>
                  <img
                    src={award.src}
                    alt={award.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
                    }}
                  />
                </div>
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '800', 
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)'
                }}>
                  {award.title}
                </h4>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--muted-foreground)',
                  fontWeight: '600'
                }}>
                  {award.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
