import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import { ScanIcon } from '@/components/common/CustomIcons';

import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import SectionHeader from '@/components/common/SectionHeader';

const OMRPage = () => {
  const steps = [
    {
      title: 'Design',
      icon: <Icons.FileEdit size={32} />,
      desc: 'Design custom OMR sheets using MS Excel templates.',
      color: 'var(--primary)',
      bg: 'var(--primary-light)'
    },
    {
      title: 'Print',
      icon: <Icons.Printer size={32} />,
      desc: 'Print on plain paper using any standard printer.',
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      title: 'Scan',
      icon: <ScanIcon size={32} />,
      desc: 'Scan sheets using any document scanner.',
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    },

    {
      title: 'Verify',
      icon: <Icons.CheckSquare size={32} />,
      desc: 'Process with 100% accuracy and error detection.',
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    {
      title: 'Results',
      icon: <Icons.BarChart3 size={32} />,
      desc: 'Generate advanced reports and export data.',
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.1)'
    }
  ];


  const keyFeatures = [
    { title: '100% Accuracy', text: 'Ensures complete result accuracy with effortless data analysis and an option to verify results before finalisation.', icon: <Icons.Target size={28} /> },
    { title: 'Speedy Processing', text: 'Processes 300 to 500 OMR sheets per minute — ideal for institutions handling high examination volumes.', icon: <Icons.Zap size={28} /> },
    { title: 'Process Existing Sheets', text: 'Can process pre-designed OMR sheets as well as photocopied sheets, eliminating the need to reprint or redesign existing formats.', icon: <Icons.Copy size={28} /> },
    { title: 'Form Processing Capabilities', text: 'Supports Barcode reading, printed text recognition (OCR), handwritten text (ICR), Tick and Cross reading, and structured/unstructured forms.', icon: <Icons.Scan size={28} /> },
    { title: 'Powerful Reporting', text: 'Generates professional analytics reports and graphs. Exports in CSV, MS Excel, PDF, DBF formats. Includes an SMS module for result delivery.', icon: <Icons.PieChart size={28} /> },
    { title: 'Excel-Based Sheet Designer', text: 'Unique Excel-based templates for OMR sheet design. Supports variable fields including barcode, name, roll numbers, and more.', icon: <Icons.Layout size={28} /> },
    { title: 'CBSE & IIT / NEET Templates', text: 'Pre-built templates for CBSE Term 1 (Class X and XII) OMR patterns and IIT & NEET format, ready to use out of the box.', icon: <Icons.BookOpen size={28} /> },
    { title: 'Low Cost Solution', text: 'Available in lifetime license and annual subscription models. No investment in special hardware required.', icon: <Icons.Tag size={28} /> }
  ];

  const comparisonData = [
    { e: 'eVAL OMR offers high accuracy in reading OMR bubble sheets, ensuring reliable result processing.', o: 'Many other software read plain paper formats where accuracy may vary.' },
    { e: 'Built-in Excel-based design feature reduces dependency on external tools and minimizes operational effort.', o: 'Most software depend on third-party tools for OMR sheet design.' },
    { e: 'Supports reading of sheets designed in CorelDraw, Photoshop, and other design tools.', o: 'Limited compatibility with externally designed OMR sheets.' },
    { e: 'Efficiently processes dense and complex OMR formats with high precision.', o: 'Many software struggle to read condensed OMR sheets accurately.' },
    { e: 'Supports capturing candidate images, signatures, and additional fields from OMR sheets.', o: 'Only some software provide limited image capturing features.' },
    { e: 'Generates and reads barcode and QR code enabled OMR sheets.', o: 'Barcode/QR code support is limited or unavailable in many tools.' },
    { e: 'Intelligent data validation for duplicate entries, missing data, and error correction.', o: 'Basic validation features with manual intervention required.' },
    { e: 'Detailed reports and analytics for result processing and performance evaluation.', o: 'Limited reporting capabilities.' },
    { e: 'Scalable for large volume OMR processing.', o: 'Performance may degrade with bulk processing.' },
    { e: 'User-friendly interface with minimal training requirement.', o: 'Often complex interface requiring technical expertise.' },
    { e: 'Dedicated technical support and regular updates.', o: 'Limited support period and delayed updates.' }
  ];

  const omrFaqs = [
    {
      question: "What types of OMR sheets are supported?",
      answer: "Our OMR software supports standard as well as fully customized OMR sheet designs, including multiple sections, variable marking schemes, and barcode/QR-based identification."
    },
    {
      question: "Does the software require a special OMR scanner?",
      answer: "No, the system works with regular flatbed scanners and multifunction printers, making it cost-effective and hardware-independent."
    },
    {
      question: "How accurate is the OMR evaluation process?",
      answer: "The software ensures near 100% accuracy with advanced error detection, automatic validation, and configurable checking rules."
    },
    {
      question: "Can I generate reports and analytics from OMR results?",
      answer: "Yes, detailed reports including candidate-wise, center-wise, and overall performance analytics can be generated instantly."
    },
    {
      question: "Is negative marking supported?",
      answer: "Yes, the system allows flexible marking schemes including negative marking, section-wise scoring, and custom evaluation logic."
    }
  ];
  const featureMeta = [
    { label: "Accuracy", icon: Icons.CheckCircle2 },
    { label: "Design", icon: Icons.Layout },
    { label: "Compatibility", icon: Icons.Layers },
    { label: "Complex Sheets", icon: Icons.Grid },
    { label: "Image Capture", icon: Icons.Image },
    { label: "QR/Barcode", icon: Icons.QrCode },
    { label: "Validation", icon: Icons.ShieldCheck },
    { label: "Reports", icon: Icons.BarChart3 },
    { label: "Scalability", icon: Icons.TrendingUp },
    { label: "Ease of Use", icon: Icons.Smile },
    { label: "Support", icon: Icons.Headphones }
  ];
  return (
    <div className="omr-page" style={{ paddingTop: 'var(--nav-height)', overflowX: 'hidden' }}>
      <SEO
        title="OMR Software for Sheet Scanning & Reading | OMR Checker"
        description="eVAL OMR is a state-of-the-art Optical Mark Reader software designed for capturing and analysing data from plain paper OMR sheets with 100% accuracy."
        keywords="OMR Software, OMR Sheet Scanning, OMR Checker, Bubble Sheet Reader, OMR Design Software, Automated Exam Evaluation"
      />
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
            <div style={{ flex: '1.2' }}>
              <span className="badge">100% Accurate Processing</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 8vw, 3.5rem)' }}>eVAL OMR <span className="gradient-text">Exam Software</span></h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                eVAL OMR is a state-of-the-art Optical Mark Reader software designed for capturing and analysing data from plain paper OMR (bubble) sheets with 100% accurate results at high speed.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--muted-foreground)', fontWeight: '500', marginBottom: 0 }}>
                Its simple yet sophisticated User Interface (UI) makes it easy to create, process, and analyse OMR data for any institutional application — all without requiring any special hardware investment.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
                <a href="#workflow" className="btn btn-outline">See the Workflow</a>
              </div>
            </div>
            <div style={{ position: 'relative', maxWidth: '680px', marginLeft: 'auto' }}>
              <img src="/assets/images/omr_hero.png" alt="OMR Software" style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <SectionHeader
            badge="Software Overview"
            title={<>What is <span className="gradient-text">eVAL OMR?</span></>}
          />
          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--border)', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }} className="reveal">
            <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              eVAL OMR is a state-of-the-art Optical Mark Reader software designed for capturing and analysing data from plain paper OMR (bubble) sheets with 100% accurate results at high speed. Its simple yet sophisticated User Interface (UI) makes it easy to create, process, and analyse OMR data for any institutional application.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--foreground)', lineHeight: '1.8', fontWeight: '500', margin: 0 }}>
              The software is best suited for quick and accurate evaluation of tests, assessments, surveys, and filled forms — all without requiring any special hardware investment. A regular flatbed or ADF document scanner and a standard laser or inkjet printer are all you need.
            </p>
          </div>
        </div>
      </section>

      {/* The 5-Step Process */}
      <section id="workflow" className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <SectionHeader
            badge="Process Workflow"
            title={<>The Simple <span className="gradient-text">5-Step Process</span></>}
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
                  d="M 100,60 C 100,10 300,10 300,60"
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
                  d="M 300,60 C 300,110 500,110 500,60"
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
                  d="M 500,60 C 500,10 700,10 700,60"
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
                  d="M 700,60 C 700,110 900,110 900,60"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Animated Particles */}
                {[200, 400, 600, 800].map((x, i) => (
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
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`workflow-h-item ${i % 2 === 0 ? 'top-text' : 'bottom-text'}`}
                  style={{ width: '20%' }}
                >
                  {/* Content (Above) */}
                  {i % 2 === 0 && (
                    <div className="h-step-content">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  )}

                  {/* Circle */}
                  <div className="h-step-visual">
                    <div className="h-step-circle" style={{ borderColor: s.color }}>
                      <div className="h-step-icon" style={{ color: s.color, background: s.bg }}>
                        {s.icon}
                      </div>
                    </div>
                    <div className="h-step-number" style={{ background: s.color }}>{i + 1}</div>
                  </div>

                  {/* Content (Below) */}
                  {i % 2 !== 0 && (
                    <div className="h-step-content">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: 0.3s;
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
            line-height: 1.5;
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
      </section>

      {/* Key Features */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <SectionHeader
            badge="Capabilities"
            title={<>Platform <span className="gradient-text">Key Features</span></>}
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {keyFeatures.map((f, i) => (
              <div key={i} className="feature-hover-card">
                <div style={{ color: 'var(--primary)', padding: '12px', background: 'var(--primary-light)', borderRadius: '12px', flexShrink: 0, width: 'fit-content', marginBottom: '1.25rem' }}>{f.icon}</div>
                <div>
                  <h4 style={{ marginBottom: '0.75rem', fontSize: '1.125rem', color: 'var(--foreground)' }}>{f.title}</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .feature-hover-card {
            padding: 2rem;
            border-radius: 1.5rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid transparent;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .feature-hover-card:hover {
            background: white;
            border-color: var(--border);
            box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            transform: translateY(-5px);
          }
        `}</style>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <SectionHeader
            badge="Competitive Advantage"
            title={<>eVAL OMR vs. <span className="gradient-text">Other OMR Software</span></>}
            text="How we outperform traditional OMR solutions"
          />

          <div className="comparison-container">
            <div className="comparison-header">
              <div style={{ padding: '1.8rem' }}>Feature</div>
              <div style={{ padding: '1.8rem' }}>eVAL OMR Software</div>
              <div style={{ padding: '1.8rem' }}>Other OMR Software</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className="comparison-row">
                <div className="feature-cell">
                  {(() => {
                    const Icon = featureMeta[i]?.icon;
                    return (
                      <>
                        <div className="icon-badge">
                          {Icon && <Icon size={18} style={{ color: 'var(--primary)' }} />}
                        </div>
                        <span className="feature-label">
                          {featureMeta[i]?.label || `Feature ${i + 1}`}
                        </span>
                      </>
                    );
                  })()}
                </div>

                <div className="eval-cell">
                  <div className="mobile-label">eVAL OMR</div>
                  {row.e}
                </div>

                <div className="other-cell">
                  <div className="mobile-label">Others</div>
                  {row.o}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .comparison-container {
            border-radius: 2rem;
            overflow: hidden;
            border: 1px solid var(--border);
            background: white;
          }

          .comparison-header {
            display: grid;
            grid-template-columns: 0.8fr 1.6fr 1.6fr;
            background: var(--foreground);
            color: white;
            font-weight: 700;
          }

          .comparison-row {
            display: grid;
            grid-template-columns: 0.8fr 1.6fr 1.6fr;
            border-bottom: 1px solid var(--border);
          }

          .feature-cell {
            padding: 1.5rem;
            background: var(--muted);
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .icon-badge {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: rgba(14,165,164,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .feature-label {
            font-weight: 700;
            font-size: 0.9rem;
            color: var(--foreground);
          }

          .eval-cell {
            padding: 1.5rem;
            color: var(--primary);
            font-weight: 600;
            background: rgba(14,165,164,0.03);
            line-height: 1.6;
          }

          .other-cell {
            padding: 1.5rem;
            color: var(--muted-foreground);
            line-height: 1.6;
          }

          .mobile-label {
            display: none;
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--primary);
            margin-bottom: 0.5rem;
            opacity: 0.6;
          }

          @media (max-width: 768px) {
            .comparison-header {
              display: none;
            }

            .comparison-row {
              grid-template-columns: 1fr;
            }

            .feature-cell {
              background: var(--secondary);
              color: white;
              padding: 1rem 1.5rem;
            }

            .feature-label {
              color: white;
            }

            .icon-badge {
              background: rgba(255,255,255,0.15);
            }

            .icon-badge svg {
              color: white !important;
            }

            .eval-cell, .other-cell {
              padding: 1.25rem 1.5rem;
            }

            .mobile-label {
              display: block;
            }
          }
        `}</style>
      </section>

      {/* Institutional CTA Section */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: 'clamp(2rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)', borderRadius: 'clamp(1.5rem, 5vw, 4rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', marginBottom: '1.5rem' }}>Trusted Nationwide</span>
              <h2 style={{ color: 'white' }}>Ready for a <span className="gradient-text">100% Accurate</span> Future?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '2rem auto 4rem', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>Deploy the simplest, standard-hardware driven eVAL OMR system for your educational evaluation.</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem' }}>Start Free Trial</Link>
                <Link to="/book-demo" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1.1rem 2.5rem' }}>Request Demo</Link>
              </div>
            </div>
            <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '100%', height: '200%', background: 'radial-gradient(circle, rgba(14, 165, 164, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <FAQ faqs={omrFaqs} />

    </div>
  );
};

export default OMRPage;
