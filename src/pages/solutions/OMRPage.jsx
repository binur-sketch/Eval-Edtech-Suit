import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
const OMRPage = () => {
  const steps = [
    { title: 'Step 1 — Design', icon: <Icons.FileEdit size={32} />, desc: 'Design your own OMR sheet using the MS Excel-based Form Designer. Modify from existing templates or create new OMR designs with variable fields like barcode, name, and roll numbers.' },
    { title: 'Step 2 — Print', icon: <Icons.Printer size={32} />, desc: 'Print in-house in black and white using any simple inkjet or laser printer or MFP. Works with standard 70–100 GSM A4 plain paper. Even photocopies work.' },
    { title: 'Step 3 — Scan', icon: <Icons.Scan size={32} />, desc: 'Scan using any document scanner — flatbed or ADF. No fancy or expensive hardware investment is required.' },
    { title: 'Step 4 — Verify', icon: <Icons.CheckSquare size={32} />, desc: 'Process sheets at 300–500 sheets per minute. Proactive error detection and correction ensure 100% accuracy throughout the verification step.' },
    { title: 'Step 5 — Results', icon: <Icons.BarChart size={32} />, desc: 'View advanced results with professional reports and graphs. Export in CSV, MS Excel, PDF, DBF formats. SMS module available for sending results to candidates.' }
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

  const eduLogos = [
    '/assets/images/school/dps.webp',
    '/assets/images/university/BANARAS HINDU UNIVERSITY.png',
    '/assets/images/coaching/physics wallah.webp',
    '/assets/images/school/RPS International School.png',
    '/assets/images/university/Parul University.png',
    '/assets/images/coaching/aakash logo.png',
    '/assets/images/school/OASIS International School.png',
    '/assets/images/university/Jamia Millia Islamia.png',
    '/assets/images/coaching/career launcher.png',
    '/assets/images/university/Silver Oak University.png'
  ];

  const govLogos = [
    '/assets/images/government/National Cadet Corps.png',
    '/assets/images/government/Union Public Service Commission.png',
    '/assets/images/government/AIIMS.svg',
    '/assets/images/government/IIT Goa.png',
    '/assets/images/government/NIT Goa.png',
    '/assets/images/government/Indian Railway.png',
    '/assets/images/government/QUALITY COUNCIL OF INDIA.png',
    '/assets/images/government/Council of Scientific and Industrial Research.png',
    '/assets/images/government/Maulana Azad Medical College.png'
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
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="badge">100% Accurate Processing</span>
              <h1 style={{ fontSize: '3.5rem' }}>eVAL OMR <span className="gradient-text">Exam Software</span></h1>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
                eVAL OMR is a state-of-the-art Optical Mark Reader software designed for capturing and analysing data from plain paper OMR (bubble) sheets with 100% accurate results at high speed.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/book-demo" className="btn btn-primary">Start Free Trial</Link>
                <Link to="/contact" className="btn btn-outline">Consult Our Team</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/assets/images/omr_hero.png" alt="On-Screen Marking" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>

            {/* <div className="card" style={{ padding: '3.5rem', background: 'white', borderRadius: '3rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '10px', background: 'var(--primary-light)', borderRadius: '12px', color: 'var(--primary)' }}><Icons.Activity size={24} /></div>
                Performance Benchmarks
              </div>
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  { label: 'Processing Speed', val: '500 sheets/min', pct: '95%' },
                  { label: 'Accuracy Rate', val: '100.00%', pct: '100%' },
                  { label: 'Hardware Required', val: 'Standard Scanner', pct: '90%' }
                ].map((b, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                      <span style={{ color: 'var(--muted-foreground)', fontWeight: '600' }}>{b.label}</span>
                      <span style={{ fontWeight: '800', color: 'var(--foreground)' }}>{b.val}</span>
                    </div>
                    <div style={{ height: '8px', background: 'var(--muted)', borderRadius: '4px' }}>
                      <div style={{ width: b.pct, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} className="reveal">
            <span className="badge">Software Overview</span>
            <h2 style={{ marginBottom: '1.5rem' }}>What is <span className="gradient-text">eVAL OMR?</span></h2>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--border)', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                eVAL OMR is a state-of-the-art Optical Mark Reader software designed for capturing and analysing data from plain paper OMR (bubble) sheets with 100% accurate results at high speed. Its simple yet sophisticated User Interface (UI) makes it easy to create, process, and analyse OMR data for any institutional application.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--foreground)', lineHeight: '1.8', fontWeight: '500', margin: 0 }}>
                The software is best suited for quick and accurate evaluation of tests, assessments, surveys, and filled forms — all without requiring any special hardware investment. A regular flatbed or ADF document scanner and a standard laser or inkjet printer are all you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Step Process */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Process Workflow</span>
            <h2>
              The Simple <span className="gradient-text">5-Step Process</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="process-row">
            {steps.map((s, i) => (
              <div key={i} className="process-col">

                {/* Step */}
                <div className="process-card">

                  {/* Number */}
                  <div className="step-badge">{i + 1}</div>

                  {/* Icon */}
                  <div className="icon-wrap">{s.icon}</div>

                  {/* Content */}
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>

                {/* Arrow */}
                {i !== steps.length - 1 && (
                  <div className="arrow">→</div>
                )}
              </div>
            ))}
          </div>

        </div>

        <style>{`

    .process-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      flex-wrap: nowrap;
    }

    .process-col {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    /* CARD */
    .process-card {
      width: 240px; /* 👈 fixed width fixes stretching */
      background: white;
      border: 1px solid var(--border);
      border-radius: 1.5rem;
      padding: 2rem 1.5rem;
      text-align: center;
      transition: 0.3s;
      position: relative;
    }

    .process-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.08);
    }

    /* NUMBER */
    .step-badge {
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      font-size: 0.9rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ICON */
    .icon-wrap {
      margin-bottom: 1rem;
      color: var(--primary);
      display: flex;
      justify-content: center;
    }

    /* TEXT */
    .process-card h3 {
      font-size: 1rem;
      margin-bottom: 0.6rem;
      font-weight: 700;
    }

    .process-card p {
      font-size: 0.85rem;
      color: var(--muted-foreground);
      line-height: 1.6;
      margin: 0;
    }

    /* ARROW */
    .arrow {
      font-size: 1.5rem;
      color: var(--primary);
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
      .process-row {
        overflow-x: auto;
        justify-content: flex-start;
        padding-bottom: 1rem;
      }
    }

    @media (max-width: 768px) {
      .process-row {
        flex-direction: column;
        align-items: stretch;
      }

      .process-col {
        flex-direction: column;
      }

      .arrow {
        transform: rotate(90deg);
      }
    }

  `}</style>
      </section>

      {/* Key Features */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Capabilities</span>
            <h2>Platform <span className="gradient-text">Key Features</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
            {keyFeatures.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }} className="reveal hover-lift">
                <div style={{ color: 'var(--primary)', padding: '12px', background: 'var(--primary-light)', borderRadius: '12px', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h4 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{f.title}</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: 0 }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Comparison Table */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Competitive Advantage</span>
            <h2>
              eVAL OMR vs. <span className="gradient-text">Other OMR Software</span>
            </h2>
            <p style={{ marginTop: '1.5rem', color: 'var(--muted-foreground)' }}>
              How we outperform traditional OMR solutions
            </p>
          </div>

          {/* Table */}
          <div style={{
            borderRadius: '2rem',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'white'
          }}>

            {/* Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '0.7fr 1.5fr 1.5fr',
              background: 'var(--foreground)',
              color: 'white',
              fontWeight: '700'
            }}>
              <div style={{ padding: '1.8rem' }}></div>
              <div style={{ padding: '1.8rem' }}>eVAL OMR Software</div>
              <div style={{ padding: '1.8rem' }}>Other OMR Software</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '0.7fr 1.5fr 1.5fr',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'stretch'
                }}
              >

                {/* Feature Label (Auto Generated) */}
                <div style={{
                  padding: '1.5rem',
                  background: 'var(--muted)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div
                    style={{
                      padding: '1.5rem',
                      background: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    {(() => {
                      const Icon = featureMeta[i]?.icon;
                      return (
                        <>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              background: 'rgba(14,165,164,0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            {Icon && <Icon size={18} style={{ color: 'var(--primary)' }} />}
                          </div>

                          <span
                            style={{
                              fontWeight: '700',
                              fontSize: '0.9rem',
                              color: 'var(--foreground)'
                            }}
                          >
                            {featureMeta[i]?.label || `Feature ${i + 1}`}
                          </span>
                        </>
                      );
                    })()}
                  </div>

                </div>

                {/* eVAL */}
                <div style={{
                  padding: '1.5rem',
                  color: 'var(--primary)',
                  fontWeight: '600',
                  background: 'rgba(14,165,164,0.03)',
                  lineHeight: '1.6'
                }}>
                  {row.e}
                </div>

                {/* Others */}
                <div style={{
                  padding: '1.5rem',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6'
                }}>
                  {row.o}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Institutional CTA Section */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 4rem', borderRadius: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', marginBottom: '1.5rem' }}>Trusted Nationwide</span>
              <h2 style={{ color: 'white' }}>Ready for a <span className="gradient-text">100% Accurate</span> Future?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem' }}>Deploy the simplest, standard-hardware driven eVAL OMR system for your educational evaluation.</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Start Free Trial</Link>
                <Link to="/book-demo" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1.25rem 3.5rem' }}>Request Demo</Link>
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
