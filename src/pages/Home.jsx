import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/common/SectionHeader';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';
import TrustSection from '@/components/TrustSection';
import ValueComparison from '@/components/ValueComparison';
import WorkflowSection from '@/components/WorkflowSection';
import ServicesSection from '@/components/ServicesSection';
import IndustryVerticals from '@/components/IndustryVerticals';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificationsSection from '@/components/CertificationsSection';
import FAQ from '@/components/FAQ';
import StatsSection from '@/components/StatsSection';
import TeamSection from '@/components/TeamSection';
import NewsletterSection from '@/components/NewsletterSection';
import ProductsSection from '@/components/ProductsSection';

const Home = () => {

  const solutions = [
    {
      title: 'OMR Software',
      desc: 'Process 300–500 sheets/min with 100% accuracy using plain paper.',
      path: '/omr',
      icon: <Icons.Zap size={28} />,
      color: '#E53935'
    },
    {
      title: 'CBT Platform',
      desc: 'Secure online exam system with anti-cheating & analytics.',
      path: '/cbt',
      icon: <Icons.ShieldCheck size={28} />,
      color: '#1F1F1F'
    },
    {
      title: 'LMS Portal',
      desc: 'Scalable learning management system for institutions.',
      path: '/lms',
      icon: <Icons.Globe size={28} />,
      color: '#E53935'
    },
    {
      title: 'QTB System',
      desc: 'Advanced question bank with tagging & workflows.',
      path: '/qtb',
      icon: <Icons.Database size={28} />,
      color: '#1F1F1F'
    },
    {
      title: 'OSM Marking',
      desc: 'On-screen evaluation for descriptive answer sheets.',
      path: '/osm',
      icon: <Icons.Users size={28} />,
      color: '#E53935'
    }
  ];
  return (
    <div className="home-page">

      {/* HERO */}
      <Hero />

      {/* TRUST */}
      <TrustSection />

      {/* STATS */}
      <StatsSection />

      {/* TRUST STRIP */}


      {/* SOLUTIONS */}
      <section className="section-padding solutions-section">
        <div className="container">

          <div className="section-header">
            <span className="badge">Our Solutions</span>
            <h2>
              One Platform. <span className="gradient-text">Complete Examination Ecosystem</span>
            </h2>
            <p>
              Digitize, automate, and scale your entire assessment lifecycle — from OMR to AI-powered evaluation.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <Link to={s.path} key={i} className={`solution-card ${i === 0 ? 'featured' : ''}`}>

                {/* Badge */}
                {i === 0 && <div className="badge-top">Most Popular</div>}

                {/* Glow */}
                <div className="card-glow" style={{ background: `${s.color}20` }} />

                <div className="card-content">

                  {/* ICON */}
                  <div className="icon-wrapper" style={{ background: `${s.color}15` }}>
                    {s.icon}
                  </div>

                  {/* TITLE */}
                  <h3>{s.title}</h3>

                  {/* DESCRIPTION */}
                  <p>{s.desc}</p>

                  {/* CTA */}
                  <div className="card-cta">
                    Explore Solution <Icons.ArrowRight size={16} />
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
      {/* WHY OMR
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <SectionHeader
            badge="Why eVAL OMR"
            title="Built for Speed, Accuracy & Scale"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: '100% Accuracy', desc: 'Eliminates manual errors completely.' },
              { title: 'No Hardware Needed', desc: 'Works with any scanner & printer.' },
              { title: 'Plain Paper', desc: 'No need for special OMR sheets.' },
              { title: 'High Speed', desc: 'Process 300–500 sheets/min.' }
            ].map((f, i) => (
              <div key={i} className="card">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* WORKFLOW */}
      <section className="section-padding workflow-section">
        <div className="container">

          <div className="section-header">
            <span className="badge">Workflow</span>
            <h2>
              From Sheet to <span className="gradient-text">Result</span> in Minutes
            </h2>
          </div>

          <div className="workflow-wrapper">
            {[
              { title: 'Design', icon: <Icons.Edit3 size={20} /> },
              { title: 'Scan', icon: <Icons.ScanLine size={20} /> },
              { title: 'Evaluate', icon: <Icons.CheckCircle size={20} /> },
              { title: 'Report', icon: <Icons.BarChart3 size={20} /> }
            ].map((step, i) => (
              <div key={i} className="workflow-step">

                {/* Connector Line */}
                {i !== 3 && <div className="connector" />}

                <div className="step-card">

                  <div className="step-number">
                    0{i + 1}
                  </div>

                  <div className="step-icon">
                    {step.icon}
                  </div>

                  <h4>{step.title}</h4>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* PRODUCTS
      <ProductsSection /> */}

      {/* INDUSTRIES */}
      <IndustryVerticals />

      {/* EXISTING VISUAL WORKFLOW */}
      <WorkflowSection />





      {/* WHY eVAL */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>

            {/* LEFT CONTENT */}
            <div>
              <span className="badge">Why EVAL?</span>

              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                Built for <span className="gradient-text">Accuracy, Scale & Trust</span>
              </h2>

              <p style={{
                fontSize: '1.1rem',
                color: 'var(--muted-foreground)',
                maxWidth: '500px'
              }}>
                Transform your evaluation ecosystem with automation, security, and unmatched precision.
              </p>

              {/* FEATURES */}
              <div style={{
                marginTop: '2.5rem',
                display: 'grid',
                gap: '1.5rem'
              }}>
                {[
                  {
                    icon: <Icons.Server size={20} />,
                    title: "Cloud Scalable",
                    text: "Handle lakhs of sheets with auto-scaling infrastructure"
                  },
                  {
                    icon: <Icons.Lock size={20} />,
                    title: "Enterprise Security",
                    text: "End-to-end encryption with secure data handling"
                  },
                  {
                    icon: <Icons.Globe size={20} />,
                    title: "Nationwide Adoption",
                    text: "Trusted by universities & institutions across India"
                  }
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      background: 'white',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      color: 'var(--primary)'
                    }}>
                      {item.icon}
                    </div>

                    <div>
                      <h4 style={{ marginBottom: '0.3rem' }}>{item.title}</h4>
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--muted-foreground)',
                        margin: 0
                      }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMPACT CARD */}
            <div style={{
              position: 'relative'
            }}>

              {/* Glow Background */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '120%',
                height: '140%',
                background: 'radial-gradient(circle, rgba(229,57,53,0.15), transparent 70%)',
                zIndex: 0
              }} />

              <div style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                borderRadius: '2rem',
                padding: '2.5rem',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <h3 style={{
                  textAlign: 'center',
                  marginBottom: '2rem'
                }}>
                  Measurable Impact
                </h3>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {[
                    { label: 'Evaluation Speed', value: '4x Faster' },
                    { label: 'Operational Cost', value: '↓ 65%' },
                    { label: 'Accuracy Rate', value: '100%' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: '700',
                        marginBottom: '0.4rem'
                      }}>
                        <span style={{ color: 'var(--muted-foreground)' }}>
                          {item.label}
                        </span>
                        <span style={{ color: 'var(--primary)' }}>
                          {item.value}
                        </span>
                      </div>

                      <div style={{
                        height: '6px',
                        background: 'var(--muted)',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: i === 0 ? '90%' : i === 1 ? '65%' : '95%',
                          height: '100%',
                          background: 'var(--primary)'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: '2rem' }}>
                  <a href="/book-demo" className="btn btn-primary" style={{ width: '100%' }}>
                    Get Free Demo
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* CERTIFICATIONS */}
      <CertificationsSection />
      {/* Case Studies Section */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="badge">Case Studies</span>
            <h2>In-Depth <span className="gradient-text">Success Stories</span></h2>
            <p style={{ marginTop: '1.5rem', color: 'var(--muted-foreground)' }}>Real-world challenges solved through tailored technology deployments.</p>
          </div>

          {/* Case Study 12.1 – NCC */}
          <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: '4rem', background: 'white' }}>
            {/* Header */}
            <div style={{ background: 'var(--primary)', padding: '3rem 4rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.15)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icons.Award size={32} color="white" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Case Study 1</div>
                <h3 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>National Cadet Corps (NCC)</h3>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['OMR', 'Admit Card', 'Certificates'].map(tag => (
                  <span key={tag} style={{ padding: '0.4rem 0.9rem', background: 'rgba(255,255,255,0.12)', borderRadius: '0.5rem', fontSize: '0.6875rem', fontWeight: '700', color: 'white' }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              {/* Background */}
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Background</h4>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                  The National Cadet Corps (NCC) conducts certification examinations across the country for Junior & Senior Division cadets. These exams evaluate cadets' knowledge, discipline, and readiness for defense-related opportunities.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.625rem' }}>
                  {[
                    'Conducted offline across multiple NCC units',
                    "'A' Certificate – School Level Cadets",
                    "'B' & 'C' Certificates – College Level Cadets",
                    'Examination mode traditionally based on Physical test papers & OMR sheets'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: '1.6' }}>
                      <Icons.ChevronRight size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Solution */}
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Our Solution – End-to-End OMR Examination Automation</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  Vir Softech deployed an Examination Management System tailored for NCC operations in 500+ Locations.
                </p>
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                  {[
                    { title: 'OMR Examination Software', items: ['Automated OMR sheet reading & scoring', 'High processing accuracy with instant error detection'] },
                    { title: 'Admit Card Generation System', items: ['Secure identity validation with QR Code', 'Highly Secure with integration of Digitally Signed'] },
                    { title: 'Certificate Generator Tool', items: ['Auto-qualified certification as per scoring rules', 'Secure certificate design, print & digital Signature'] }
                  ].map((block, i) => (
                    <div key={i} style={{ background: 'var(--muted)', borderRadius: '1rem', padding: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
                        <Icons.CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                        <span style={{ fontWeight: '800', fontSize: '0.875rem', color: 'var(--foreground)' }}>{block.title}</span>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, paddingLeft: '1.5rem', display: 'grid', gap: '0.4rem' }}>
                        {block.items.map((item, j) => (
                          <li key={j} style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div style={{ background: 'var(--secondary)', padding: '2.5rem 4rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>Outcome</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                  {[
                    'NCC successfully transitioned to a digitally enabled offline OMR examination ecosystem',
                    'Faster and more accurate evaluation process',
                    'Streamlined certification for thousands of cadets nationwide'
                  ].map((point, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      <Icons.Check size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 12.2 – UPSC */}
          <div className="card" style={{ padding: 0, overflow: 'hidden', background: 'white' }}>
            {/* Header */}
            <div style={{ background: 'var(--secondary)', padding: '3rem 4rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icons.ShieldCheck size={32} color="white" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)', marginBottom: '0.4rem' }}>Case Study 2</div>
                <h3 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>Union Public Service Commission (UPSC)</h3>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['ICR', 'OCR'].map(tag => (
                  <span key={tag} style={{ padding: '0.4rem 0.9rem', background: 'rgba(255,255,255,0.08)', borderRadius: '0.5rem', fontSize: '0.6875rem', fontWeight: '700', color: 'rgba(255,255,255,0.85)' }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              {/* Background */}
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Background</h4>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>
                  The Union Public Service Commission (UPSC) is India’s premier central recruitment agency responsible for conducting exams and selecting Group ‘A’ officers for key Government of India roles. It conducts nationwide competitive examinations attended by millions of aspirants across the country.
                </p>
              </div>
              {/* Problem Statement */}
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Problem Statement</h4>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                  UPSC, India's premier central recruitment agency, conducts large-scale descriptive (handwritten) examinations attended by millions of aspirants. After evaluation:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.625rem', marginBottom: '1.5rem' }}>
                  {[
                    'Marks are handwritten on the back of answer sheets along with roll numbers',
                    'Different questions have different validation rules & marking schemes',
                    'Manual reading & data entry of marks resulted in high chance of human error',
                    'Long processing duration and difficult tracking & verification at scale'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: '1.6' }}>
                      <Icons.AlertCircle size={15} style={{ color: '#ef4444', flexShrink: 0, marginTop: '3px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ background: 'rgba(229,57,53,0.05)', border: '1px solid rgba(229,57,53,0.15)', borderRadius: '1rem', padding: '1.25rem' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--foreground)', margin: 0 }}>
                    UPSC needed a fast, accurate and automated solution to extract & verify handwritten marks nationwide.
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Our Solution – Automated ICR/OCR Based Marks Processing</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  Vir Softech deployed its advanced eVAL Evaluation System using cutting-edge character recognition technology.
                </p>

                {/* Core Technology */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: 'var(--foreground)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Technology Used</div>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {[
                      { label: 'ICR – Intelligent Character Recognition', desc: 'Reads handwritten marks with validation logic' },
                      { label: 'OCR – Optical Character Recognition', desc: 'Reads roll numbers & identifiers on each sheet' }
                    ].map((tech, i) => (
                      <div key={i} style={{ background: 'var(--muted)', borderRadius: '0.875rem', padding: '1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <Icons.CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontWeight: '800', fontSize: '0.875rem', color: 'var(--foreground)' }}>{tech.label}</div>
                          <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', marginTop: '0.25rem' }}>→ {tech.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Execution Workflow */}
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: '800', color: 'var(--foreground)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Execution Workflow</div>
                  <ol style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem', counterReset: 'workflow' }}>
                    {[
                      'High-quality scanning of evaluated answer sheets',
                      'Automated extraction of marks & roll numbers',
                      'Built-in validation checks for marking rules',
                      'Instant processing & centralized result mapping',
                      'Export-ready result formats including PDF, MS Excel, CSV, DBF'
                    ].map((step, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: '1.6' }}>
                        <span style={{ width: '22px', height: '22px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: '900', flexShrink: 0 }}>{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #b71c1c 100%)', padding: '2.5rem 4rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ color: 'white', flexShrink: 0 }}><Icons.TrendingUp size={28} /></div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>Key Impact</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                  {[
                    'Eliminated human calculation errors entirely',
                    'Cut result preparation cycles by 60%',
                    'Guaranteed 100% data integrity for national-level recruitment'
                  ].map((point, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      <Icons.Check size={16} style={{ color: 'rgba(255,255,255,0.9)', flexShrink: 0, marginTop: '2px' }} />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div >
      </section >

      {/* TESTIMONIALS */}
      < TestimonialsSection />

      {/* FAQ */}
      < FAQ />

      {/* NEWSLETTER */}
      < NewsletterSection />

      {/* FINAL CTA */}
      < section className="section-padding" >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Evaluate 10,000+ Answer Sheets in Minutes</h2>
          <p>Fast. Accurate. Scalable.</p>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/book-demo" className="btn btn-primary">
              Request Demo
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Sales
            </Link>
          </div>
        </div>
      </section >

    </div >
  );
};

export default Home;