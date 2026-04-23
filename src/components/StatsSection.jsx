import React from 'react';
import * as Icons from '@/components/LucideFix';

const StatsSection = () => {
  const stats = [
    {
      label: 'Academic Institutions',
      val: '5000+',
      sub: 'Global Partners',
      icon: <Icons.School size={26} />
    },
    {
      label: 'Evaluation Speed',
      val: '1000K+',
      sub: 'Sheets / Day',
      icon: <Icons.Zap size={26} />
    },
    {
      label: 'System Accuracy',
      val: '100%',
      sub: 'Zero-Error Logic',
      icon: <Icons.CheckCircle size={26} />
    },
    {
      label: 'Student Impact',
      val: '10M+',
      sub: 'Annual Candidates',
      icon: <Icons.Users size={26} />
    }
  ];

  return (
    <section
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">

        {/* Heading */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{ marginBottom: '0.75rem' }}>
            Trusted by <span className="gradient-text">Institutions Worldwide</span>
          </h2>

          <p style={{
            color: 'var(--muted-foreground)',
            maxWidth: '640px',
            margin: '0 auto',
            fontSize: '1rem'
          }}>
            Powering large-scale examinations with unmatched speed, accuracy, and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '2.5rem 2rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'all 0.35s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '1rem',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 6px 20px rgba(14,165,164,0.15)'
              }}>
                {item.icon}
              </div>

              {/* Value */}
              <div style={{
                fontSize: '2.75rem',
                fontWeight: '900',
                color: 'var(--secondary)',
                lineHeight: '1'
              }}>
                {item.val}
              </div>

              {/* Divider */}
              <div style={{
                width: '40px',
                height: '3px',
                background: 'var(--primary)',
                margin: '0.75rem auto 1rem',
                borderRadius: '10px'
              }} />

              {/* Label */}
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '800',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.4rem'
              }}>
                {item.label}
              </div>

              {/* Subtext */}
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--muted-foreground)'
              }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(14,165,164,0.12), transparent 70%)',
        zIndex: 0
      }} />

    </section>
  );
};

export default StatsSection;