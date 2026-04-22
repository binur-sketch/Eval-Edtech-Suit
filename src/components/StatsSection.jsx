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
    <section className="section-padding" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="container">

        {/* Section Heading */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3.5rem'
        }}>
          <h2>
            Trusted by <span className="gradient-text">Institutions Worldwide</span>
          </h2>
          <p style={{
            color: 'var(--muted-foreground)',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}>
            Powering large-scale examinations with unmatched speed, accuracy, and reliability.
          </p>
        </div>
        
        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          {stats.map((item, idx) => (
            <div key={idx} className="card hover-lift" style={{ textAlign: 'center', padding: '2.5rem' }}>
              {/* Icon */}
              <div style={{ 
                width: '56px', height: '56px', background: 'var(--primary-light)', 
                color: 'var(--primary)', borderRadius: '1rem', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' 
              }}>
                {item.icon}
              </div>

              {/* Value */}
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '0.25rem' }}>
                {item.val}
              </div>

              {/* Label */}
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                {item.label}
              </div>

              {/* Subtext */}
              <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;