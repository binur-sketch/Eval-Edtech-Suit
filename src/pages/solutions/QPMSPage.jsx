import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import SectionHeader from '@/components/common/SectionHeader';



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
    {
      step: '1',
      title: 'Admin Setup',
      desc: 'Configure examination structure and roles.',
      icon: <Icons.UserCog size={32} />,
      color: 'var(--primary)',
      bg: 'var(--primary-light)'
    },
    {
      step: '2',
      title: 'Paper Creation',
      desc: 'Paper setter creates paper using templates.',
      icon: <Icons.FileEdit size={32} />,
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      step: '3',
      title: 'Verification',
      desc: 'Verifier checks formatting and structure.',
      icon: <Icons.CheckSquare size={32} />,
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    },
    {
      step: '4',
      title: 'Moderation',
      desc: 'Moderator reviews and approves content.',
      icon: <Icons.ShieldCheck size={32} />,
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      step: '5',
      title: 'Final Approval',
      desc: 'Papers are locked and stored securely.',
      icon: <Icons.Lock size={32} />,
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.1)'
    },
    {
      step: '6',
      title: 'Finance',
      desc: 'Payment processing and bill settlement.',
      icon: <Icons.CreditCard size={32} />,
      color: '#14B8A6',
      bg: 'rgba(20, 184, 166, 0.1)'
    },
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
      <SEO
        title="Question Paper Management System (QPMS) | Question Bank"
        description="Securely manage question banks and generate balanced question papers with eVAL QPMS. Advanced tagging, bloom's taxonomy, and secure workflows."
        keywords="QPMS, Question Paper Management, Question Bank Software, Exam Paper Generator, Secure Question Bank"
      />
      {/* Hero / Overview */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <span className="badge">Confidential & Secure</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>Question Paper <span className="gradient-text">Management System</span></h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                eVAL Question Paper Management System (QPMS) is a secure digital platform designed to manage the complete lifecycle of question paper creation — from paper setting to final approval — within a controlled environment.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--muted-foreground)', fontWeight: '500', marginBottom: 0 }}>
                The system enables universities and examination bodies to engage internal and external faculty members to create multiple question papers in the institution's prescribed format securely. This structured digital approach eliminates risks associated with manual paper preparation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Get Started</Link>
                <a href="#workflow" className="btn btn-outline">See the Workflow</a>

              </div>
            </div>
            <div style={{ position: 'relative', maxWidth: '680px', marginLeft: 'auto' }}>
              <img src="/assets/images/qpms_dashboard.png" alt="QPMS Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </section>



      {/* Workflow */}
      <section id="workflow" className="section-padding" style={{ background: 'var(--muted)' }}>

        <div className="container">
          <SectionHeader
            title={<>Structured Secure <span className="gradient-text">Workflow</span></>}
            text="The system follows a structured and secure workflow to ensure smooth paper creation:"
          />

          {/* Horizontal Flow Layout */}
          <div className="workflow-h-container">
            {/* Connecting Path (SVG Arcs) */}
            <div className="workflow-h-path">
              <svg width="100%" height="120" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
                {/* Arc 1-2 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  d="M 80,60 C 80,10 240,10 240,60"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 2-3 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  d="M 240,60 C 240,110 400,110 400,60"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 3-4 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  d="M 400,60 C 400,10 560,10 560,60"
                  stroke="#EC4899"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 4-5 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  d="M 560,60 C 560,110 720,110 720,60"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 5-6 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  d="M 720,60 C 720,10 880,10 880,60"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Animated Particles */}
                {[160, 320, 480, 640, 800].map((x, i) => (
                  <motion.circle
                    key={i}
                    r="4"
                    fill={i % 2 === 0 ? 'var(--primary)' : '#6366F1'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0], x: [x - 40, x + 40] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    cx={x}
                    cy={i % 2 === 0 ? 15 : 105}
                  />
                ))}
              </svg>
            </div>

            <div className="workflow-h-steps">
              {workflow.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`workflow-h-item ${i % 2 === 0 ? 'top-text' : 'bottom-text'}`}
                  style={{ width: '16.66%' }}
                >
                  {/* Content (Above) */}
                  {i % 2 === 0 && (
                    <div className="h-step-content">
                      <h3>{w.title}</h3>
                      <p>{w.desc}</p>
                    </div>
                  )}

                  {/* Circle */}
                  <div className="h-step-visual">
                    <div className="h-step-circle" style={{ borderColor: w.color }}>
                      <div className="h-step-icon" style={{ color: w.color, background: w.bg }}>
                        {w.icon}
                      </div>
                    </div>
                    <div className="h-step-number" style={{ background: w.color }}>{w.step}</div>
                  </div>

                  {/* Content (Below) */}
                  {i % 2 !== 0 && (
                    <div className="h-step-content">
                      <h3>{w.title}</h3>
                      <p>{w.desc}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <style>{`
            .workflow-h-container {
              position: relative;
              width: 100%;
              max-width: 1100px;
              margin: 0 auto;
              padding: 4rem 0;
            }

            .workflow-h-path {
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              height: 120px;
              transform: translateY(-50%);
              z-index: 0;
              opacity: 0.6;
            }

            .workflow-h-steps {
              display: flex;
              justify-content: space-between;
              align-items: center;
              position: relative;
              z-index: 1;
            }

            .workflow-h-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              position: relative;
            }

            .h-step-visual {
              position: relative;
              margin: 1.5rem 0;
            }

            .h-step-circle {
              width: 90px;
              height: 90px;
              border-radius: 50%;
              border: 2px solid var(--primary);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 8px;
              background: white;
              box-shadow: 0 10px 25px rgba(0,0,0,0.05);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            .workflow-h-item:hover .h-step-circle {
              transform: scale(1.15) rotate(5deg);
              box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }

            .h-step-icon {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .h-step-number {
              position: absolute;
              bottom: -2px;
              right: -2px;
              width: 28px;
              height: 28px;
              border-radius: 50%;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              font-size: 0.75rem;
              border: 3px solid white;
              box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }

            .h-step-content {
              height: 80px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              transition: 0.3s;
            }

            .workflow-h-item.top-text:hover .h-step-content {
              transform: translateY(-5px);
            }
            .workflow-h-item.bottom-text:hover .h-step-content {
              transform: translateY(5px);
            }

            .h-step-content h3 {
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
              color: var(--secondary);
              font-weight: 800;
            }

            .h-step-content p {
              font-size: 0.85rem;
              color: var(--muted-foreground);
              margin: 0;
              line-height: 1.4;
            }

            @media (max-width: 850px) {
              .workflow-h-steps {
                flex-direction: column;
                gap: 3.5rem;
                position: relative;
                padding-left: 1.5rem;
              }
              .workflow-h-steps::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 69px;
                width: 2px;
                background: linear-gradient(to bottom, var(--primary), #6366F1, #EC4899, #F59E0B, #10B981);
                z-index: 0;
                opacity: 0.3;
                border-radius: 2px;
              }
              .workflow-h-path {
                display: none;
              }
              .workflow-h-item {
                width: 100% !important;
                flex-direction: row !important;
                text-align: left;
                gap: 2rem;
                z-index: 1;
                justify-content: flex-start;
              }
              .h-step-visual {
                margin: 0;
                flex-shrink: 0;
                order: 1;
              }
              .h-step-content {
                height: auto;
                text-align: left;
                order: 2;
                padding: 0 !important;
              }
              .h-step-content h3 {
                font-size: 1rem;
                margin-bottom: 0.25rem;
              }
              .h-step-content p {
                font-size: 0.75rem;
                max-width: none;
              }
              .top-text, .bottom-text {
                flex-direction: row !important;
              }
            }
          `}</style>

        </div>
      </section>
      {/* Features Grid */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title={<>System <span className="gradient-text">Key Features</span></>}
          />

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

      {/* Benefits */}
      <section style={{ padding: '3rem 0', background: 'var(--muted)' }}>

        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
              <div>
                <h2 style={{ color: 'white' }}>Institutional <span style={{ color: 'var(--primary)' }}>Benefits</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.25rem', fontSize: '1.0625rem' }}>Eliminate risks, improve coordination, and ensure absolute confidentiality for your most sensitive examination content.</p>
                <div style={{ marginTop: '1.5rem', maxWidth: '280px', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src="/assets/images/qpms_security_visual.png" alt="Security Visual" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }} />
                </div>
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
      <FAQ faqs={qpmsFaqs} background="var(--muted)" />


    </div>
  );
};

export default QPMSPage;
