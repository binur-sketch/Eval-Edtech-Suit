import React from 'react';
import * as Icons from './LucideFix';

const WorkflowSection = () => {
  const steps = [
    { title: 'Design & Print', icon: <Icons.Printer size={32} />, desc: 'Create custom sheets and print on ordinary paper.' },
    { title: 'Scan Sheets', icon: <Icons.Scan size={32} />, desc: 'Use any standard scanner or mobile device.' },
    { title: 'AI Processing', icon: <Icons.Zap size={32} />, desc: 'Instant 100% accurate digital evaluation.' },
    { title: 'Results & Analytics', icon: <Icons.BarChart3 size={32} />, desc: 'Generate reports and deep insights instantly.' }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--foreground)', color: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>How it Works</span>
          <h2 style={{ color: 'white' }}>Streamlined <span className="gradient-text">Evaluation Workflow</span></h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', 
          gap: '2rem',
          position: 'relative'
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--primary)', 
                borderRadius: '50%', 
                margin: '0 auto 2rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(229, 57, 53, 0.4)'
              }}>
                {s.icon}
              </div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>{s.desc}</p>
              
              {/* Connector for desktop */}
              {i < steps.length - 1 && (
                <div style={{ 
                  position: 'absolute', 
                  top: '40px', 
                  left: 'calc(50% + 40px)', 
                  width: 'calc(100% - 80px)', 
                  height: '2px', 
                  background: 'linear-gradient(90deg, var(--primary), transparent)',
                  display: 'none'
                }} className="md-flex" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
