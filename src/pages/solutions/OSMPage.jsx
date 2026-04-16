import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const OSMPage = () => {
  const steps = [
    { title: 'Exam Completed', desc: 'Students complete pen-and-paper exams at designated centres.' },
    { title: 'Sheets Collected', desc: 'Answer books are collected from all examination centres and sent to a secure scanning facility.' },
    { title: 'Digitised & Uploaded', desc: 'Answer sheets are scanned using high-speed ADF scanners and uploaded directly into eVAL OSM. No paper is dispatched to examiners.' },
    { title: 'Distributed to Evaluators', desc: 'Scanned scripts are electronically distributed to assigned examiners through the platform.' },
    { title: 'Real-Time Monitoring', desc: 'The Department Head monitors examiner progress live on dashboard.' },
    { title: 'Processed & Reported', desc: 'Marking data is analysed and compiled into comprehensive performance reports.' },
    { title: 'Result Declaration', desc: 'Marks are exported (CSV, PDF) and results declared in batches or selectively.' },
    { title: 'Recheck Request', desc: 'Students can view their marked scripts and raise formal recheck requests online.' },
  ];

  const features = [
    { title: 'Candidate Identity Masking', desc: 'Student name, roll number, and personal details are masked digitally before distribution to evaluators. Barcode-based tracking ensures zero bias.' },
    { title: 'Auto-Totalling & Validation', desc: 'Marks entered per question are summed automatically. The system prevents submission unless all pages are reviewed, eliminating unchecked questions.' },
    { title: 'On-Screen Marking Tools', desc: 'Examiners can place correct/incorrect symbols, partial mark stamps, freehand comments, and text annotations directly on the scanned script.' },
    { title: 'Real-Time Dashboard', desc: 'Controllers and HODs see live progress of every evaluator — scripts pending, under review, and completed — with time-tracking per evaluator.' },
    { title: 'Remote Evaluation Support', desc: 'Evaluators log in securely from any location within a fully encrypted environment, eliminating travel requirements.' },
    { title: 'Multi-Format Export', desc: 'Final marks exported in CSV, Excel, and PDF formats. Compatible with existing ERP and result processing systems via API integration.' },
    { title: 'Student Recheck Portal', desc: 'After result declaration, students can view their evaluated script with annotations. Online recheck requests submitted digitally.' },
  ];

  const benefits = [
    { title: 'Zero Logistics Cost', desc: 'No physical script movement between centres. Scanning happens once; everything after is digital.' },
    { title: 'Results in Days, Not Weeks', desc: 'Parallel evaluation by multiple examiners compresses the result cycle from months to a few days.' },
    { title: 'End-to-End Data Security', desc: 'Encrypted storage, two-factor login, role-based access, and audit trails at every step.' },
    { title: 'Bias-Free Evaluation', desc: 'Identity masking ensures evaluators never know whose script they are marking.' },
    { title: 'Deep Performance Insights', desc: 'Evaluate evaluator speed, accuracy trends, and student performance patterns from one dashboard.' },
  ];

  const roles = [
    { role: 'Administrator', access: 'Configure exams and subjects • Set marking schemes • Manage user accounts • Control all system settings' },
    { role: 'Department Head / COE', access: 'Monitor evaluator progress live • Generate performance reports • Trigger re-assignment of scripts • Approve final results' },
    { role: 'Evaluator', access: 'View and mark assigned scripts • Add annotations and comments • Enter per-question marks • Submit after full review' },
    { role: 'OMR Validator', access: 'Responsible for correcting errors on the student information sheet manually' },
    { role: 'Student', access: 'View evaluated script online • See examiner annotations • Submit recheck request • Track recheck status' },
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero / Overview */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Descriptive Evaluation</span>
              <h1 style={{ fontSize: '3.5rem' }}>On-Screen <span className="gradient-text">Marking Solution</span></h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
                eVAL On-Screen Marking (OSM) Solution is a secure digital evaluation system designed to simplify and speed up the assessment of answer sheets. It enables examiners to evaluate scanned answer scripts directly on screen, eliminating the need for manual paper-based checking.
              </p>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', marginTop: '2rem' }}>
                <p style={{ margin: 0, fontWeight: '600', color: 'var(--foreground)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                   A key strength of the eVAL On-Screen Marking Solution is its ability to support both Objective and Subjective answer sheets on a single platform. OSM transforms the marking and scoring of descriptive answer scripts into a precise, simple, secure, and efficient process — eliminating logistical, administrative, and accuracy challenges of traditional paper-based evaluation.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/book-demo" className="btn btn-primary">Request a Pilot</Link>
                <Link to="/contact" className="btn btn-outline">Consult Our Team</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
               <img src="/assets/images/osm_hero.png" alt="On-Screen Marking" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Workflow */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2>The <span className="gradient-text">8-Step</span> OSM Workflow</h2>
          </div>
          <div style={{ position: 'relative' }}>
             <div style={{ position: 'absolute', top: '24px', left: '0', right: '0', height: '2px', background: 'var(--border)', zIndex: 0 }} className="md-block"></div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', position: 'relative', zIndex: 1 }}>
                {steps.map((s, i) => (
                  <div key={i} style={{ textAlign: 'center', background: 'white', border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem' }}>
                     <div style={{ width: '48px', height: '48px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: '900', boxShadow: '0 4px 10px rgba(229,57,53,0.3)' }}>{i+1}</div>
                     <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>{s.title}</h4>
                     <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: '1.6', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2>Power <span className="gradient-text">Features</span></h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {features.map((f, i) => (
                <div key={i} className="card hover-lift" style={{ padding: '2.5rem', borderTop: '4px solid var(--primary)' }}>
                   <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--foreground)' }}>{f.title}</h3>
                   <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2>Key <span className="gradient-text">Benefits</span></h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
              {benefits.map((b, i) => (
                 <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', color: 'var(--primary)', flexShrink: 0 }}>
                       <Icons.CheckCircle2 size={24} />
                    </div>
                    <div>
                       <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{b.title}</h4>
                       <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{b.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Role-Based Access */}
      <section className="section-padding" style={{ background: '#1F1F1F', color: 'white' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2 style={{ color: 'white' }}>Role-Based <span className="gradient-text">Access</span></h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {roles.map((r, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.role}</div>
                   <ul style={{ padding: 0, margin: 0, listStyle: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', lineHeight: '1.8' }}>
                      {r.access.split(' • ').map((item, idx) => (
                         <li key={idx} style={{ display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--primary)' }}>&bull;</span> {item}
                         </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
           <h2>Eliminate the logistical nightmare</h2>
           <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)' }}>The most secure and transparent on-screen marking system for descriptive exams.</p>
           <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Request Demo</Link>
        </div>
      </section>
    </div>
  );
};

export default OSMPage;

