import * as Icons from '@/components/LucideFix';
import React from 'react';

const services = [
  {
    title: 'OMR Sheets Printing',
    desc: 'Institutional-grade OMR/ICR sheets printing, customised to precision. Ideal for high-stakes examinations, surveys, and large-scale feedback collection for Govt. and Private organisations.',
    img: '/assets/images/omr_printing.png',
    tag: 'Most Popular'
  },
  {
    title: 'OMR Sheets Scanning',
    desc: 'End-to-end Pre and Post-examination result processing. We leverage advanced OMR/ICR/OCR tools for rapid and accurate data capture from Medical, Engineering, and General entrance exams.',
    img: '/assets/images/omr_scanning.png',
    tag: 'High Speed'
  },
  {
    title: 'OMR Sheets Designing',
    desc: 'Optimized form architecture designed for maximum scannability. We account for every data point, ensuring your institutional layouts are perfectly aligned for digital evaluation systems.',
    img: '/assets/images/omr_design.png',
    tag: 'Custom Design'
  },
  {
    title: 'Scanner Services & AMC',
    desc: 'Comprehensive maintenance and technical support for all OMR hardware. From consumable supplies and spare parts to regular servicing, we ensure your scanning infrastructure never fails.',
    img: null,
    tag: 'Support'
  }
];

const ServicesSection = () => {
  return (
    <section style={{
      padding: '8rem 0',
      background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute', top: '5%', left: '-5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(229,57,53,0.06) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-3%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(229,57,53,0.04) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 5rem' }}>
          <span className="badge">Our Services</span>
          <h2 style={{ marginBottom: '1.5rem' }}>
            End-to-End <span className="gradient-text">Examination</span> Services
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
            Beyond software, we provide mission-critical logistical services for examination boards, recruitment agencies, and academic institutions.
          </p>
        </div>

        {/* Services Grid — 2x2 vertical cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem'
        }}>
          {services.map((s, idx) => (
            <div key={idx} style={{
              background: '#FFFFFF',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid #EEEEEE',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column'
            }}
            className="card-hover"
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#EEEEEE';
            }}
            >
              {/* Image Area */}
              <div style={{
                width: '100%',
                height: '220px',
                overflow: 'hidden',
                position: 'relative',
                background: s.img ? '#f0f0f0' : 'linear-gradient(135deg, var(--primary-light) 0%, #FFF 100%)'
              }}>
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    <Icons.Settings size={72} strokeWidth={1} />
                  </div>
                )}

                {/* Floating Tag */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.6875rem',
                  fontWeight: '800',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(229,57,53,0.15)'
                }}>
                  {s.tag}
                </div>
              </div>

              {/* Content Area */}
              <div style={{
                padding: '2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  marginBottom: '1rem',
                  color: 'var(--secondary)'
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {s.desc}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--primary)',
                  fontSize: '0.8125rem',
                  fontWeight: '800'
                }}>
                  <Icons.ArrowRight size={16} />
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
