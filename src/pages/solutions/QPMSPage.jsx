import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';

const QPMSPage = () => {
  const features = [
    { title: 'Secure External Faculty Paper Creation', desc: 'Invite internal and external subject experts to create question papers securely within the system using controlled access and defined formats.', icon: <Icons.UserPlus /> },
    { title: 'University-Defined Paper Templates', desc: 'Create question papers using standardized templates based on the university\'s official format, ensuring consistency across all exams.', icon: <Icons.Layout /> },
    { title: 'Multi-Level Approval Workflow', desc: 'Enable structured paper review through verifier and moderator stages to ensure quality and accuracy before final approval.', icon: <Icons.CheckSquare /> },
    { title: 'Role-Based Access Control', desc: 'Assign specific roles such as Admin, Paper Setter, Verifier, and Moderator to control access and maintain confidentiality.', icon: <Icons.Lock /> },
    { title: 'End-to-End Data Encryption', desc: 'Protect sensitive question paper content using secure encryption throughout the creation, review, and storage process.', icon: <Icons.Shield /> },
    { title: 'Two-Factor Authentication (2FA)', desc: 'Add an extra layer of login security to prevent unauthorized access to confidential examination data.', icon: <Icons.KeySquare /> },
    { title: 'Real-Time Progress Monitoring', desc: 'Track the status of paper creation, review, and approval through a centralized dashboard.', icon: <Icons.Activity /> },
    { title: 'Multi-Language Question Support', desc: 'Create question papers in multiple languages to support regional and multilingual examination requirements.', icon: <Icons.Globe /> },
    { title: 'Automated Correction & Resubmission', desc: 'Allow reviewers to provide remarks and send papers back for correction until final approval is achieved.', icon: <Icons.RefreshCw /> },
    { title: 'Secure Paper Storage', desc: 'Store finalized question papers safely in a protected digital repository with restricted access.', icon: <Icons.HardDrive /> },
    { title: 'Activity Tracking & Audit Logs', desc: 'Maintain detailed records of user activities to ensure accountability and transparency.', icon: <Icons.History /> },
    { title: 'Optional Payment Management', desc: 'Manage payment workflows for external paper setters after successful paper submission and approval.', icon: <Icons.CreditCard /> },
  ];

  const workflow = [
    { step: '1', title: 'Admin Setup', desc: 'Configure examination structure, assign subjects and roles, define templates.' },
    { step: '2', title: 'Paper Creation', desc: 'Paper setter logs in, creates paper using template, submits paper securely.' },
    { step: '3', title: 'Verification', desc: 'Verifier checks formatting and structure, adds remarks if corrections are needed.' },
    { step: '4', title: 'Moderation', desc: 'Moderator reviews content quality, approves or sends for revision.' },
    { step: '5', title: 'Final Approval', desc: 'Approved papers are locked and stored securely for exam use.' },
  ];

  const benefits = [
    'Secure handling of confidential examination content',
    'Ability to engage external faculty securely',
    'Standardized paper creation formats',
    'Reduced manual coordination',
    'Faster paper approval process',
    'Improved transparency and accountability',
    'Reduced risk of paper leaks',
    'Centralized management of question papers',
  ];
  const qpmsFaqs = [
    {
      question: "How does QPMS ensure question paper security?",
      answer: "QPMS uses encryption, access control, and timed access to prevent unauthorized access or leaks."
    },
    {
      question: "Can multiple users collaborate on paper creation?",
      answer: "Yes, paper setters, moderators, and approvers can work together through role-based workflows."
    },
    {
      question: "Does it support random paper generation?",
      answer: "Yes, the system can auto-generate question papers based on predefined blueprints and difficulty levels."
    },
    {
      question: "Can we maintain a question bank?",
      answer: "Absolutely, a centralized question bank with tagging, categorization, and version control is included."
    },
    {
      question: "Is there an audit trail for changes?",
      answer: "Yes, every activity is logged to ensure complete transparency and accountability."
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero / Overview */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Confidential & Secure</span>
              <h1 style={{ fontSize: '3.5rem' }}>Question Paper <span className="gradient-text">Management System</span></h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
                eVAL Question Paper Management System (QPMS) is a secure digital platform designed to manage the complete lifecycle of question paper creation — from paper setting to final approval — within a controlled and confidential environment.
              </p>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', marginTop: '2rem' }}>
                <p style={{ margin: 0, fontWeight: '600', color: 'var(--foreground)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  The system enables universities and examination bodies to engage internal and external faculty members to create multiple question papers in the institution's prescribed format, all within a secure, role-based platform. This structured digital approach eliminates risks associated with manual paper preparation, improves coordination between contributors, and ensures that question papers are created, reviewed, and finalized with complete confidentiality.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Get Started</Link>
                <Link to="/book-demo" className="btn btn-outline">See the Workflow</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/assets/images/qpms_dashboard.png" alt="QPMS Dashboard" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>System <span className="gradient-text">Key Features</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {features.map((f, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '2.5rem', background: 'var(--muted)' }}>
                <div style={{ color: 'white', padding: '12px', background: 'var(--primary-dark)', borderRadius: '12px', display: 'inline-block', marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>{i + 1}. {f.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Structured Secure <span className="gradient-text">Workflow</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted-foreground)' }}>The system follows a structured and secure workflow to ensure smooth paper creation:</p>
          </div>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {workflow.map((w, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', background: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--primary)', opacity: '0.05', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}>{w.step}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h4 style={{ marginBottom: '1rem' }}>{w.step}. {w.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: '5rem', borderRadius: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div>
                <h2 style={{ color: 'white' }}>Institutional <span style={{ color: 'var(--primary)' }}>Benefits</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '2rem', fontSize: '1.125rem' }}>Eliminate risks, improve coordination, and ensure absolute confidentiality for your most sensitive examination content.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '1rem', fontWeight: '500' }}>
                    <Icons.CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Secure your question papers today</h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>Empower your faculty with a secure and structured paper creation environment.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Request Implementation</Link>
        </div>
      </section>
      {/* FAQ */}
      <FAQ faqs={qpmsFaqs} />

    </div>
  );
};

export default QPMSPage;
