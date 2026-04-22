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
import CaseStudySlider from '@/components/CaseStudySlider';

const Home = () => {

  const solutions = [
    {
      title: 'OSM Marking',
      desc: 'On-screen evaluation for descriptive answer sheets.',
      path: '/osm',
      icon: <Icons.Users size={28} />,
      color: '#0EA5A4'
    },
    {
      title: 'OMR Software',
      desc: 'Process 300–500 sheets/min with 100% accuracy using plain paper.',
      path: '/omr',
      icon: <Icons.Zap size={28} />,
      color: '#0EA5A4'
    },
    {
      title: 'CBT Platform',
      desc: 'Secure online exam system with anti-cheating & analytics.',
      path: '/cbt',
      icon: <Icons.ShieldCheck size={28} />,
      color: '#1F1F1F'
    },
    {
      title: 'QPM System',
      desc: 'Advanced question bank with tagging & workflows.',
      path: '/qpms',
      icon: <Icons.Database size={28} />,
      color: '#1F1F1F'
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
      <section className="section-padding solutions-section" style={{ background: 'var(--muted)' }}>
        <div className="container">

          <div className="section-header">
            <span className="badge">Our Solutions</span>
            <h2>
              One Platform. <span className="gradient-text">Complete Examination Ecosystem</span>
            </h2>
            <p style={{ color: 'var(--muted-foreground)' }}>
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
                background: 'radial-gradient(circle, rgba(14, 165, 164, 0.15), transparent 70%)',
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
                        background: 'white',
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
      {/* Case Studies Slider */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Success Stories</span>
            <h2>Proven <span className="gradient-text">Institutional Impact</span></h2>
          </div>

          <CaseStudySlider />
        </div>
      </section>

      {/* TESTIMONIALS */}
      < TestimonialsSection />


      {/* NEWSLETTER */}
      < NewsletterSection />

      {/* FINAL CTA */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>
            Evaluate 10,000+ <span className="gradient-text">Answer Sheets in Minutes</span>
          </h2>
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