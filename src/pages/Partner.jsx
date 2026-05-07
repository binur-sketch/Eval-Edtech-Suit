import * as Icons from '@/components/LucideFix';
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/Reveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/common/SectionHeader';
import SuccessModal from '@/components/common/SuccessModal';
import { useState } from 'react';

const Partner = () => {
  const partnerTypes = [
    {
      title: 'Sales & Channel Partners',
      desc: 'Expand your portfolio by offering our industry-leading examination evaluation solutions to your existing clients and new markets.',
      benefits: ['High commission margins', 'Marketing & sales collateral support', 'Exclusive territory rights', 'Lead generation assistance'],
      icon: <Icons.TrendingUp size={32} />,
      color: '#0EA5A4'
    },
    {
      title: 'Technology Partners',
      desc: 'Integrate your hardware or software solutions with eVAL to create a more powerful, end-to-end ecosystem for educational institutions.',
      benefits: ['API & SDK access', 'Joint product development', 'Co-marketing opportunities', 'Technical support & documentation'],
      icon: <Icons.Cpu size={32} />,
      color: '#6366F1'
    },
    {
      title: 'Implementation Partners',
      desc: 'Provide on-the-ground support, training, and configuration services for eVAL deployments at various scale institutions.',
      benefits: ['Professional certification', 'Service revenue opportunities', 'Priority technical support', 'Dedicated partner manager'],
      icon: <Icons.Settings size={32} />,
      color: '#10B981'
    }
  ];

  const steps = [
    { title: 'Inquiry', desc: 'Share your business vision with us via our secure portal.' },
    { title: 'Strategic Review', desc: 'Our regional heads analyze the synergy and market potential.' },
    { title: 'Onboarding', desc: 'Get certified on eVAL technologies and access the partner toolbox.' },
    { title: 'Launch & Scale', desc: 'Deploy solutions globally and scale your enterprise revenue.' }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/corp@virsoftech.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setShowSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="partner-page" style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO 
        title="Partner With Us | eVAL Global Partnership Program" 
        description="Join the eVAL ecosystem as a sales, technology, or implementation partner. Grow your business by delivering world-class examination solutions."
      />

      <section className="section-padding" style={{ 
        background: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/assets/images/partner_hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal>
              <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(14, 165, 164, 0.2)', borderRadius: '100px', marginBottom: '2rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(14, 165, 164, 0.3)' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)' }}>Growth Opportunity 2026</span>
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: 950, marginBottom: '2rem', lineHeight: 1.05 }}>
                Unleash the Power of <br /><span className="gradient-text">Collaboration</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '3.5rem', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
                Join the most advanced evaluation ecosystem in the world. Partner with eVAL to transform how 5,000+ global institutions evaluate, grow, and succeed.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#partner-form" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.125rem' }}>Join the Network</a>
                <Link to="/contact" className="btn btn-outline" style={{ padding: '1.25rem 4rem', color: 'white', borderColor: 'rgba(255,255,255,0.4)', fontSize: '1.125rem' }}>Contact Alliance Team</Link>
              </div>
            </Reveal>
          </div>
        </div>
        
        {/* Decorative Gradient Overlays */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, #f8fafc, transparent)', zIndex: 11 }}></div>
      </section>

      {/* Program Segments - Compact Cards */}
      <section className="section-padding" style={{ background: '#f8fafc', marginTop: '-5rem', position: 'relative', zIndex: 20 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {partnerTypes.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="partner-type-card" style={{ 
                  padding: '3rem', 
                  background: 'white', 
                  borderRadius: '2.5rem', 
                  border: '1px solid var(--border)',
                  height: '100%',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '1.25rem', 
                    background: `${p.color}10`, 
                    color: p.color, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '2rem'
                  }}>
                    {p.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--muted-foreground)', marginBottom: '2.5rem', lineHeight: 1.6, fontSize: '0.9375rem' }}>{p.desc}</p>
                  <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }}></div>
                  <ul style={{ padding: 0, listStyle: 'none', display: 'grid', gap: '1.25rem' }}>
                    {p.benefits.map((b, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--foreground)', fontWeight: 600 }}>
                        <Icons.CheckCircle2 size={18} color={p.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <Reveal>
                <span className="badge" style={{ marginBottom: '1.5rem' }}>Value Proposition</span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>
                  The eVAL <span className="gradient-text">Advantage</span>
                </h2>
                <div style={{ display: 'grid', gap: '2.5rem' }}>
                  {[
                    { icon: <Icons.ShieldCheck />, title: 'Institutional Trust', desc: 'Leverage our reputation as a provider to 5000+ top-tier educational bodies.', color: 'var(--primary)' },
                    { icon: <Icons.Cpu />, title: 'Deep Tech Integration', desc: 'Proprietary AI and OMR engines that outperform generic solutions by 400%.', color: '#6366F1' },
                    { icon: <Icons.Zap />, title: 'Unmatched Speed', desc: 'Same-day result processing capability even for million-sheet workloads.', color: '#F59E0B' }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '1.25rem', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: item.color, boxShadow: 'var(--shadow-sm)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ marginBottom: '0.5rem', fontWeight: 800, fontSize: '1.125rem' }}>{item.title}</h4>
                        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            {/* Connected Journey */}
            <div style={{ position: 'relative' }}>
                <Reveal delay={0.2}>
                    <div style={{ background: 'var(--secondary)', padding: '4rem', borderRadius: '4rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                          <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '4rem' }}>The Partner <span className="gradient-text">Journey</span></h3>
                          <div style={{ display: 'grid', gap: '3rem', position: 'relative' }}>
                              <div style={{ position: 'absolute', left: '23px', top: '24px', bottom: '24px', width: '2px', background: 'rgba(255,255,255,0.1)' }}></div>
                              {steps.map((s, i) => (
                                  <div key={i} style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                                      <div style={{ 
                                          width: '48px', 
                                          height: '48px', 
                                          borderRadius: '1rem', 
                                          background: i === 3 ? 'var(--primary)' : 'rgba(255,255,255,0.05)', 
                                          border: '1px solid rgba(255,255,255,0.1)', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center', 
                                          fontWeight: 900, 
                                          color: 'white',
                                          flexShrink: 0,
                                          fontSize: '1rem'
                                      }}>{i + 1}</div>
                                      <div>
                                          <h4 style={{ marginBottom: '0.5rem', fontWeight: 800, fontSize: '1.125rem' }}>{s.title}</h4>
                                          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.5 }}>{s.desc}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div style={{ position: 'absolute', bottom: '-20%', right: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(14, 165, 164, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
                    </div>
                </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="partner-form" className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', borderRadius: '4rem', padding: 'clamp(2rem, 8vw, 6rem)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="badge" style={{ marginBottom: '1.5rem' }}>Get in Touch</span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900 }}>Submit Your <span className="gradient-text">Proposal</span></h2>
                <p style={{ color: 'var(--muted-foreground)', marginTop: '1rem' }}>Our partnership board reviews inquiries every Tuesday and Thursday.</p>
            </div>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2.5rem' }}>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>Contact Person</label>
                    <input type="text" name="name" required placeholder="Full Name" style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>Business Email</label>
                    <input type="email" name="email" required placeholder="corporate@domain.com" style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>Organization</label>
                    <input type="text" name="company" required placeholder="Company Name" style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }} />
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>Partnership Focus</label>
                    <select name="partnership_type" style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem' }}>
                        <option>Sales & Channel Partner</option>
                        <option>Technology & API Partner</option>
                        <option>Implementation & Training</option>
                        <option>Strategic Alliance</option>
                    </select>
                </div>
                <div style={{ display: 'grid', gap: '1rem', gridColumn: 'span min(auto, 2)' }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>Market & Collaboration Detail</label>
                    <textarea name="message" required placeholder="Describe your target market and how eVAL fits into your growth strategy..." rows={5} style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--muted)', fontSize: '0.9375rem', resize: 'none' }}></textarea>
                </div>
                <div style={{ gridColumn: 'span min(auto, 2)', textAlign: 'center', marginTop: '2rem' }}>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.125rem', borderRadius: '1rem', opacity: isSubmitting ? 0.7 : 1 }}>
                        {isSubmitting ? 'Submitting...' : 'Initiate Partnership Discussion'}
                    </button>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>By submitting, you agree to our partner confidentiality terms.</p>
                </div>
            </form>
          </div>
        </div>
      </section>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <style dangerouslySetInnerHTML={{ __html: `
        .partner-type-card:hover {
          transform: translateY(-12px);
          border-color: var(--primary);
          box-shadow: 0 40px 80px -15px rgba(0,0,0,0.1);
        }
      `}} />
    </div>
  );
};

export default Partner;
