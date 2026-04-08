import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const CBTPage = () => {
  const highlights = [
    { title: 'Anti-Cheating Engine', icon: <Icons.ShieldCheck size={32} />, desc: 'AI-powered proctoring with facial recognition and browser lockdown.' },
    { title: 'AI Proctoring', icon: <Icons.ScanFace size={32} />, desc: 'Real-time monitoring and anomaly detection for 100% integrity.' },
    { title: 'High-Speed Processing', icon: <Icons.Activity size={32} />, desc: 'Instant evaluation and result generation for massive volumes.' },
    { title: 'Real-time Analytics', icon: <Icons.BarChart3 size={32} />, desc: 'Deep student performance insights and institutional reporting.' }
  ];

  const features = [
    { t: 'Remote & Center-based', d: 'Deploy exams on school labs or allow students to take it from home with AI proctoring.' },
    { t: 'Mathematical Expression Editor', d: 'Full support for complex LaTeX equations and scientific symbols.' },
    { t: 'Biometric Integration', d: 'Multi-factor authentication including facial recognition for secure candidate entry.' }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="badge">Next-Gen Assessment</span>
            <h1 style={{ fontSize: '3.5rem' }}>Highly Secure <br/><span className="gradient-text">CBT Platform</span></h1>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>The most secure, anti-corruption, and scalable online examination platform for large-scale entrance and recruitment tests.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
              <Link to="/book-demo" className="btn btn-primary">Book Consultation</Link>
              <Link to="/contact" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Technical Specs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {highlights.map((h, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{h.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{h.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div>
                 <span className="badge">Why EVAL?</span>
                 <h2 style={{ marginBottom: '2rem' }}>Why institutional leaders trust <br/><span className="gradient-text">EVAL CBT Platform</span>?</h2>
                 <p style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>Our platform is built to withstand massive traffic spikes and sophisticated cheating attempts, making it the choice for national-level entrance exams.</p>
                 <div style={{ display: 'grid', gap: '2rem' }}>
                    {features.map((f, i) => (
                       <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                          <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                            <Icons.CheckCircle2 size={24} />
                          </div>
                          <div>
                             <div style={{ fontWeight: '800', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{f.t}</div>
                             <div style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{f.d}</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div style={{ background: 'var(--secondary)', color: 'white', padding: '4rem', borderRadius: '4rem', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                 <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ color: 'white', marginBottom: '1rem' }}>Live Monitoring Dashboard</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', marginBottom: '3rem' }}>Get a birds-eye view of all exam centers in real-time.</p>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                       {[
                         { l: 'Active Candidates', v: '154,320', c: 'var(--primary)' },
                         { l: 'Alerts Flagged', v: '12', c: '#FF5252' },
                         { l: 'Avg. Load Time', v: '0.8s', c: 'white' }
                       ].map((stat, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', alignItems: 'center' }}>
                             <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'rgba(255,255,255,0.7)' }}>{stat.l}</span>
                             <span style={{ fontWeight: '900', color: stat.c, fontSize: '1.125rem' }}>{stat.v}</span>
                          </div>
                       ))}
                    </div>
                 </div>
                 <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
           <h2 style={{ fontSize: '3rem' }}>Digitizing <span className="gradient-text">Entrance Excellence</span></h2>
           <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>Configure your first secure online test in under 30 minutes. Experience the most intuitive CBT platform ever built.</p>
           <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Book a Free Demo</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CBTPage;
