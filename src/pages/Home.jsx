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
      desc: 'Evaluate 300–500 sheets/min with 100% accuracy using plain paper.',
      path: '/omr',
      symbol: '⚡',
      color: '#E53935'
    },
    {
      title: 'CBT Platform',
      desc: 'Secure online examination system with anti-cheating & analytics.',
      path: '/cbt',
      symbol: '🛡',
      color: '#1F1F1F'
    },
    {
      title: 'LMS Portal',
      desc: 'Scalable learning management system for institutions.',
      path: '/lms',
      symbol: '🌐',
      color: '#E53935'
    },
    {
      title: 'QTB System',
      desc: 'Advanced question bank with tagging & workflows.',
      path: '/qtb',
      symbol: '🏆',
      color: '#1F1F1F'
    },
    {
      title: 'OSM Marking',
      desc: 'On-screen evaluation for descriptive answer sheets.',
      path: '/osm',
      symbol: '👥',
      color: '#E53935'
    }
  ];

  return (
    <div className="home-page">

      {/* HERO */}
      <Hero />

      {/* CLIENT LOGOS */}
      <ClientLogoMarquee />

      {/* TRUST */}
      <TrustSection />

      {/* STATS */}
      <StatsSection />

      {/* TRUST STRIP */}
      <section style={{ background: 'white', padding: '1.5rem 0', textAlign: 'center' }}>
        <p style={{ fontWeight: '600', color: 'var(--muted-foreground)' }}>
          Trusted by 5000+ Institutions | 50M+ Sheets Processed | 100% Accuracy
        </p>
      </section>

      {/* SOLUTIONS */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Our Solutions"
            title="Complete Examination Ecosystem"
            text="From offline OMR to online CBT, manage your entire assessment lifecycle."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {solutions.map((s, i) => (
              <div key={i} className="card hover-card" style={{
                borderTop: `4px solid ${s.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}>

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at top right, ${s.color}15, transparent 60%)`
                }} />

                <div style={{ position: 'relative' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    {s.symbol}
                  </div>

                  <h3>{s.title}</h3>

                  <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                    {s.desc}
                  </p>

                  <Link to={s.path} className="link-primary">
                    Explore Solution <Icons.ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OMR */}
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
      </section>

      {/* WORKFLOW */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Workflow"
            title="From Sheet to Result in Minutes"
          />

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {['Design', 'Scan', 'Evaluate', 'Report'].map((step, i) => (
              <div key={i} className="card" style={{ width: '220px', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--primary)' }}>0{i + 1}</h2>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* PRODUCTS */}
      <ProductsSection />

      {/* INDUSTRIES */}
      <IndustryVerticals />

      {/* EXISTING VISUAL WORKFLOW */}
      <WorkflowSection />

      {/* VALUE */}
      <ValueComparison />

      {/* CERTIFICATIONS */}
      <CertificationsSection />

      {/* WHY EVAL */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>

          <div>
            <span className="badge">Why EVAL?</span>
            <h2>Precision Engineered for Institutional Trust</h2>
            <p>Bridge traditional evaluation with modern digital systems.</p>

            <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Icons.Server /> <p>Cloud-ready scalable system</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Icons.Lock /> <p>Secure encrypted data</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Icons.Globe /> <p>Used nationwide</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <h3>Impact</h3>
            <ul>
              <li>🚀 4x Faster Evaluation</li>
              <li>💰 65% Cost Reduction</li>
              <li>😊 98% Satisfaction</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* TEAM */}
      <TeamSection />

      {/* FAQ */}
      <FAQ />

      {/* NEWSLETTER */}
      <NewsletterSection />

      {/* FINAL CTA */}
      <section className="section-padding">
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
      </section>

    </div>
  );
};

export default Home;