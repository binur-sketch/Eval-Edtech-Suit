import * as Icons from '@/components/LucideFix';
import React from 'react';
import SEO from '@/components/common/SEO';
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
import CaseStudySlider from '@/components/CaseStudySlider';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';

const Home = () => {

  const solutions = [
    {
      title: 'OSM Marking',
      desc: 'On-screen evaluation for descriptive answer sheets.',
      path: '/osm',
      icon: <Icons.Users size={28} />,
      color: '#0EA5A4',
      isPopular: true
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
      <SEO
        title="Home"
        description="eVAL provides end-to-end examination solutions including OMR software, CBT platforms, AI Proctoring, and LMS for schools, universities, and corporate assessments."
        keywords="Examination Solutions, OMR Software India, Computer Based Test, Online Assessment Platform, AI Proctoring Software, Education Technology"
      />

      {/* HERO */}
      <Hero />

      {/* TRUST */}
      <Reveal width="100%">
        <TrustSection />
      </Reveal>

      {/* STATS */}
      <Reveal width="100%">
        <StatsSection />
      </Reveal>

      {/* SOLUTIONS */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="badge">Our Solutions</span>
            <h2>
              One Platform. <span className="gradient-text">Complete Examination Ecosystem</span>
            </h2>
            <p>
              Digitize, automate, and scale your entire assessment lifecycle — from OMR to AI-powered evaluation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}>
            {solutions.map((s, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <Link to={s.path} className="card hover-lift" style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem 1.5rem',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {s.isPopular && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'var(--primary)',
                      color: 'white',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '100px',
                      fontSize: '0.6rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    borderRadius: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem'
                  }}>
                    {s.icon}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--foreground)' }}>{s.title}</h3>
                  <p style={{ flex: 1, marginBottom: '2rem', color: 'var(--muted-foreground)' }}>{s.desc}</p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    fontSize: '0.875rem'
                  }}>
                    Explore Solution <Icons.ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Reveal width="100%">
        <ServicesSection />
      </Reveal>

      {/* INDUSTRIES */}
      <Reveal width="100%">
        <IndustryVerticals />
      </Reveal>

      {/* EXISTING VISUAL WORKFLOW */}
      <Reveal width="100%">
        <WorkflowSection />
      </Reveal>

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
            <Reveal direction="right">
              <div>
                <span className="badge">Why EVAL?</span>
                <h2>
                  Built for <span className="gradient-text">Accuracy, Scale & Trust</span>
                </h2>
                <p style={{ maxWidth: '500px' }}>
                  Transform your evaluation ecosystem with automation, security, and unmatched precision.
                </p>

                <div style={{ marginTop: '2.5rem', display: 'grid', gap: '1.5rem' }}>
                  {[
                    { icon: <Icons.Server size={20} />, title: "Cloud Scalable", text: "Handle lakhs of sheets with auto-scaling infrastructure" },
                    { icon: <Icons.Lock size={20} />, title: "Enterprise Security", text: "End-to-end encryption with secure data handling" },
                    { icon: <Icons.Globe size={20} />, title: "Nationwide Adoption", text: "Trusted by universities & institutions across India" }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'white', padding: '0.75rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', color: 'var(--primary)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ marginBottom: '0.3rem' }}>{item.title}</h4>
                        <p style={{ margin: 0 }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* RIGHT IMPACT CARD */}
            <Reveal direction="left">
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '120%', height: '140%', background: 'radial-gradient(circle, rgba(14, 165, 164, 0.15), transparent 70%)', zIndex: 0 }} />
                <div style={{ position: 'relative', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', borderRadius: '2rem', padding: '2.5rem', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}>
                  <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Measurable Impact</h3>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                      { label: 'Evaluation Speed', value: '4x Faster' },
                      { label: 'Operational Cost', value: '↓ 65%' },
                      { label: 'Accuracy Rate', value: '100%' }
                    ].map((item, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', fontWeight: '700', marginBottom: '0.4rem' }}>
                          <span style={{ color: 'var(--muted-foreground)' }}>{item.label}</span>
                          <span style={{ color: 'var(--primary)' }}>{item.value}</span>
                        </div>
                        <div style={{ height: '6px', background: 'white', borderRadius: '4px', overflow: 'hidden' }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: i === 0 ? '90%' : i === 1 ? '65%' : '95%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ height: '100%', background: 'var(--primary)' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <Link to="/book-demo" className="btn btn-primary" style={{ width: '100%' }}>Get Free Demo</Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <Reveal width="100%">
        <CertificationsSection />
      </Reveal>

      {/* Case Studies Slider */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <Reveal width="100%">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="badge">Success Stories</span>
              <h2>Proven <span className="gradient-text">Institutional Impact</span></h2>
            </div>
          </Reveal>
          <Reveal width="100%">
            <CaseStudySlider />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Reveal width="100%">
        <TestimonialsSection />
      </Reveal>

      {/* NEWSLETTER */}
      <Reveal width="100%">
        <NewsletterSection />
      </Reveal>
    </div>
  );
};

export default Home;