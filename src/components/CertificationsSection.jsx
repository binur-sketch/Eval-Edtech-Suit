import * as Icons from '@/components/LucideFix';
import React from 'react';

const CertificationsSection = () => {
  const certs = [
    { title: 'ISO 27001', desc: 'Information Security Management', icon: <Icons.ShieldCheck size={28} /> },
    { title: 'SOC 2 Type II', desc: 'Operational Security Controls', icon: <Icons.Lock size={28} /> },
    { title: 'GDPR', desc: 'EU Data Protection Compliance', icon: <Icons.Globe size={28} /> },
    { title: 'ISO 9001', desc: 'Quality Management System', icon: <Icons.Award size={28} /> },
    { title: '99.99% SLA', desc: 'Enterprise Uptime Guarantee', icon: <Icons.Activity size={28} /> },
    { title: 'VAPT Certified', desc: 'Vulnerability Assessment Tested', icon: <Icons.Search size={28} /> }
  ];

  return (
    <section style={{ 
      background: 'var(--secondary)',
      padding: '5rem 0',
      color: 'white'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', marginBottom: '0.75rem' }}>Security & Compliance</p>
          <h3 style={{ color: 'white', fontSize: '1.75rem' }}>Enterprise-Grade <span className="gradient-text">Certifications</span></h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {certs.map((cert, i) => (
            <div key={i} style={{ 
              display: 'flex', alignItems: 'center', gap: '14px',
              padding: '1.25rem 2rem', borderRadius: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'var(--transition)'
            }}>
              <div style={{ color: 'var(--primary)' }}>{cert.icon}</div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '0.9375rem', color: 'white' }}>{cert.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
