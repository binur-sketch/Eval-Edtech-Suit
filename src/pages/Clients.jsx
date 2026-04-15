import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => {
  const caseStudies = [
    { title: 'National Board Evaluation', client: 'NCERT', results: '85% faster processing', text: 'EVAL OMR and OSM were deployed to handle over 10 million answer scripts across various national level exams with zero totaling grievances.', icon: <Icons.Award size={32} /> },
    { title: 'Coaching Institute Scalability', client: 'Aakash Institute', results: '100% Secure CBT Exams', text: 'Implementing EVAL CBT across 250+ centers globally ensured standardized, secure testing with AI proctoring for competitive medical exams.', icon: <Icons.ShieldCheck size={32} /> },
    { title: 'University Examination Hybrid', client: 'Amity University', results: 'Unified LMS & Exam portal', text: 'Merged content delivery with secure high-stakes examinations into one dashboard for 100,000 students.', icon: <Icons.CheckCircle2 size={32} /> }
  ];

  const trustedBy = [
    'IIT DELHI', 'HERO MOTOCORP', 'FIITJEE', 'AAKASH', 'NCERT', 'AMITY UNIVERSITY'
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge">Trust & Social Proof</span>
          <h1 style={{ fontSize: '3.5rem' }}>Success Stories from <br /><span className="gradient-text">Institutional Leaders</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            From state education boards to corporate training departments, EVAL is the engine of choice for accurate and high-speed evaluation.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Become a Partner</Link>
          </div>
        </div>
      </section>

      {/* Main Stats bar */}
      <section style={{ borderTop: '1px solid var(--border)', background: 'white' }}>
        <div className="container" style={{ padding: '4.5rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', textAlign: 'center', gap: '3rem' }}>
          {[
            { label: 'Total Institutions', value: '5000+' },
            { label: 'Answer Sheets Evaluated', value: '50M+' },
            { label: 'Students Impacted', value: '10M+' },
            { label: 'Countries Supported', value: '12+' }
          ].map((s, j) => (
            <div key={j}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.value}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid of logos */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge">Global Reach</span>
          <p style={{ fontWeight: '800', fontSize: '0.875rem', marginBottom: '4rem', textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>Our Prestige Partners</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
            {trustedBy.map((c, i) => (
              <div key={i} style={{ fontSize: '1.75rem', fontWeight: '900', color: '#cbd5e1', letterSpacing: '-0.025em', opacity: 0.8 }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Case Studies</span>
            <h2>Detailed <span className="gradient-text">Impact Analysis</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem' }}>
            {caseStudies.map((cs, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '3.5rem' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '2.5rem' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem', display: 'inline-block' }}>{cs.icon}</div>
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cs.results}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{cs.client} Implementation</h3>
                <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: '1.7', marginBottom: '2.5rem', flex: 1 }}>{cs.text}</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', fontWeight: '800', color: 'var(--primary)', cursor: 'pointer' }}>
                  View Full Case Study <Icons.ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: 'white' }}>A Global <span className="gradient-text">Trust Network</span></h2>
              <p style={{ margin: '2rem 0 4rem', color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem', maxWidth: '640px', marginInline: 'auto' }}>EVAL solutions are currently powering national evaluations in India, Middle East, and Sub-Saharan Africa.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2.5rem' }}>
                {[
                  { icon: <Icons.MapPin />, title: 'New Delhi', text: 'Regional HQ & National Board Support' },
                ].map((loc, i) => (
                  <div key={i} style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{loc.icon}</div>
                    <h4 style={{ color: 'white', marginBottom: '1rem' }}>{loc.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', marginBottom: 0 }}>{loc.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3rem' }}>
            {[
              { q: 'EVAL transformed our internal test bank from an Excel sheet to an AI-powered pedagogical engine.', a: 'Senior Faculty', b: 'IIT Delhi' },
              { q: 'The security proctoring system is robust—we saw a 95% decrease in suspicious activity flags.', a: 'Assessment Head', b: 'FIITJEE' },
              { q: 'Standardizing our OMR sheets across all rural centers was only possible with EVAL\'s hardware-independent software.', a: 'Project Manager', b: 'NCERT' }
            ].map((text, i) => (
              <div key={i} className="card" style={{ background: 'var(--muted)', display: 'flex', gap: '2rem', padding: '3.5rem', borderRadius: '3rem' }}>
                <div>
                  <Icons.Quote size={48} style={{ color: 'var(--primary)', opacity: '0.2', marginBottom: '2rem' }} />
                  <p style={{ fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.7' }}>"{text.q}"</p>
                  <div style={{ fontWeight: '800', fontSize: '1rem' }}>{text.a}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: '600' }}>{text.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem' }}>Interested in a <span className="gradient-text">Proof of Concept?</span></h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>Partner with EVAL for a pilot project and experience the power of digital evaluation firsthand.</p>
          <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 4rem' }}>Request POC</Link>
        </div>
      </section>
    </div>
  );
};

export default Clients;
