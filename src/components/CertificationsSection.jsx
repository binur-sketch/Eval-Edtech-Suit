import * as Icons from '@/components/LucideFix';
import React from 'react';

const CertificationsSection = () => {
  const certs = [
    { title: 'CMMI Level 3', desc: 'Capability Maturity Model Integration', icon: <Icons.Award size={28} /> },
    { title: 'ISO 9001:2015', desc: 'Quality Management System', icon: <Icons.ShieldCheck size={28} /> },
    { title: 'ISO 14001:2015', desc: 'Environmental Management', icon: <Icons.Globe size={28} /> },
    { title: 'MSME', desc: 'Registered Micro, Small & Medium Enterprise', icon: <Icons.Briefcase size={28} /> },
    { title: 'GeM', desc: 'Government e-Marketplace Provider', icon: <Icons.Building size={28} /> }
  ];

  return (
    <section style={{
      background: 'white',
      padding: '5rem 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', marginBottom: '0.75rem' }}>Compliance & Trust</p>
          <h3 style={{ fontSize: '1.75rem' }}>Awards & <span className="gradient-text">Certifications</span></h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {certs.map((cert, i) => (
            <div key={i} className="hover-lift" style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              padding: '1.25rem 2rem', borderRadius: '1.5rem',
              background: 'var(--muted)',
              border: '1px solid var(--border)',
              transition: 'var(--transition)'
            }}>
              <div style={{ color: 'var(--primary)' }}>{cert.icon}</div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '0.9375rem', color: 'var(--foreground)' }}>{cert.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{cert.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
