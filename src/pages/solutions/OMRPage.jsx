import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const OMRPage = () => {
  const steps = [
    { title: 'Design', icon: <Icons.Printer size={32} />, desc: 'Built-in Template Designer to create scan-optimized sheets without external software.' },
    { title: 'Print', icon: <Icons.Target size={32} />, desc: 'Print on ordinary 70-80 GSM paper using any standard desktop or digital printer.' },
    { title: 'Scan', icon: <Icons.Scan size={32} />, desc: 'Support for standard ADF scanners. Accurately handles skewed, folded, or partially damaged sheets.' },
    { title: 'Process', icon: <Icons.Zap size={32} />, desc: 'Instant processing with OCR/ICR integration to match handwritten data with OMR bubbles.' }
  ];

  const features = [
     { title: 'Damaged Sheet Logic', text: 'Intelligent algorithms that accurately read data from folded, skewed, or partially torn institutional sheets.' },
     { title: 'Image Marking Overlays', text: 'Generates scanned images with right/wrong answer overlays—perfect digital proof for student review.' },
     { title: 'OCR/ICR Hybrid Recognition', text: 'Seamlessly reads handwritten names, roll numbers, and barcodes alongside OMR bubble data.' },
     { title: 'Built-in Designer', text: 'Drag-and-drop OMR template designer with multi-lingual support and custom branding options.' },
     { title: 'Rank-wise Analytics', text: 'Comprehensive merit lists, category-wise ranks, and roll-wise reporting for high-stakes exams.' },
     { title: 'Mismatch Detection', text: 'Real-time zoomable validation window to cross-verify handwritten data with OMR selections.' }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Elite OMR Engine</span>
              <h1 style={{ fontSize: '3.5rem' }}>Precision Engineered <br/><span className="gradient-text">OMR Suite</span></h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>Process up to 3000 sheets per hour with 100% accuracy. Zero hardware overhead, full institutional integrity.</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                <Link to="/book-demo" className="btn btn-primary">Start Free Trial</Link>
                <Link to="/contact" className="btn btn-outline">Institutional Pricing</Link>
              </div>
            </div>
            
            <div className="card" style={{ padding: '3.5rem', background: 'white', borderRadius: '3rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
               <div style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', background: 'var(--primary-light)', borderRadius: '12px', color: 'var(--primary)' }}><Icons.Activity size={24} /></div>
                  Performance Benchmarks
               </div>
               <div style={{ display: 'grid', gap: '2rem' }}>
                  {[
                    { label: 'Processing Speed', val: '500 sheets/min', pct: '95%' },
                    { label: 'Accuracy Rate', val: '100.00%', pct: '100%' },
                    { label: 'Cloud Latency', val: '< 0.2s', pct: '98%' }
                  ].map((b, i) => (
                    <div key={i}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                          <span style={{ color: 'var(--muted-foreground)', fontWeight: '600' }}>{b.label}</span>
                          <span style={{ fontWeight: '800', color: 'var(--foreground)' }}>{b.val}</span>
                       </div>
                       <div style={{ height: '8px', background: 'var(--muted)', borderRadius: '4px' }}>
                          <div style={{ width: b.pct, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                       </div>
                    </div>
                  ))}
               </div>
               <p style={{ marginTop: '2.5rem', fontSize: '0.8125rem', textAlign: 'center', color: 'var(--muted-foreground)' }}>*Validated by 5000+ top institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Process */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <span className="badge">Workflow</span>
             <h2>The <span className="gradient-text">Zero-Hardware</span> Cycle</h2>
             <p>A simple, powerful workflow designed for volume and accuracy.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '2.5rem' }}>
             {steps.map((s, i) => (
               <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{s.icon}</div>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{s.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                   <div style={{ color: 'var(--primary)', marginTop: '4px' }}>
                      <Icons.CheckCircle2 size={28} />
                   </div>
                   <div>
                      <h4 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Institutional CTA Section */}
      <section className="section-padding">
        <div className="container">
           <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: 'white' }}>Ready for a <span className="gradient-text">100% Accurate</span> Future?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem' }}>Join NCERT, Aakash, and 5000+ top educational institutions globally using EVAL OMR system.</p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Start Free Trial</Link>
                    <Link to="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1.25rem 3.5rem' }}>Request Demo</Link>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(229, 57, 53, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default OMRPage;
;
