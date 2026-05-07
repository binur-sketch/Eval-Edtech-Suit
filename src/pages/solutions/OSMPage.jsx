import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import SectionHeader from '@/components/common/SectionHeader';
import { ScanIcon } from '@/components/common/CustomIcons';



const OSMPage = () => {
  const steps = [
    {
      title: 'Exam Completed',
      desc: 'Pen-and-paper exams at designated centres.',
      icon: <Icons.FileCheck size={28} />,
      color: 'var(--primary)',
      bg: 'var(--primary-light)'
    },
    {
      title: 'Collected',
      desc: 'Sent to secure scanning facility.',
      icon: <Icons.Truck size={28} />,
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      title: 'Digitised',
      desc: 'Scanned using high-speed scanners.',
      icon: <ScanIcon size={28} />,
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    },
    {
      title: 'Distributed',
      desc: 'Digitally sent to assigned examiners.',
      icon: <Icons.Users size={28} />,
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Monitoring',
      desc: 'Live tracking of examiner progress.',
      icon: <Icons.Activity size={28} />,
      color: '#8B5CF6',
      bg: 'rgba(139, 92, 246, 0.1)'
    },
    {
      title: 'Processed',
      desc: 'Automated marking data compilation.',
      icon: <Icons.PieChart size={28} />,
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.1)'
    },
    {
      title: 'Result',
      desc: 'Marks exported and results declared.',
      icon: <Icons.Trophy size={28} />,
      color: '#F43F5E',
      bg: 'rgba(244, 63, 94, 0.1)'
    },
    {
      title: 'Recheck',
      desc: 'Students can request scripts review.',
      icon: <Icons.RefreshCw size={28} />,
      color: '#0EA5E9',
      bg: 'rgba(14, 165, 233, 0.1)'
    }
  ];


  const features = [
    { title: 'Candidate Identity Masking', desc: 'Student name, roll number, and personal details are masked digitally before distribution to evaluators. Barcode-based tracking ensures zero bias.' },
    { title: 'Auto-Totalling & Validation', desc: 'Marks entered per question are summed automatically. The system prevents submission unless all pages are reviewed, eliminating unchecked questions.' },
    { title: 'On-Screen Marking Tools', desc: 'Examiners can place correct/incorrect symbols, partial mark stamps, freehand comments, and text annotations directly on the scanned script.' },
    { title: 'Real-Time Dashboard', desc: 'Controllers and HODs see live progress of every evaluator — scripts pending, under review, and completed — with time-tracking per evaluator.' },
    { title: 'Remote Evaluation Support', desc: 'Evaluators log in securely from any location within a fully encrypted environment, eliminating travel requirements.' },
    { title: 'Multi-Format Export', desc: 'Final marks exported in CSV, Excel, and PDF formats. Compatible with existing ERP and result processing systems via API integration.' },
    { title: 'Student Recheck Portal', desc: 'After result declaration, students can view their evaluated script with annotations. Online recheck requests submitted digitally.' },
    { title: 'Learning Outcomes', desc: 'Map student performance directly to specific educational goals and curriculum standards for deeper academic insights and outcome-based assessment.' },
    { title: 'Script Assignment', desc: 'Intelligently distribute exam scripts to evaluators based on subject expertise, workload, or randomized protocols to ensure maximum efficiency.' },
  ];

  const benefits = [
    { title: 'Zero Logistics Cost', desc: 'No physical script movement between centres. Scanning happens once; everything after is digital.' },
    { title: 'Results in Days, Not Weeks', desc: 'Parallel evaluation by multiple examiners compresses the result cycle from months to a few days.' },
    { title: 'End-to-End Data Security', desc: 'Encrypted storage, two-factor login, role-based access, and audit trails at every step.' },
    { title: 'Bias-Free Evaluation', desc: 'Identity masking ensures evaluators never know whose script they are marking.' },
    { title: 'Deep Performance Insights', desc: 'Evaluate evaluator speed, accuracy trends, and student performance patterns from one dashboard.' },
    { title: 'Eco-Friendly & Paperless', desc: 'Transitioning to digital evaluation eliminates the environmental impact of printing and transporting millions of paper scripts.' },
  ];

  const roles = [
    { role: 'Admin / COE', access: 'Configure exams and subjects • Set marking schemes • Manage user accounts • Control all system settings' },
    { role: 'Department Head', access: 'Monitor evaluator progress live • Generate performance reports • Trigger re-assignment of scripts • Approve final results' },
    { role: 'Evaluator', access: 'View and mark assigned scripts • Add annotations and comments • Enter per-question marks • Submit after full review' },
    { role: 'Scanning Incharge', access: 'Manage high-speed scanning • Generate secure PDF batches • Handle bulk ZIP uploading • Perform digitisation corrections' },
    { role: 'OMR Validator', access: 'Responsible for correcting errors on the student information sheet manually' },
    { role: 'Student', access: 'View evaluated script online • See examiner annotations • Submit recheck request • Track recheck status' },
  ];
  const osmFaqs = [
    {
      question: "What is OSM and how does it work?",
      answer: "OSM (Onscreen Marking) allows evaluators to check scanned answer sheets digitally, eliminating the need for physical paper handling."
    },
    {
      question: "Can multiple evaluators check the same answer sheet?",
      answer: "Yes, the system supports multi-level evaluation, rechecking, and moderation workflows for improved accuracy."
    },
    {
      question: "How secure is the evaluation process?",
      answer: "The platform includes encrypted access, role-based permissions, and complete tracking of evaluator activity."
    },
    {
      question: "Does OSM reduce evaluation time?",
      answer: "Yes, it significantly reduces evaluation time by enabling parallel checking and automated mark compilation."
    },
    {
      question: "Can evaluators work remotely?",
      answer: "Yes, evaluators can securely access the system from anywhere, enabling remote and distributed evaluation."
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO
        title="On-Screen Marking (OSM) Solution | Digital Script Evaluation"
        description="Digitize answer sheet evaluation with eVAL On-Screen Marking (OSM). Secure, bias-free, and automated mark compilation for descriptive examinations."
        keywords="On-Screen Marking, OSM Solution, Digital Answer Sheet Evaluation, Examiner Marking Software, Descriptive Exam Marking"
      />
      {/* Hero / Overview */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <span className="badge">Descriptive Evaluation</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>On-Screen <span className="gradient-text">Marking Solution</span></h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                eVAL On-Screen Marking (OSM) Solution is a secure digital evaluation system designed to simplify and speed up the assessment of answer sheets. It enables examiners to evaluate scanned answer scripts directly on screen, eliminating the need for manual paper-based checking.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--muted-foreground)', fontWeight: '500', marginBottom: 0 }}>
                A key strength of the eVAL On-Screen Marking Solution is its ability to support both Objective and Subjective answer sheets on a single platform. OSM transforms the marking and scoring of descriptive answer scripts into a precise, simple, secure, and efficient process — eliminating logistical, administrative, and accuracy challenges of traditional paper-based evaluation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/book-demo" className="btn btn-primary">Request a Pilot</Link>
                <a href="#workflow" className="btn btn-outline">See the Workflow</a>

              </div>
            </div>
            <div style={{ position: 'relative', maxWidth: '680px', marginLeft: 'auto' }}>
              <img src="/assets/images/OSMScreen.jpeg" alt="On-Screen Marking" style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Workflow */}
      <section id="workflow" className="section-padding" style={{ background: 'var(--muted)' }}>

        <div className="container">
          <SectionHeader
            title={<>The <span className="gradient-text">8-Step</span> OSM Workflow</>}
          />

          {/* Horizontal Flow Layout */}
          <div className="workflow-h-container">
            {/* Connecting Path (SVG Arcs) */}
            <div className="workflow-h-path">
              <svg width="100%" height="120" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
                {/* Arcs 1 to 8 */}
                {[
                  { d: "M 50,60 C 50,10 175,10 175,60", color: 'var(--primary)' },
                  { d: "M 175,60 C 175,110 300,110 300,60", color: '#6366F1' },
                  { d: "M 300,60 C 300,10 425,10 425,60", color: '#EC4899' },
                  { d: "M 425,60 C 425,110 550,110 550,60", color: '#F59E0B' },
                  { d: "M 550,60 C 550,10 675,10 675,60", color: '#8B5CF6' },
                  { d: "M 675,60 C 675,110 800,110 800,60", color: '#10B981' },
                  { d: "M 800,60 C 800,10 925,10 925,60", color: '#F43F5E' }
                ].map((arc, i) => (
                  <motion.path
                    key={i}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    d={arc.d}
                    stroke={arc.color}
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                ))}

                {/* Animated Particles */}
                {[112, 237, 362, 487, 612, 737, 862].map((x, i) => (
                  <motion.circle
                    key={i}
                    r="4"
                    fill={i % 2 === 0 ? 'var(--primary)' : '#6366F1'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0], x: [x - 30, x + 30] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    cx={x}
                    cy={i % 2 === 0 ? 15 : 105}
                  />
                ))}
              </svg>
            </div>

            <div className="workflow-h-steps">
              {steps.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`workflow-h-item ${i % 2 === 0 ? 'top-text' : 'bottom-text'}`}
                  style={{ width: '12.5%' }}
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
                    <div className="h-step-number" style={{ background: w.color }}>{i + 1}</div>
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
              max-width: 1280px;
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
              margin: 3.5rem 0;
            }

            .h-step-circle {
              width: 75px;
              height: 75px;
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
              width: 24px;
              height: 24px;
              border-radius: 50%;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              font-size: 0.65rem;
              border: 2px solid white;
              box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }

            .h-step-content {
              height: 110px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              transition: 0.3s;
            }

            .top-text .h-step-content {
              justify-content: flex-end;
              padding-bottom: 1.5rem;
            }

            .bottom-text .h-step-content {
              justify-content: flex-start;
              padding-top: 1.5rem;
            }

            .h-step-content h3 {
              font-size: 0.875rem;
              margin-bottom: 0.3rem;
              color: var(--secondary);
              font-weight: 800;
            }

            .h-step-content p {
              font-size: 0.725rem;
              color: var(--muted-foreground);
              margin: 0;
              line-height: 1.35;
              max-width: 130px;
            }

            @media (max-width: 1100px) {
              .workflow-h-steps {
                flex-direction: column;
                gap: 3rem;
                position: relative;
                padding-left: 1.5rem;
              }
              .workflow-h-steps::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 61px;
                width: 2px;
                background: linear-gradient(to bottom, var(--primary), #6366F1, #EC4899, #F59E0B, #8B5CF6, #10B981, #F43F5E, #0EA5E9);
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

      {/* Key Features */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title={<>Power <span className="gradient-text">Features</span></>}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {features.map((f, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '2.5rem', borderTop: '4px solid var(--primary)', background: 'var(--muted)' }}>
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
          <SectionHeader
            title={<>Key <span className="gradient-text">Benefits</span></>}
          />

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
      <section className="section-padding" style={{ background: 'white', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <SectionHeader
            title={<>Role-Based <span className="gradient-text">Access</span></>}
          />

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '2rem' 
          }}>
            {roles.map((r, i) => (
              <div key={i} style={{ background: 'var(--muted)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.role}</div>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', color: 'var(--muted-foreground)', fontSize: '0.9375rem', lineHeight: '1.8' }}>
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
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Eliminate the logistical nightmare</h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)' }}>The most secure and transparent on-screen marking system for descriptive exams.</p>
          <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Request Demo</Link>
        </div>
      </section>
      {/* FAQ */}
      <FAQ faqs={osmFaqs} />

    </div>
  );
};

export default OSMPage;

