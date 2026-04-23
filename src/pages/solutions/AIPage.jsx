import * as Icons from '@/components/LucideFix';
import React from 'react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';

const AIPage = () => {
  const howItWorks = [
    { title: 'Pre-Exam Identity Verification', icon: <Icons.UserCheck />, desc: "Before the exam begins, the AI system verifies the candidate's identity using facial recognition matched against their registered photograph. ID scanning and biometric analysis confirm the right individual is seated." },
    { title: 'Real-Time Facial Monitoring', icon: <Icons.ScanEye />, desc: 'AI continuously monitors the candidate\'s face throughout the exam. It detects the presence of multiple faces, candidate absence from the camera frame, and unusual head or eye movements.' },
    { title: 'Screen & Browser Monitoring', icon: <Icons.Lock />, desc: 'The system prevents tab-switching, restricts access to unauthorised websites and applications, and enforces full-screen mode. Any attempt to exit is flagged and the exam window is restored automatically.' },
    { title: 'Audio Surveillance', icon: <Icons.Mic />, desc: 'AI monitors the microphone feed to detect suspicious conversations, coaching from others, or background voices that may indicate external assistance.' },
    { title: 'Eye Movement Tracking', icon: <Icons.Eye />, desc: 'Tracks candidate eye direction (looking left, right, below) to identify patterns that may suggest reference to external materials or other screens.' },
    { title: 'Device Detection', icon: <Icons.Smartphone />, desc: 'Detects the use of electronic devices such as mobile phones during the exam and flags such incidents in real time.' },
    { title: 'Automated Incident Flagging', icon: <Icons.AlertTriangle />, desc: 'All suspicious activities are automatically logged, timestamped, and flagged for review. Short video clips of flagged incidents are generated for investigation.' },
    { title: 'Post-Exam Reports', icon: <Icons.FileCheck />, desc: 'Detailed AI-generated reports highlighting all potential irregularities are provided to the exam authority for final review and decision-making.' },
  ];

  const advantages = [
    { title: '24/7 Availability', desc: 'Exams can be scheduled and accessed at any time, in any time zone, removing the need for synchronised physical attendance.' },
    { title: 'Cost Efficiency', desc: 'Significantly reduces the cost of hiring, training, and managing large teams of human invigilators for mass examinations.' },
    { title: 'Bias-Free Evaluation', desc: 'AI applies the same rules uniformly to every candidate, eliminating human bias, inconsistency, or fatigue in monitoring.' },
    { title: 'Seamless LMS Integration', desc: 'Easily integrates with existing Learning Management Systems and examination portals without disrupting current workflows.' },
    { title: 'Enhanced Security & Transparency', desc: 'Creates detailed audit trails for every exam session, supporting dispute resolution and ensuring full accountability.' },
    { title: 'Massive Scalability', desc: 'Monitors thousands of candidates simultaneously across geographies without any drop in monitoring quality or system performance.' },
    { title: 'Remote Accessibility', desc: 'Candidates can take proctored exams from their home, office, or any location — removing the need for physical examination halls.' },
    { title: 'Flexible Proctoring Modes', desc: 'Supports fully automated AI proctoring, AI-assisted live human proctoring, and record-and-review modes for different exam security levels.' },
  ];

  const detailedFeatures = [
    {
      title: 'AI Proctoring Features',
      items: ['AI-based face detection and recognition', 'Multiple face detection alerts', 'Face mismatch detection', 'Candidate absence detection', 'Suspicious movement tracking', 'Eye movement monitoring', 'Head pose detection']
    },
    {
      title: 'Live Monitoring Features',
      items: ['Live candidate monitoring dashboard', 'Proctor intervention capability', 'Real-time alerts and notifications', 'Candidate activity tracking', 'Session recording']
    },
    {
      title: 'Video & Audio Monitoring',
      items: ['Continuous webcam recording', 'Microphone monitoring', 'Background noise detection', 'Audio activity alerts']
    },
    {
      title: 'Screen & Browser Security',
      items: ['Full screen recording and screen switching detection', 'Multiple monitor detection', 'Unauthorized application detection', 'Browser tab switching alerts', 'Secure browser lockdown (disable copy-paste, right-click, etc.)']
    },
    {
      title: 'Candidate Authentication',
      items: ['Face authentication before exam', 'ID card verification', 'Photo capture during exam', 'OTP-based login (optional)']
    },
    {
      title: 'Reporting & Analytics',
      items: ['Proctoring summary report', 'Violation logs', 'Session recording playback', 'Candidate risk level scoring', 'Detailed audit trail']
    }
  ];
  const aiFaqs = [
    {
      question: "How does AI proctoring prevent cheating?",
      answer: "The system uses AI to monitor candidates via webcam, microphone, and screen activity to detect suspicious behavior in real time."
    },
    {
      question: "What kind of violations can be detected?",
      answer: "It detects multiple faces, absence from screen, mobile usage, tab switching, and unusual movements."
    },
    {
      question: "Is human intervention required during proctoring?",
      answer: "AI handles real-time monitoring, but live proctors can also be added for hybrid supervision if required."
    },
    {
      question: "Does it work on low bandwidth internet?",
      answer: "Yes, the system is optimized for low bandwidth conditions while maintaining monitoring accuracy."
    },
    {
      question: "Are the exam recordings stored?",
      answer: "Yes, all sessions are recorded and stored securely for audit and review purposes."
    }
  ];



  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="AI Proctoring Software | Secure Remote Exam Monitoring"
        description="Prevent cheating in online exams with AI Proctoring. Facial recognition, eye tracking, and browser lockdown for 100% secure remote assessments."
        keywords="AI Proctoring, Remote Invigilation, Online Exam Security, Proctoring Software, Facial Recognition Exam, Anti-Cheating Software"
      />
      {/* Hero / Overview */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(2rem, 8vw, 6rem)', alignItems: 'center' }}>
            <div>
              <span className="badge">AI-Powered Integrity</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>AI-Based <span className="gradient-text">Proctored</span> Exam Solution</h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
                The eVAL AI-Based Proctored Exam solution brings artificial intelligence to the forefront of exam integrity. Instead of relying solely on human invigilators, advanced AI systems monitor candidates in real time during online examinations — detecting suspicious behaviour, verifying identity, and generating detailed audit reports, all without requiring physical supervision.
              </p>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', marginTop: '2rem' }}>
                <p style={{ margin: 0, fontWeight: '600', color: 'var(--foreground)', fontSize: '0.9375rem' }}>
                  AI proctoring is particularly valuable for high-stakes examinations such as university entrance tests, government recruitment exams, professional certifications, and competitive assessments where maintaining absolute integrity is critical. The system scales to thousands of simultaneous candidates while maintaining consistency and fairness.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/book-demo" className="btn btn-primary">Request a Live Demo</Link>
                <Link to="/contact" className="btn btn-outline">Check Scalability</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/assets/images/ai_proctoring.png" alt="AI Proctoring Dashboard" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>How <span className="gradient-text">AI Proctoring</span> Works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {howItWorks.map((h, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem', background: 'var(--muted)' }}>
                <div style={{ color: 'white', padding: '12px', background: 'var(--primary-dark)', borderRadius: '12px', display: 'inline-block', marginBottom: '1.5rem' }}>{h.icon}</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>{h.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2>Key <span className="gradient-text">Advantages</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            {advantages.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'white', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--border)', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <Icons.Check size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{a.title}</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: 'clamp(2rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)', borderRadius: '3rem' }}>
            <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '4rem' }}>Detailed <span className="gradient-text">Feature List</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
              {detailedFeatures.map((featureBlock, idx) => (
                <div key={idx}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>{featureBlock.title}</h4>
                  <ul style={{ display: 'grid', gap: '1rem', padding: 0, listStyle: 'none', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
                    {featureBlock.items.map((item, idxi) => (
                      <li key={idxi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', lineHeight: '1.5' }}>
                        <Icons.ChevronRight size={14} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Secure your examinations with AI</h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', color: 'var(--muted-foreground)' }}>The most robust AI proctoring engine for universities, recruitment boards, and professional certifications.</p>
          <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Experience the Integrity</Link>
        </div>
      </section>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      {/* FAQ */}
      <FAQ faqs={aiFaqs} />
    </div>
  );
};

export default AIPage;
