import * as Icons from '@/components/LucideFix';
import React from 'react';
import SectionHeader from './common/SectionHeader';


const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The software and scanner performed excellently during our examination process. The system functioned smoothly and efficiently, and the support provided by the team is truly commendable and highly appreciated.",
      author: 'Abhishek Dwivedi',
      role: 'Smt. D G Agrawal Memorial Sr. Sec. School',
      org: 'Smt. D G Agrawal Memorial Senior Secondary School, Chinchpada, Nandurbar Maharashtra ',
      rating: 5
    },
    {
      quote: "The adoption of eVal has significantly enhanced the efficiency and accuracy of our evaluation process. It has streamlined our workflows and reduced manual effort considerably for recruitment and admissions.",
      author: 'Er. S Govind Singh',
      role: 'System Analyst',
      org: 'System Analyst, Central Agricultural University, Imphal, Manipur',
      rating: 5
    },
    {
      quote: "OMR scanner and evaluation software have been purchased, installed, and are working properly. The system is adequate for examination and evaluation purposes.",
      author: 'Little Flower SCH',
      role: 'School Administration',
      org: 'Madhupuram Walterganj Basti R.O. Allahabad',
      rating: 5
    },
    {
      quote: "Hi, we have been using this software for 4 years. It is good product accuracy is also good technical service is also good.",
      author: 'Pace Shimoga',
      role: 'Institution Partner',
      org: 'Shimoga',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--muted)' }}>


      <div className="container">
        <SectionHeader
          badge="Client Testimonials"
          title={<>What Institutions <span className="gradient-text">Say About Us</span></>}
          text="Real feedback from real institutional leaders who trust eVAL for their most critical evaluations."
        />


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{
              padding: '1.5rem',
              borderRadius: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'white',
              height: '100%'
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Icons.Star key={j} size={14} style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                ))}
              </div>

              <Icons.Quote size={24} style={{ color: 'var(--primary)', opacity: '0.15', marginBottom: '0.75rem' }} />
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.9375rem', lineHeight: '1.6', flex: 1 }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'var(--primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '900', fontSize: '0.875rem', flexShrink: 0
                }}>{t.author.charAt(0)}</div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: '1.2' }}>{t.author}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', lineHeight: '1.2' }}>{t.org}</div>
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
