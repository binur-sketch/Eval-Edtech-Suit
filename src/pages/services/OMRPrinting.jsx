import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const OMRPrinting = () => {
  const features = [
    { title: 'High precision OMR sheet printing', icon: <Icons.CheckCircle2 /> },
    { title: 'Customizable layout and format', icon: <Icons.Layout /> },
    { title: 'Support for objective exams and surveys', icon: <Icons.FileText /> },
    { title: 'Barcode and QR code printing', icon: <Icons.Scan /> },
    { title: 'Candidate information fields', icon: <Icons.UserCheck /> },
    { title: 'Multi-section OMR design', icon: <Icons.Columns /> },
    { title: 'High-quality paper options', icon: <Icons.Scroll /> },
    { title: 'Bulk printing capability', icon: <Icons.Printer /> },
  ];

  const benefits = [
    { title: 'Accurate OMR scanning', desc: 'Minimized scanning errors through precision printing.', icon: <Icons.Target /> },
    { title: 'Reduced processing errors', desc: 'High-quality paper ensures reliable data capture.', icon: <Icons.AlertTriangle /> },
    { title: 'Professional sheet design', desc: 'Expertly designed layouts for maximum readability.', icon: <Icons.Palette /> },
    { title: 'Quick turnaround time', desc: 'Reliable bulk production for time-critical exams.', icon: <Icons.Clock /> },
    { title: 'Cost-effective bulk printing', desc: 'Optimized pricing for large-scale requirements.', icon: <Icons.CreditCard /> },
    { title: 'Customizable as per exam requirement', desc: 'Tailored formats for specific institutional needs.', icon: <Icons.Settings /> },
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Printing Services</span>
              <h1 style={{ fontSize: '3.5rem' }}>Professional <span className="gradient-text">OMR Printing</span> Services</h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
                We provide high-precision OMR printing designed to ensure 100% accurate scanning and reliable data capture for large-scale examinations and surveys.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                <Link to="/book-demo" className="btn btn-outline">Request Samples</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/assets/images/omr_printing.png" alt="OMR Printing" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icons.ShieldCheck /></div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '1rem' }}>Zero-Error Printing</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Guaranteed Alignment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Key <span className="gradient-text">Features</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {features.map((f, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem' }}>
                <div style={{ color: 'var(--primary)' }}>{f.icon}</div>
                <div style={{ fontWeight: '700' }}>{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Why <span className="gradient-text">Choose Us</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {benefits.map((b, i) => (
              <div key={i} className="card" style={{ padding: '3rem' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{b.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: '5rem', borderRadius: '3rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '2rem' }}>Ready to print your OMR sheets?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.7)' }}>Get expert consultation for your institutional printing requirements today.</p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Talk to Our Experts</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OMRPrinting;
