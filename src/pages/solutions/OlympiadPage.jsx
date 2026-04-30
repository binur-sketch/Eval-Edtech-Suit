import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import SectionHeader from '@/components/common/SectionHeader';

const OlympiadPage = () => {
  const steps = [
    {
      title: 'Registration',
      icon: <Icons.UserPlus size={32} />,
      desc: 'Seamless school and individual student onboarding.',
      color: 'var(--primary)',
      bg: 'var(--primary-light)'
    },
    {
      title: 'Question Bank',
      icon: <Icons.BookOpen size={32} />,
      desc: 'Curated sets for varied difficulty levels.',
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      title: 'Examination',
      icon: <Icons.Monitor size={32} />,
      desc: 'Hybrid delivery: Online CBT or Offline OMR.',
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    },
    {
      title: 'Evaluation',
      icon: <Icons.Cpu size={32} />,
      desc: 'Instant AI-driven or scanning-based marking.',
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Merit List',
      icon: <Icons.Trophy size={32} />,
      desc: 'Transparent ranking and reward management.',
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.1)'
    }
  ];

  const keyFeatures = [
    { title: 'Multi-Level Hierarchy', text: 'Manage School-level, Zonal-level, and International-level rankings seamlessly.', icon: <Icons.Layers size={28} /> },
    { title: 'Robust Proctoring', text: 'AI-enabled anti-cheating measures for home-based Olympiad exams.', icon: <Icons.ShieldCheck size={28} /> },
    { title: 'Offline Compatibility', text: 'Full support for OMR-based offline exams in remote school locations.', icon: <Icons.Scan size={28} /> },
    { title: 'Scholarship Engine', text: 'Automated scholarship eligibility and reward disbursement tracking.', icon: <Icons.GraduationCap size={28} /> },
    { title: 'Detailed Analytics', text: 'Topic-wise performance breakdown for every participating student.', icon: <Icons.PieChart size={28} /> },
    { title: 'Bulk Certificates', text: 'Automated generation and distribution of participation and merit certificates.', icon: <Icons.Award size={28} /> },
    { title: 'Question Security', text: 'Encrypted question paper distribution to prevent paper leaks.', icon: <Icons.Lock size={28} /> },
    { title: 'Multilingual Support', text: 'Deliver exams in multiple regional and international languages.', icon: <Icons.Languages size={28} /> }
  ];

  const olympiadFaqs = [
    {
      question: "Can we conduct Olympiads in both online and offline modes?",
      answer: "Yes, eVAL supports a hybrid model where some schools can opt for OMR-based offline exams while individual students can take the exam online via our CBT platform."
    },
    {
      question: "How do you handle zonal and national rankings?",
      answer: "Our engine automatically calculates rankings based on pre-defined criteria (marks, time taken, age-group) across various geographic levels instantly."
    },
    {
      question: "Is the platform scalable for millions of students?",
      answer: "Absolutely. Our cloud infrastructure is designed to handle high-concurrency exams with over 100,000+ simultaneous test-takers."
    },
    {
      question: "Can we integrate our own question bank?",
      answer: "Yes, you can securely upload your question bank in various formats, which our system will then use to generate randomized sets."
    }
  ];

  return (
    <div className="olympiad-page" style={{ paddingTop: 'var(--nav-height)', overflowX: 'hidden' }}>
      <SEO
        title="Olympiad Exam Management Solution | eVAL EdTech"
        description="End-to-end management for National and International Olympiads. From registration to merit list generation, eVAL provides a secure, scalable platform."
        keywords="Olympiad Management, Online Olympiad Platform, OMR Olympiad, Merit List Generation, Scholarship Management"
      />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, white 100%)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <span className="badge">Institutional Grade Excellence</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>Complete <span className="gradient-text">Olympiad</span> Management</h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                Empower your Olympiad exams with eVAL's robust end-to-end platform. We provide the infrastructure for registration, question generation, delivery, and automated merit ranking.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
                <a href="#features" className="btn btn-outline">Explore Features</a>
              </div>
            </div>
            <div style={{ position: 'relative', maxWidth: '680px', marginLeft: 'auto' }}>
              <img src="/assets/images/olympiad_hero.png" alt="Olympiad Management" style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Step Process */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <SectionHeader
            badge="The Lifecycle"
            title={<>End-to-End <span className="gradient-text">Excellence</span></>}
          />
          <div className="workflow-h-container">
            <div className="workflow-h-path">
              <svg width="100%" height="120" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  d="M 100,60 H 900"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.2"
                />
              </svg>
            </div>
            <div className="workflow-h-steps">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="workflow-h-item"
                  style={{ width: '20%' }}
                >
                  <div className="h-step-visual">
                    <div className="h-step-circle" style={{ borderColor: s.color }}>
                      <div className="h-step-icon" style={{ color: s.color, background: s.bg }}>
                        {s.icon}
                      </div>
                    </div>
                    <div className="h-step-number" style={{ background: s.color }}>{i + 1}</div>
                  </div>
                  <div className="h-step-content" style={{ height: 'auto' }}>
                    <h3 style={{ fontSize: '1rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.75rem' }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .workflow-h-container { position: relative; width: 100%; max-width: 1100px; margin: 0 auto; padding: 2rem 0; }
          .workflow-h-path { position: absolute; top: 50px; left: 0; right: 0; height: 120px; z-index: 0; }
          .workflow-h-steps { display: flex; justify-content: space-between; align-items: flex-start; position: relative; z-index: 1; }
          .workflow-h-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
          .h-step-visual { position: relative; margin-bottom: 1.5rem; }
          .h-step-circle { width: 80px; height: 80px; border-radius: 50%; border: 2px solid var(--primary); display: flex; align-items: center; justify-content: center; background: white; }
          .h-step-icon { width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
          .h-step-number { position: absolute; bottom: -2px; right: -2px; width: 24px; height: 24px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.7rem; border: 2px solid white; }
          @media (max-width: 768px) {
            .workflow-h-steps { flex-direction: column; gap: 2rem; align-items: center; }
            .workflow-h-path { display: none; }
          }
        `}</style>
      </section>

      {/* Key Features */}
      <section id="features" className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <SectionHeader
            badge="Solutions"
            title={<>Specialized <span className="gradient-text">Capabilities</span></>}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {keyFeatures.map((f, i) => (
              <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--border)' }} className="reveal hover-lift">
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{f.icon}</div>
                <h4 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>{f.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={olympiadFaqs} />

      {/* Final CTA */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: '4rem', borderRadius: '3rem', textAlign: 'center' }}>
            <h2>Ready to Host Your <span className="gradient-text">Olympiad?</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: '1.5rem 0 3rem' }}>Partner with eVAL to deliver a world-class examination experience.</p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OlympiadPage;
