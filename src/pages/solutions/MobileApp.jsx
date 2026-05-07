import React from 'react';
import { 
  Smartphone, 
  Zap, 
  UploadCloud, 
  Target, 
  Maximize2, 
  Wrench, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight, 
  Layout,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import SectionHeader from '@/components/common/SectionHeader';

const MobileApp = () => {
  const features = [
    {
      title: 'Scanner Replacement',
      icon: <Smartphone size={32} />,
      desc: 'No more bulky hardware scanners. Use your smartphone camera to capture OMR sheets with institutional-grade precision.',
      color: 'var(--primary)',
      bg: 'var(--primary-light)'
    },
    {
      title: 'Real-time Processing',
      icon: <Zap size={32} />,
      desc: 'Scan and process instantly. The app identifies bubbles, barcodes, and hand-written marks on the fly.',
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      title: 'Seamless Transfer',
      icon: <UploadCloud size={32} />,
      desc: 'Directly transfer scanned data to your eVAL OMR Desktop software for final result processing and report generation.',
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    },
    {
      title: '100% Accuracy',
      icon: <Target size={32} />,
      desc: 'Advanced computer vision algorithms ensure that every mark is read correctly, even in varying lighting conditions.',
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    }
  ];

  const benefits = [
    { title: 'Ultra-Portable', text: 'Evaluate exams anywhere—in the classroom, staff room, or on the field—without being tethered to a desk.', icon: <Maximize2 size={28} /> },
    { title: 'Zero Maintenance', text: 'Hardware scanners require cleaning and calibration. The app stays updated automatically with the latest tech.', icon: <Wrench size={28} /> },
    { title: 'Multi-User Sync', text: 'Deploy multiple teachers to scan simultaneously, syncing all data into a central OMR software repository.', icon: <Users size={28} /> },
    { title: 'Cost Efficient', text: 'Eliminate the high upfront cost of ADF scanners. Use existing smartphone devices for all scanning needs.', icon: <DollarSign size={28} /> },
    { title: 'Secure Handling', text: 'Encrypted data transmission ensures that student results and identities remain protected at all times.', icon: <ShieldCheck size={28} /> },
    { title: 'Instant Feedback', text: 'Provide students with results immediately after the exam, increasing engagement and learning speed.', icon: <MessageSquare size={28} /> }
  ];

  const mobileAppFaqs = [
    {
      question: "Does the app require a high-end smartphone?",
      answer: "No, the eVAL Mobile App is optimized to work on most mid-range Android and iOS devices with a standard 12MP camera or better."
    },
    {
      question: "How does the app transfer data to the OMR software?",
      answer: "The app syncs data via a secure cloud bridge or direct Wi-Fi transfer, sending the scanned sheet data directly into your eVAL OMR Software dashboard."
    },
    {
      question: "Can it handle bulk scanning?",
      answer: "Yes, the app features a 'Rapid Scan' mode designed for scanning large batches of OMR sheets in quick succession."
    },
    {
      question: "Is internet connection mandatory?",
      answer: "Scanning can be done offline. An internet connection is only required when you are ready to sync the data to the central server."
    }
  ];

  return (
    <div className="mobile-app-page" style={{ paddingTop: 'var(--nav-height)', overflowX: 'hidden' }}>
      <SEO
        title="eVAL Mobile OMR Scanner App | Scanner Replacement Solution"
        description="Replace bulky hardware scanners with the eVAL Mobile Application. Scan OMR sheets directly with your smartphone and transfer data instantly to OMR software."
        keywords="OMR Scanner App, Mobile OMR Scanning, Smartphone OMR Reader, Evaluation App, Institutional Exam Scanning"
      />

      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, white 100%)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>New: Mobile Revolution</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>The Future of <span className="gradient-text">OMR Scanning</span> is Mobile</h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                Replace expensive, bulky hardware scanners with the eVAL Mobile Application. Turn any smartphone into a high-precision OMR scanning hub that transfers data directly to your evaluation software.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Download App</Link>
                <Link to="/book-demo" className="btn btn-outline">Watch Demo Video</Link>
              </div>
            </div>
            <div style={{ position: 'relative', maxWidth: '320px', marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="phone-mockup-wrapper">
                <img 
                  src="/assets/images/Mobile App.jpeg" 
                  alt="eVAL Mobile App" 
                  style={{ width: '100%', height: 'auto', borderRadius: '3.5rem', boxShadow: '0 40px 80px rgba(0,0,0,0.2)', border: '12px solid #1e293b' }} 
                />
                <div className="phone-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <SectionHeader
            badge="The Solution"
            title={<>Why Choose <span className="gradient-text">Mobile Evaluation?</span></>}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ 
                background: 'white', 
                padding: '2.5rem', 
                borderRadius: '2rem', 
                height: '100%', 
                border: '1px solid var(--border)',
                transition: 'transform 0.3s ease'
              }} className="hover-lift reveal">
                <div style={{ color: f.color, background: f.bg, width: '64px', height: '64px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>{f.title}</h3>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Workflow */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <SectionHeader
                badge="Workflow"
                centered={false}
                title={<>Instant <span className="gradient-text">Data Transfer</span></>}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '-2rem' }}>
                {[
                  { step: '1', title: 'Snap & Scan', desc: 'Capture the OMR sheet using the app’s intelligent viewfinder.' },
                  { step: '2', title: 'Verify On-Device', desc: 'Check for student roll numbers or missing signatures instantly.' },
                  { step: '3', title: 'One-Tap Sync', desc: 'Send data to your eVAL OMR desktop software via cloud/Wi-Fi.' },
                  { step: '4', title: 'Final Report', desc: 'Generate reports on your PC just as you would with a hardware scanner.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', 
                      color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      fontSize: '0.8rem', fontWeight: '800', flexShrink: 0 
                    }}>{item.step}</div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--muted)', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <Smartphone size={50} color="var(--primary)" />
                <ArrowRight size={24} color="var(--muted-foreground)" />
                <Layout size={50} color="#6366F1" />
              </div>
              <p style={{ fontWeight: '600', color: 'var(--secondary)' }}>Connects directly to eVAL OMR Desktop Suite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <SectionHeader
            badge="Institutional Gains"
            title={<>Mobile <span className="gradient-text">Advantages</span></>}
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ padding: '2rem', borderRadius: '1.5rem', background: 'white', border: '1px solid var(--border)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>{b.icon}</div>
                <h4 style={{ marginBottom: '0.75rem' }}>{b.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div style={{ 
            background: 'var(--secondary)', 
            borderRadius: '3rem', 
            padding: '5rem 2rem', 
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ color: 'white' }}>Turn Your Device into a <br /><span className="gradient-text">Powerhouse Scanner</span></h2>
            <p style={{ maxWidth: '600px', margin: '2rem auto 3rem', opacity: 0.8 }}>Available for Institutions and Partners. Request your access link today.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Contact Sales</Link>
              <Link to="/book-demo" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={mobileAppFaqs} />

      <style>{`
        .phone-mockup-wrapper {
          position: relative;
          perspective: 1000px;
        }
        .phone-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, var(--primary), transparent 70%);
          opacity: 0.1;
          filter: blur(40px);
          z-index: -1;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
};

export default MobileApp;
