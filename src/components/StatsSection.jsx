import React from 'react';
import * as Icons from '@/components/LucideFix';

const StatsSection = () => {
  const stats = [
    { label: 'Academic Institutions', val: '5000+', sub: 'Global Partners', icon: <Icons.School size={32} /> },
    { label: 'Evaluation Speed', val: '1000K+', sub: 'Sheets / Day', icon: <Icons.Zap size={32} /> },
    { label: 'System Accuracy', val: '100%', sub: 'Zero-Error Logic', icon: <Icons.CheckCircle size={32} /> },
    { label: 'Student Impact', val: '10M+', sub: 'Annual Candidates', icon: <Icons.Users size={32} /> }
  ];

  return (
    <section style={{ 
      background: 'white', 
      padding: '4rem 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
          gap: '2rem' 
        }}>
          {stats.map((item, idx) => (
            <div key={idx} className="reveal" style={{ 
              textAlign: 'center', 
              padding: '2.5rem',
              borderRadius: '2rem',
              background: idx % 2 === 0 ? 'var(--muted)' : 'white',
              border: '1px solid var(--border)',
              transition: 'var(--transition)'
            }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '0.25rem' }}>{item.val}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{item.label}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
