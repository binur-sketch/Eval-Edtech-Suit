import * as Icons from '@/components/LucideFix';
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'eVAL transformed our internal test bank from an Excel sheet to an AI-powered pedagogical engine. The accuracy is unmatched.',
      author: 'Dr. Rajesh Kumar',
      role: 'Senior Faculty',
      org: 'IIT Delhi',
      rating: 5
    },
    {
      quote: 'The security proctoring system is robust—we saw a 95% decrease in suspicious activity flags across all our competitive exam centers.',
      author: 'Priya Mehta',
      role: 'Assessment Head',
      org: 'FIITJEE',
      rating: 5
    },
    {
      quote: 'Standardizing our OMR sheets across all rural centers was only possible with eVAL\'s hardware-independent software. A game-changer for public education.',
      author: 'Anand Sharma',
      role: 'Project Manager',
      org: 'NCERT',
      rating: 5
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--muted)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="badge">Client Testimonials</span>
          <h2>What Institutions <span className="gradient-text">Say About Us</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Real feedback from real institutional leaders who trust eVAL for their most critical evaluations.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{
              padding: '3.5rem',
              borderRadius: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'white'
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '2rem' }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Icons.Star key={j} size={18} style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                ))}
              </div>

              <Icons.Quote size={36} style={{ color: 'var(--primary)', opacity: '0.15', marginBottom: '1rem' }} />
              <p style={{ fontStyle: 'italic', marginBottom: '2.5rem', fontSize: '1.0625rem', lineHeight: '1.75', flex: 1 }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '900', fontSize: '1.125rem'
                }}>{t.author.charAt(0)}</div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--foreground)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{t.role}, {t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
