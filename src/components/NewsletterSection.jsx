import React from 'react';
import * as Icons from '@/components/LucideFix';

const NewsletterSection = () => {
  return (
    <section className="section-padding" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ 
          background: 'var(--muted)', 
          borderRadius: 'clamp(1.5rem, 3vw, 3rem)', 
          padding: 'clamp(2rem, 5vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
          boxShadow: 'none',
          border: '1px solid var(--border)'
        }} className="reveal">
          <div>
            <span className="badge">Stay Ahead</span>
            <h2>Get Expert Assessment <span className="gradient-text">Insights</span></h2>
            <p style={{ marginBottom: 0 }}>Join 2000+ educational leaders receiving our monthly briefing on evaluation trends and security protocols.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="Your professional email" 
              style={{ 
                flex: '1 1 200px',
                minWidth: 0,
                padding: '1rem 1.5rem', 
                borderRadius: '1rem', 
                border: '1px solid var(--border)',
                background: 'white',
                fontSize: '0.9375rem',
                width: '100%'
              }} 
            />
            <button className="btn btn-primary" style={{ flexShrink: 0 }}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
