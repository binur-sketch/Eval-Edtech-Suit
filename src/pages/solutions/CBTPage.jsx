import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import SectionHeader from '@/components/common/SectionHeader';



const CBTPage = () => {
  const steps = [
    {
      title: 'Registration',
      desc: 'Online registration with photo/signature upload.',
      icon: <Icons.UserPlus size={32} />,
      color: 'var(--primary)',
      bg: 'var(--primary-light)'
    },
    {
      title: 'Center Setup',
      desc: 'Infrastructure and seating capacity config.',
      icon: <Icons.Building size={32} />,
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      title: 'Allocation',
      desc: 'Auto-allocation based on session availability.',
      icon: <Icons.MapPin size={32} />,
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    },
    {
      title: 'Admit Cards',
      desc: 'Automated generation with exam instructions.',
      icon: <Icons.FileText size={32} />,
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Exam Conduct',
      desc: 'Secure CBT execution in locked environment.',
      icon: <Icons.Monitor size={32} />,
      color: '#8B5CF6',
      bg: 'rgba(139, 92, 246, 0.1)'
    },
    {
      title: 'Results',
      desc: 'Auto-evaluation and performance reports.',
      icon: <Icons.ClipboardCheck size={32} />,
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.1)'
    },
  ];


  const features = [
    {
      title: 'Candidate Registration & Management',
      icon: <Icons.Users />,
      items: ['Online candidate registration portal', 'Bulk candidate upload', 'Candidate profile management', 'Photo & signature upload', 'Document verification support', 'Application status tracking']
    },
    {
      title: 'Exam Center Management',
      icon: <Icons.MapPin />,
      items: ['Multiple exam center creation', 'Center capacity configuration', 'Location-wise center mapping', 'Center admin login & infrastructure allocation', 'Center availability tracking']
    },
    {
      title: 'Computer Based Test Engine',
      icon: <Icons.Zap />,
      items: ['Multiple question types (MCQ, descriptive, etc.)', 'Section-wise exam structure', 'Timer-based exam control with auto-save functionality', 'Question randomization', 'Negative marking support', 'Multi-language support']
    },
    {
      title: 'Security Features',
      icon: <Icons.Lock />,
      items: ['Secure login authentication with role-based access control', 'Browser lockdown mode', 'Question encryption', 'Auto logout on inactivity', 'IP-based restriction and audit trail logs']
    },
    {
      title: 'Result Processing',
      icon: <Icons.CheckCircle2 />,
      items: ['Automatic evaluation with instant result generation', 'Score calculation and rank generation', 'Cut-off management and merit list creation']
    },
    {
      title: 'Reports & Analytics',
      icon: <Icons.BarChart2 />,
      items: ['Candidate performance report', 'Center-wise and session-wise performance reports', 'Attendance report and question analysis report', 'Export in Excel/PDF format']
    },
  ];
  const cbtFaqs = [
    {
      question: "What types of questions are supported in CBT?",
      answer: "The system supports MCQs, descriptive questions, case studies, and multimedia-based questions."
    },
    {
      question: "Can CBT exams be conducted remotely?",
      answer: "Yes, CBT can be conducted remotely with optional AI proctoring for secure monitoring."
    },
    {
      question: "How is result processing handled?",
      answer: "Objective questions are evaluated instantly, while descriptive answers can be assessed manually or via onscreen marking."
    },
    {
      question: "Is the platform scalable for large exams?",
      answer: "Yes, it is designed to handle thousands to lakhs of candidates simultaneously."
    },
    {
      question: "Can we schedule and manage multiple exams?",
      answer: "Yes, you can easily schedule, manage, and monitor multiple exams from a single dashboard."
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO
        title="Computer Based Test (CBT) Platform | Online Exam System"
        description="Secure and scalable Computer Based Test (CBT) platform for entrance exams, corporate assessments, and certifications. Feature-rich online examination system."
        keywords="CBT Platform, Online Exam Software, Computer Based Test System, Secure Online Assessment, Entrance Exam Software"
      />
      {/* Hero / Overview */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <span className="badge">Overview</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>Center Based <span className="gradient-text">Examination Solution</span></h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                A comprehensive platform designed to conduct secure, scalable, and controlled computer-based tests at designated examination centers. This solution ensures a standardized testing environment, minimizes malpractice, and allows organizations to conduct large-scale examinations efficiently.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--muted-foreground)', fontWeight: '500', marginBottom: 0 }}>
                It is suitable for universities, recruitment boards, certification bodies, and government organizations that require reliable exam execution across multiple locations. It ensures a fast, secure, and efficient process — eliminating logistical and administrative challenges.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Institutional Enquiry</Link>
                <a href="#workflow" className="btn btn-outline">See the Workflow</a>

              </div>
            </div>
            <div style={{ position: 'relative', maxWidth: '680px', marginLeft: 'auto' }}>
              <img src="/assets/images/CBT.png" alt="CBT Platform" style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </section>
      {/* Process Flow */}
      <section id="workflow" className="section-padding" style={{ background: 'var(--muted)' }}>

        <div className="container">
          <SectionHeader
            title={<>The CBT <span className="gradient-text">Process Flow</span></>}
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
                  transition={{ duration: 1, delay: 0.2 }}
                  d="M 100,60 C 100,10 260,10 260,60"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 2-3 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  d="M 260,60 C 260,110 420,110 420,60"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 3-4 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  d="M 420,60 C 420,10 580,10 580,60"
                  stroke="#EC4899"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 4-5 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  d="M 580,60 C 580,110 740,110 740,60"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {/* Arc 5-6 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.0 }}
                  d="M 740,60 C 740,10 900,10 900,60"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Animated Particles */}
                {[180, 340, 500, 660, 820].map((x, i) => (
                  <motion.circle
                    key={i}
                    r="4"
                    fill={i % 2 === 0 ? 'var(--primary)' : '#6366F1'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0], x: [x - 50, x + 50] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
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
              max-width: 1200px;
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
              width: 80px;
              height: 80px;
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
              width: 26px;
              height: 26px;
              border-radius: 50%;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              font-size: 0.7rem;
              border: 2px solid white;
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
              font-size: 1rem;
              margin-bottom: 0.4rem;
              color: var(--secondary);
              font-weight: 800;
            }

            .h-step-content p {
              font-size: 0.8rem;
              color: var(--muted-foreground);
              margin: 0;
              line-height: 1.4;
            }

            @media (max-width: 950px) {
              .workflow-h-steps {
                flex-direction: column;
                gap: 3rem;
              }
              .workflow-h-path {
                display: none;
              }
              .workflow-h-item {
                width: 100% !important;
                flex-direction: row !important;
                text-align: left;
                gap: 1.5rem;
              }
              .h-step-content {
                height: auto;
                text-align: left;
              }
              .top-text, .bottom-text {
                flex-direction: row !important;
              }
              .h-step-visual {
                margin: 0;
              }
            }
          `}</style>

        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <SectionHeader
            title={<>Key <span className="gradient-text">Features</span></>}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {features.map((f, i) => (
              <div key={i} className="card" style={{ padding: '3rem', background: 'var(--muted)' }}>
                <div style={{ color: 'white', padding: '12px', background: 'var(--primary-dark)', borderRadius: '12px', display: 'inline-block', marginBottom: '1.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{f.title}</h3>
                <ul style={{ display: 'grid', gap: '0.875rem', padding: 0, listStyle: 'none' }}>
                  {f.items.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>
                      <Icons.ChevronRight size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                      <span style={{ lineHeight: '1.5' }}>{item}</span>
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
          <h2 style={{ fontSize: '2.5rem' }}>Build a Standardized Testing Environment</h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>The choice for universities, recruitment boards, and government organizations looking to execute reliable exams across multiple locations.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 4rem' }}>Enquire for Partnerships</Link>
        </div>
      </section>
      {/* FAQ */}
      <FAQ faqs={cbtFaqs} />
    </div>
  );
};

export default CBTPage;


