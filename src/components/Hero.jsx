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
            <span className="badge">Award Winning Examination Suite</span>
            <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }} className="reveal delay-1">
              Advanced <span className="gradient-text">Examination & Evaluation</span> Ecosystem
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: '2.5rem', maxWidth: '540px', color: 'var(--muted-foreground)' }} className="reveal delay-2">
              The trusted choice for 5000+ top educational institutions globally. Precision-engineered solutions for high-stakes assessments, automation, and institutional learning.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }} className="reveal delay-3">
              <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Book a Free Demo →
              </Link>
              <Link to="/omr" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
                Explore Suite
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }} className="reveal delay-3">
              {[
                { val: '5000+', label: 'Institutions' },
                { val: '50M+', label: 'Sheets Processed' },
                { val: '100%', label: 'Accuracy Rate' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)', fontWeight: '900', color: 'var(--foreground)' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal delay-2" style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              zIndex: 1,
              transform: 'perspective(1000px) rotateY(-8deg) rotateX(3deg)',
              transition: 'transform 0.5s ease',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div style={{
                position: 'absolute', inset: '0',
                background: 'linear-gradient(45deg, var(--primary), transparent)',
                borderRadius: '2rem', transform: 'translate(20px, 20px)',
                zIndex: -1, opacity: 0.1
              }}></div>
              <img
                src="/assets/images/hero_dashboard.png"
                alt="eVAL Analytics Dashboard"
                style={{
                  width: '100%',
                  borderRadius: '2rem',
                  boxShadow: 'var(--shadow-2xl)',
                  border: '8px solid white',
                  display: 'block'
                }}
              />

              {/* Floating Performance Tag */}
              <div className="glass" style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                padding: '1.25rem',
                borderRadius: '1.25rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '50%', color: 'white' }}>
                  <Icons.Zap size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.625rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>Scanning Speed</div>
                  <div style={{ fontSize: '1rem', fontWeight: '900' }}>500 Sheets/Min</div>
                </div>
              </div>

              {/* Secure Badge */}
              <div className="glass" style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                padding: '1rem 1.5rem',
                borderRadius: '1.25rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Icons.ShieldCheck style={{ color: 'var(--secondary)' }} />
                <div style={{ fontSize: '0.875rem', fontWeight: '800' }}>ISO Certified Secure</div>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', width: '130%', height: '130%',
              background: 'radial-gradient(circle, rgba(229, 57, 53, 0.12) 0%, transparent 60%)',
              transform: 'translate(-50%, -50%)', zIndex: 0
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

