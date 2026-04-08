import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/common/SectionHeader';
import TrustSection from '@/components/TrustSection';
import ValueComparison from '@/components/ValueComparison';
import WorkflowSection from '@/components/WorkflowSection';
import ServicesSection from '@/components/ServicesSection';
import FAQ from '@/components/FAQ';
import StatsSection from '@/components/StatsSection';
import TeamSection from '@/components/TeamSection';
import NewsletterSection from '@/components/NewsletterSection';

const Home = () => {
  const solutions = [
    {
      title: 'OMR Software',
      desc: 'Process 300-500 sheets/min with 100% accuracy using plain paper and standard scanners.',
      path: '/omr',
      symbol: '⚡',
      color: '#E53935'
    },
    {
      title: 'CBT Platform',
      desc: 'Highly secure, anti-cheating online examination system with real-time analytics.',
      path: '/cbt',
      symbol: '🛡',
      color: '#1F1F1F'
    },
    {
      title: 'LMS Portal',
      desc: 'Moodle-based scalable learning management system for schools and corporates.',
      path: '/lms',
      symbol: '🌐',
      color: '#E53935'
    },
    {
      title: 'QTB System',
      desc: 'Comprehensive Question Bank management with advanced workflow and metadata.',
      path: '/qtb',
      symbol: '🏆',
      color: '#1F1F1F'
    },
    {
      title: 'OSM Marking',
      desc: 'On-Screen Marking for digital evaluation of physical answer scripts efficiently.',
      path: '/osm',
      symbol: '👥',
      color: '#E53935'
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* Social Proof */}
      <TrustSection />

      {/* Stats Counter */}
      <StatsSection />

      {/* Solutions Overview */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <SectionHeader 
            badge="Our Expertise"
            title="Comprehensive Examination Ecosystem"
            text="From paper-based evaluations to high-stakes computer-based tests, we provide the tools to scale your institutional assessments."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {solutions.map((s, i) => (
              <div key={i} className="card" style={{ borderTop: `4px solid ${s.color}` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>{s.symbol}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', marginBottom: '2rem' }}>{s.desc}</p>
                <Link to={s.path} style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  fontWeight: '800', 
                  color: 'var(--primary)', 
                  fontSize: '0.9375rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Explore Solution <Icons.ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection />

      {/* Visual Workflow */}
      <WorkflowSection />

      {/* Value Proposition */}
      <ValueComparison />

      {/* Why EVAL Enhanced Section */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Why EVAL?</span>
              <h2 style={{ marginBottom: '2rem' }}>Precision Engineered for <span className="gradient-text">Institutional Trust</span></h2>
              <p>We bridge the gap between traditional manual evaluation and modern digital requirements with 100% accuracy and zero hardware overhead.</p>
              
              <div style={{ marginTop: '3.5rem', display: 'grid', gap: '2rem' }}>
                {[
                  { title: 'Cloud Resilience', text: 'Auto-scaling clusters handling millions of requests per minute.', symbol: <Icons.Server size={24} /> },
                  { title: 'Secured IP', text: 'End-to-end encryption for your question banks and student data.', symbol: <Icons.Lock size={24} /> },
                  { title: 'Global Compliance', text: 'Aligns with national and international assessment standards.', symbol: <Icons.Globe size={24} /> }
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ 
                      background: 'white', 
                      padding: '1rem', 
                      borderRadius: '1.25rem', 
                      boxShadow: 'var(--shadow-sm)', 
                      color: 'var(--primary)',
                      border: '1px solid var(--border)' 
                    }}>
                      {f.symbol}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--card)', padding: '3.5rem', borderRadius: '3rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
               <h3 style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Institutional Impact</h3>
               <div style={{ display: 'grid', gap: '2rem' }}>
                  {[
                    { label: 'Evaluation Speed', val: '+400%', color: 'var(--primary)' },
                    { label: 'Operational Cost', val: '-65%', color: 'var(--secondary)' },
                    { label: 'Student Satisfaction', val: '98%', color: 'var(--primary)' }
                  ].map((stat, idx) => (
                    <div key={idx}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontWeight: '800', fontSize: '0.875rem' }}>
                          <span style={{ color: 'var(--muted-foreground)' }}>{stat.label}</span>
                          <span style={{ color: stat.color }}>{stat.val}</span>
                       </div>
                       <div style={{ height: '8px', background: 'var(--muted)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: stat.val.includes('+') || stat.val.includes('98') ? '90%' : '65%', height: '100%', background: stat.color }}></div>
                       </div>
                    </div>
                  ))}
               </div>
               <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                  <Link to="/book-demo" className="btn btn-primary" style={{ width: '100%' }}>Get Your Institutional Report</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Global Newsletter */}
      <NewsletterSection />

      {/* Final Conversion CTA */}
      <section className="section-padding" style={{ padding: '0 0' }}>
        <div className="container">
          <div style={{ 
            background: 'var(--secondary)', 
            borderRadius: '3rem', 
            padding: '7rem 3rem', 
            color: 'white', 
            textAlign: 'center', 
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
          }}>
             {/* Decorative background glow */}
             <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
             
             <div style={{ position: 'relative', zIndex: 1 }}>
               <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Ready to Transform Your <br/><span className="gradient-text">Institutional Future?</span></h2>
               <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '0 auto 3.5rem', fontSize: '1.25rem' }}>Join the global ecosystem of institutions delivering faster, fairer, and more accurate evaluations every day.</p>
               <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>
                    Request Personalised Demo
                  </Link>
                  <Link to="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1.25rem 3rem' }}>
                    Contact Sales
                  </Link>
               </div>
             </div>
          </div>
        </div>
        <div style={{ height: '8rem' }}></div>
      </section>
    </div>
  );
};

export default Home;
