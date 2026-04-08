import React from 'react';
import * as Icons from '@/components/LucideFix';

const NewsletterSection = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ 
          background: 'white', 
          borderRadius: '3rem', 
          padding: '5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border)'
        }} className="reveal">
          <div>
            <span className="badge">Stay Ahead</span>
            <h2>Get Expert Assessment <span className="gradient-text">Insights</span></h2>
            <p style={{ marginBottom: 0 }}>Join 2000+ educational leaders receiving our monthly briefing on evaluation trends and security protocols.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Your professional email" 
              style={{ 
                flex: 1, 
                padding: '1.25rem 2rem', 
                borderRadius: '1rem', 
                border: '1px solid var(--border)',
                background: 'var(--muted)',
                fontSize: '1rem'
              }} 
            />
            <button className="btn btn-primary" style={{ padding: '0 2.5rem' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
