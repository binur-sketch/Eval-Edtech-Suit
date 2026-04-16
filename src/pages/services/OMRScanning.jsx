import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const OMRScanning = () => {
  const specializations = [
    'High-volume OMR scanning and bulk data processing for large-scale examinations',
    'Capability to process lakhs of OMR sheets within a short turnaround time',
    'Onsite OMR scanning and result processing to maintain complete confidentiality',
    'Secure handling of examination data with restricted access',
    'Experience in handling Olympiad examinations with multi-level result preparation',
    'Expertise in processing Government recruitment examination OMR sheets',
    'Reliable processing for university and college examinations',
    'Scalable infrastructure to support large candidate volumes',
  ];

  const features = [
    { title: 'High-speed OMR sheet scanning', icon: <Icons.Zap /> },
    { title: 'Accurate data extraction', icon: <Icons.Target /> },
    { title: 'Bulk processing capability', icon: <Icons.Layers /> },
    { title: 'Multiple OMR format support', icon: <Icons.FileText /> },
    { title: 'Automated result generation', icon: <Icons.Cpu /> },
    { title: 'Error detection and correction', icon: <Icons.AlertCircle /> },
    { title: 'Barcode/QR code reading support', icon: <Icons.Scan /> },
    { title: 'Candidate-wise reports', icon: <Icons.User /> },
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Scanning & Analytics</span>
              <h1 style={{ fontSize: '3.5rem' }}>OMR Scanning & <span className="gradient-text">Result Generation</span></h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
                Fast, accurate, and reliable processing of OMR sheets for examinations, surveys, and assessments. We handle lakhs of sheets with zero error.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                <Link to="/about" className="btn btn-outline">Our Expertise</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
               <img src="/assets/images/omr_scanning.png" alt="OMR Scanning" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2>Our <span className="gradient-text">Capabilities</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
             {features.map((f, i) => (
               <div key={i} className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
                  <h4 style={{ fontSize: '1.125rem' }}>{f.title}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="section-padding" style={{ background: 'var(--secondary)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', marginBottom: '2rem' }}>Our <span className="gradient-text">Specialization</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
                With years of experience handling some of India's largest examinations, we bring unmatched expertise to OMR data processing.
              </p>
              <ul style={{ display: 'grid', gap: '1.5rem', padding: 0, listStyle: 'none' }}>
                {specializations.map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Icons.ChevronRight /></div>
                    <span style={{ color: 'rgba(255,255,255,0.85)' }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '4rem' }}>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '1rem' }}>100%</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>Accuracy Guaranteed</div>
                  <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.6)' }}>Our multi-level verification process ensures that every bubble is read correctly and every result is valid.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
           <h2>Need high-volume scanning?</h2>
           <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)' }}>We offer both onsite and offsite processing models tailored to your security requirements.</p>
           <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Connect with Us</Link>
        </div>
      </section>
    </div>
  );
};

export default OMRScanning;
