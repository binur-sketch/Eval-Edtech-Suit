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

  const whyChooseFeatures = [
    { title: 'No Special Hardware Required', text: 'Works with regular A4 printers and scanners, no need for OMR machines.', icon: <Icons.Printer size={28} /> },
    { title: 'High Processing Speed', text: 'Processes 300-500 sheets per minute on a standard PC.', icon: <Icons.Zap size={28} /> },
    { title: 'Near-Perfect Accuracy', text: 'Offers almost 100% accuracy in reading marked responses.', icon: <Icons.Target size={28} /> },
    { title: 'User-Friendly Interface', text: 'Easy-to-use design suitable for beginners.', icon: <Icons.Smile size={28} /> },
    { title: 'Flexible Sheet Design', text: 'Create custom OMR sheets or import from Excel.', icon: <Icons.Layout size={28} /> },
    { title: 'Supports Multiple Formats', text: 'Compatible with Excel, CSV, and PDF files.', icon: <Icons.FileText size={28} /> },
    { title: 'Built-in Scoring & Analytics', text: 'Auto-generates scores and detailed performance analysis.', icon: <Icons.BarChart size={28} /> },
    { title: 'Multi-Language Support', text: 'Operates in various Indian and international languages.', icon: <Icons.Globe size={28} /> },
    { title: 'Tick & Cross Mark Detection', text: 'Accurately reads tick and cross marks.', icon: <Icons.CheckSquare size={28} /> },
    { title: 'Barcode & QR Code Support', text: 'Scans barcodes and QR codes for better tracking.', icon: <Icons.Scan size={28} /> }
  ];

  const benefits = [
    { title: 'Works with Photocopied Sheets', text: 'Efficiently processes printed or photocopied sheets.', icon: <Icons.Copy size={24} /> },
    { title: 'Data Security & Backup', text: 'Provides data protection with backup and restore options.', icon: <Icons.Shield size={24} /> },
    { title: 'Cloud & Offline Options', text: 'Available in both cloud and offline versions.', icon: <Icons.Cloud size={24} /> },
    { title: 'Customizable Reports', text: 'Allows generation of institution-specific result formats.', icon: <Icons.FileSpreadsheet size={24} /> },
    { title: 'Auto Error Detection', text: 'Identifies and flags incomplete or misfilled sheets.', icon: <Icons.AlertTriangle size={24} /> },
    { title: 'Cost-Effective Solution', text: 'Reduces costs by eliminating specialized hardware needs.', icon: <Icons.CreditCard size={24} /> },
    { title: 'Multiple Exam Types Supported', text: 'Suitable for exams, surveys, polls, and feedback forms.', icon: <Icons.CheckSquare size={24} /> },
    { title: 'ICR/OCR Integration', text: 'Reads printed and handwritten text through OCR/ICR.', icon: <Icons.Type size={24} /> },
    { title: 'Free Demo & Trial Available', text: 'Offers trial version for hands-on evaluation.', icon: <Icons.PlayCircle size={24} /> },
    { title: 'Dedicated Customer Support', text: 'Provides reliable assistance for setup and usage.', icon: <Icons.Headphones size={24} /> }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Elite OMR Engine</span>
              <h1 style={{ fontSize: '3.5rem' }}>EVAL OMR Software <br/><span className="gradient-text">Pricing, Features & Reviews</span></h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>Process up to 3000 sheets per hour with 100% accuracy. Zero hardware overhead, full institutional integrity.</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
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

      {/* What is eVAL OMR */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }} className="reveal">
             <span className="badge">Software Overview</span>
             <h2 style={{ marginBottom: '1.5rem' }}>What is <span className="gradient-text">EVAL OMR?</span></h2>
             <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
               eVAL OMR is an OMR software by Vir Softech that accurately reads and evaluates OMR sheets used in exams, surveys, and feedback forms. It supports regular A4 sheets and works with standard scanners—no special hardware is needed. Users can create or import OMR sheet designs, print them using normal printers, and customize fields like names, roll numbers, and barcodes. The software offers fast processing (300-500 sheets/min), auto-scoring, and detailed result analysis with export options in Excel, PDF, and CSV formats.
             </p>
          </div>
        </div>
      </section>

      {/* The 4-Step Process */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2>The <span className="gradient-text">Zero-Hardware</span> Cycle</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2.5rem' }}>
             {steps.map((s, i) => (
               <div key={i} className="card" style={{ textAlign: 'center', background: 'white' }}>
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

      {/* Why Choose EVAL OMR Software? */}
      <section className="section-padding">
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <span className="badge">Features</span>
             <h2>Why Choose <span className="gradient-text">EVAL OMR Software?</span></h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
              {whyChooseFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }} className="reveal hover-lift">
                   <div style={{ color: 'var(--primary)' }}>{f.icon}</div>
                   <div>
                      <h4 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding" style={{ background: '#1F1F1F', color: 'white' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Advantages</span>
             <h2 style={{ color: 'white' }}>Benefits of <span style={{ color: 'var(--primary)' }}>EVAL OMR</span> Software</h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2.5rem' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <div style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>{b.icon}</div>
                   <h4 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.125rem' }}>{b.title}</h4>
                   <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: 0 }}>{b.text}</p>
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
