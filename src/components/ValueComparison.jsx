import React from 'react';
import * as Icons from './LucideFix';

const ValueComparison = () => {
  const comparison = [
    { feature: 'Hardware Requirement', trad: 'Specialized OMR Scanners', eval: 'Any Standard Flatbed/ADF Scanner' },
    { feature: 'Paper Cost', trad: 'Expensive OMR Sheets', eval: 'Standard Photocopy Paper' },
    { feature: 'Processing Accuracy', trad: '95-98% (Vulnerable to light marks)', eval: '100% (AI-Powered Correction)' },
    { feature: 'Analytics Delivery', trad: 'Days/Weeks Later', eval: 'Instant Dashboard Reporting' },
    { feature: 'Initial Investment', trad: 'High ($$$$)', eval: 'Minimal (Any ADF Scanner)' },
    { feature: 'Maintenance & Support', trad: 'Niche specialized engineers', eval: 'Zero-Wait (Widespread local service)' },
    { feature: 'Hardware Resilience', trad: 'Fragile/Sensitive sensors', eval: 'Rough & Tough (Standard hardware)' }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge">Comparison</span>
          <h2>Traditional vs <span className="gradient-text">eVAL Ecosystem</span></h2>
        </div>

        <div style={{ 
          overflowX: 'auto',
          background: 'var(--card)',
          borderRadius: '2rem',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--muted)', borderBottom: '2px solid var(--border)' }}>
                <th style={{ padding: '2rem', fontWeight: '800' }}>Feature / Benefit</th>
                <th style={{ padding: '2rem', fontWeight: '800' }}>Traditional Systems</th>
                <th style={{ padding: '2rem', fontWeight: '800', color: 'var(--primary)', textAlign: 'center' }}>eVAL Suite</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1.5rem 2rem', fontWeight: '700' }}>{row.feature}</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'var(--muted-foreground)' }}>{row.trad}</td>
                  <td style={{ 
                    padding: '1.5rem 2rem', 
                    fontWeight: '800', 
                    color: 'var(--primary)', 
                    textAlign: 'center',
                    background: 'rgba(229, 57, 53, 0.02)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <Icons.CheckCircle2 size={18} /> {row.eval}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;
