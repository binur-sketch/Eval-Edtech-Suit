import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section-padding" style={{ 
      paddingTop: 'calc(var(--nav-height) + 4rem)', 
      background: 'radial-gradient(circle at 70% 30%, rgba(229, 57, 53, 0.08) 0%, transparent 60%)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'center' }}>
          <div className="reveal">
            <span className="badge">Innovation in Evaluation</span>
            <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }} className="reveal delay-1">
              Digitizing <span className="gradient-text">Academic Excellence</span> with Precision
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '2rem', maxWidth: '540px' }} className="reveal delay-2">
              Streamline high-stakes assessments, automate evaluations, and empower institutional learning with our enterprise-grade suite.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }} className="reveal delay-3">
              <Link to="/book-demo" className="btn btn-primary">
                Book a Free Demo →
              </Link>
              <Link to="/omr" className="btn btn-outline">
                Explore Solutions
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }} className="reveal delay-3">
              {[
                { val: '5000+', label: 'Institutions' },
                { val: '100%', label: 'Accuracy' },
                { val: 'Zero', label: 'Hardware Cost' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: '900', color: 'var(--foreground)' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal delay-2" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              zIndex: 1,
              transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
              transition: 'transform 0.5s ease'
            }}>
              <img 
                src="/assets/images/hero_dashboard.png" 
                alt="EVAL Analytics Dashboard" 
                style={{ 
                  width: '100%', 
                  borderRadius: '1.5rem', 
                  boxShadow: 'var(--shadow-lg)',
                  border: '6px solid var(--secondary)',
                  display: 'block'
                }} 
              />
              
              {/* Floating Performance Tag */}
              <div className="glass" style={{ 
                position: 'absolute', 
                top: '-15px', 
                right: '5%', 
                padding: '1rem', 
                borderRadius: '1rem', 
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '50%', color: 'white' }}>
                  <Icons.Zap size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: '700', color: 'var(--muted-foreground)' }}>System Speed</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '800' }}>300 Sheets/Min</div>
                </div>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div style={{ 
              position: 'absolute', top: '50%', left: '50%', width: '120%', height: '120%', 
              background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)', zIndex: 0
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
