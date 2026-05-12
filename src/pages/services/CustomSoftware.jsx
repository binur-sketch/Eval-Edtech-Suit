import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const CustomSoftware = () => {
  const expertise = [
    'Online Examination Platforms',
    'Computer Based Test (CBT) Systems',
    'Offline OMR Based Examination Systems',
    'Hybrid Examination Solutions',
    'AI Proctored Examination Software',
    'Onscreen Evaluation & Digital Marking',
    'Question Bank & Paper Generation System',
    'Admit Card & Hall Ticket Management',
    'Result Processing & Merit List Generation',
    'Candidate Registration & Application Portal',
    'Examination Monitoring Dashboard',
    'Recruitment Examination Management System',
  ];

  const features = [
    { title: 'Fully Customized Architecture', desc: 'Software built specifically for your examination workflow.' },
    { title: 'High Volume Candidate Handling', desc: 'Scalable for large volume exams with secure infrastructure.' },
    { title: 'Secure Role-Based Access', desc: 'Multi-level approval workflows and end-to-end data encryption.' },
    { title: 'Automated Result Processing', desc: 'Real-time monitoring dashboard with detailed analytics.' },
    { title: 'Cloud & On-Premise Deployment', desc: 'Flexible deployment options with full API integration support.' },
    { title: 'Dedicated Technical Support', desc: 'Complete automation of exam lifecycle with flexible enhancements.' },
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Custom Development</span>
              <h1 style={{ fontSize: '3.5rem' }}>Tailored <span className="gradient-text">Examination</span> Software</h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
                We specialize in custom software development for assessment solutions tailored to the unique requirements of universities, recruitment boards, and corporates.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
                <Link to="/book-demo" className="btn btn-outline">Consult Our Team</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/assets/images/service_custom.png" alt="Custom Software" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding" style={{ background: 'var(--primary-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Our <span className="gradient-text">Expertise</span></h2>
            <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: 'var(--muted-foreground)' }}>From candidate registration to final result processing, we build end-to-end systems for every examination need.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {expertise.map((e, i) => (
              <div key={i} className="card hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'white' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Icons.CheckCircle size={20} /></div>
                <div style={{ fontWeight: '700', fontSize: '0.9375rem' }}>{e}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Key <span className="gradient-text">Features</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {features.map((f, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '3rem', background: 'white' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>{f.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding" style={{ background: 'var(--primary-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2>Why Choose Our <span className="gradient-text">Custom Development</span></h2>
              <ul style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem', padding: 0, listStyle: 'none' }}>
                {[
                  'Built specifically for your examination workflow',
                  'No dependency on pre-built products',
                  'Scalable for large volume exams',
                  'Secure and reliable architecture',
                  'Flexible future enhancements',
                  'Complete automation of exam lifecycle'
                ].map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: '700' }}>
                    <Icons.Check size={24} style={{ color: 'var(--primary)' }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--secondary)', color: 'white', padding: '4rem', borderRadius: '3rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Let's Build Something Great</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>Contact us today to discuss your unique requirements and get a technical proposal.</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Connect with Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
