import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import SectionHeader from '@/components/common/SectionHeader';

const OlympiadPage = () => {
  const keyFeatures = [
    {
      title: 'Student & School Registration',
      text: 'Easy onboarding for schools and individual students. Bulk registration support for institutions with secure profile management and unique login credentials.',
      icon: <Icons.UserPlus size={28} />,
      color: '#4F46E5'
    },
    {
      title: 'Online Mock Examination',
      text: 'Practice tests with real exam simulation. Timer-based assessments with instant result generation and performance tracking for students.',
      icon: <Icons.PlayCircle size={28} />,
      color: '#10B981'
    },
    {
      title: 'Study Material Upload',
      text: 'Upload PDFs, videos, and notes. Organized subject-wise content accessible anytime, anywhere. Supports teacher and admin uploads.',
      icon: <Icons.BookOpen size={28} />,
      color: '#F59E0B'
    },
    {
      title: 'Logistics Management',
      text: 'Efficient coordination for offline exams. Center allocation, scheduling, and resource/material tracking for a smooth operational workflow.',
      icon: <Icons.Truck size={28} />,
      color: '#EC4899'
    },
    {
      title: 'Attendance Sheet Generation',
      text: 'Automated attendance sheets for exam centers. Downloadable and printable formats with real-time tracking of absent students.',
      icon: <Icons.ClipboardList size={28} />,
      color: '#8B5CF6'
    },
    {
      title: 'Admit Card Generation',
      text: 'Auto-generated admit cards in customizable formats. QR/Barcode integration support with easy download options for students.',
      icon: <Icons.Contact size={28} />,
      color: '#06B6D4'
    },
    {
      title: 'OMR-Based Examination',
      text: 'Comprehensive support for offline exams using OMR sheets. Accurate scanning, evaluation, and fast result generation with minimized errors.',
      icon: <Icons.Scan size={28} />,
      color: '#F43F5E'
    },
    {
      title: 'Online Examination System',
      text: 'Secure browser-based exams with anti-cheating mechanisms. Auto submission and evaluation, scalable for a large number of users.',
      icon: <Icons.Globe size={28} />,
      color: '#3B82F6'
    },
    {
      title: 'Reports & Analytics',
      text: 'Detailed performance analysis for students and school-level comparative analytics for institutions. Progress tracking and student ranking.',
      icon: <Icons.BarChart3 size={28} />,
      color: '#10B981'
    },
    {
      title: 'Certificate Generator',
      text: 'Automated creation of customizable rank and participation certificates. Supports bulk generation and instant download.',
      icon: <Icons.Award size={28} />,
      color: '#F59E0B'
    }
  ];

  const benefits = [
    {
      target: "For Students",
      items: [
        { title: "Convenient Access", desc: "Participate in exams anytime, anywhere (online mode)." },
        { title: "Better Preparation", desc: "Practice with mock tests and structured study materials." },
        { title: "Instant Feedback", desc: "Get quick results and performance insights." },
        { title: "Improved Performance", desc: "Identify strengths and weaknesses with detailed analytics." },
        { title: "Hassle-Free Experience", desc: "Easy registration, admit cards, and result access." }
      ],
      icon: <Icons.GraduationCap size={40} />,
      gradient: "linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)"
    },
    {
      target: "For Schools & Institutions",
      items: [
        { title: "Centralized Management", desc: "Manage all students, exams, and reports from one platform." },
        { title: "Time-Saving Automation", desc: "Reduce manual work in registration, attendance, and evaluation." },
        { title: "Accurate Results", desc: "Error-free OMR and online evaluation systems." },
        { title: "Performance Tracking", desc: "Monitor student progress with detailed reports." },
        { title: "Scalable Solution", desc: "Handle small to large-scale Olympiad exams efficiently." }
      ],
      icon: <Icons.School size={40} />,
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)"
    },
    {
      target: "For Exam Organizers",
      items: [
        { title: "End-to-End Solution", desc: "From registration to certification, everything in one place." },
        { title: "Dual Mode Flexibility", desc: "Conduct both online and offline (OMR-based) exams." },
        { title: "Efficient Logistics", desc: "Simplified exam center and resource management." },
        { title: "Real-Time Insights", desc: "Access live data, reports, and analytics." },
        { title: "Secure System", desc: "Ensures data protection and fair examination processes." }
      ],
      icon: <Icons.Settings size={40} />,
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
    }
  ];

  const operationalBenefits = [
    { title: "Reduced Paperwork", desc: "Digitization of processes minimizes manual documentation.", icon: <Icons.FileText /> },
    { title: "Faster Execution", desc: "Automates repetitive tasks and speeds up workflows.", icon: <Icons.Zap /> },
    { title: "Cost-Effective", desc: "Saves operational and administrative costs.", icon: <Icons.DollarSign /> },
    { title: "Eco-Friendly", desc: "Promotes paperless examinations (online mode).", icon: <Icons.Leaf /> },
    { title: "Customizable", desc: "Adaptable to different exam formats and requirements.", icon: <Icons.Layers /> }
  ];

  const faqs = [
    {
      question: "Can we conduct Olympiads in both online and offline modes?",
      answer: "Yes, our portal is a dual-mode platform that supports both secure browser-based online exams and OMR-based offline assessments simultaneously."
    },
    {
      question: "How secure is the online examination system?",
      answer: "We employ advanced anti-cheating mechanisms, secure browser locks, and AI-proctoring options to ensure a fair and transparent examination process."
    },
    {
      question: "Is bulk registration available for large schools?",
      answer: "Absolutely. Our system supports bulk student onboarding via Excel/CSV uploads, allowing institutions to register thousands of students in minutes."
    },
    {
      question: "Can we customize the admit cards and certificates?",
      answer: "Yes, we provide customizable templates for both admit cards and certificates where you can add your branding, QR codes, and specific student details."
    }
  ];

  return (
    <div className="olympiad-page" style={{ paddingTop: 'var(--nav-height)', overflowX: 'hidden' }}>
      <SEO
        title="Olympiad Portal | Complete Exam Management System"
        description="Olympiad Portal simplifies the entire examination lifecycle—from registration to result analysis for both online and offline exams."
        keywords="Olympiad Management, Online Exam Portal, OMR Exam System, Exam Logistics, Certificate Generator, Result Analytics"
      />

      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, white 100%)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <Reveal>
                <span className="badge">All-in-One Solution</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.75rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  Olympiad <span className="gradient-text">Portal</span>
                </h1>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--foreground)', marginBottom: '1.5rem', fontWeight: 600 }}>
                  Complete Digital & Offline Examination Management System
                </h2>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '2.5rem' }}>
                  Olympiad Portal is a comprehensive platform designed to simplify the entire examination lifecycle—from registration to result analysis. Whether you are conducting online assessments or OMR-based offline exams, our system ensures a smooth, transparent, and efficient process.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Get Started Today</Link>
                  <Link to="/book-demo" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Schedule a Demo</Link>
                </div>
              </Reveal>
            </div>
            <div style={{ position: 'relative' }}>
              <Reveal delay={0.2}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <img
                    src="/assets/images/olympiad_hero.webp"
                    alt="Olympiad Portal Dashboard"
                    style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', border: '1px solid var(--border)' }}
                  />
                  {/* Decorative Elements */}
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--primary)', borderRadius: '50%', opacity: 0.1, zIndex: -1 }}></div>
                  <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', background: '#10B981', borderRadius: '50%', opacity: 0.1, zIndex: -1 }}></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <SectionHeader
            badge="Key Features"
            title={<>Everything You Need for <span className="gradient-text">Success</span></>}
            text="A modular approach to examination management, tailored for efficiency."
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {keyFeatures.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="feature-card" style={{
                  background: 'white',
                  padding: '1.75rem',
                  borderRadius: '1.5rem',
                  border: '1px solid var(--border)',
                  height: '100%',
                  transition: '0.3s',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '1rem',
                    background: `${f.color}15`,
                    color: f.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{f.title}</h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .feature-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          }
        `}</style>
      </section>

      {/* Benefits Section */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <SectionHeader
            badge="Ecosystem Benefits"
            title={<>Value for Every <span className="gradient-text">Stakeholder</span></>}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2.5rem' }}>
            {benefits.map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ background: 'white', borderRadius: '2rem', overflow: 'hidden', height: '100%', border: '1px solid var(--border)' }}>
                  <div style={{ background: b.gradient, padding: '3rem', color: 'white', textAlign: 'center' }}>
                    <div style={{ marginBottom: '1rem', display: 'inline-block' }}>{b.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{b.target}</h3>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    {b.items.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: idx === b.items.length - 1 ? 0 : '1.5rem' }}>
                        <div style={{ color: '#10B981', flexShrink: 0 }}><Icons.CheckCircle2 size={20} /></div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h4>
                          <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Benefits */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{
            background: 'var(--foreground)',
            borderRadius: '3rem',
            padding: 'clamp(2rem, 5vw, 5rem)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}>Operational Excellence</span>
                <h2 style={{ color: 'white', marginTop: '1rem' }}>Streamlined <span className="gradient-text">Operations</span></h2>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                {operationalBenefits.map((ob, i) => (
                  <div key={i} style={{
                    flex: '1',
                    minWidth: '200px',
                    textAlign: 'center',
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                      {React.cloneElement(ob.icon, { size: 32 })}
                    </div>
                    <h4 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>{ob.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{ob.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} />

      {/* Final CTA */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem' }}>Get Started <span className="gradient-text">Today</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', marginBottom: '3rem' }}>
              Streamline your Olympiad exams with a powerful, all-in-one platform. Contact us to schedule a demo or learn more.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>Contact Us</Link>
              <Link to="/book-demo" className="btn btn-outline" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>Request a Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OlympiadPage;
