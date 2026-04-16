import * as Icons from '@/components/LucideFix';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      desc: 'Ideal for coaching institutes and small colleges getting started with digital evaluation.',
      price: annual ? '₹24,999' : '₹2,999',
      period: annual ? '/year' : '/month',
      highlight: false,
      features: [
        'OMR Software (up to 5,000 sheets/month)',
        'Basic Analytics Dashboard',
        'Email Support (48hr response)',
        '5 Admin Users',
        'Standard Security',
        'Data Export (CSV)'
      ],
      cta: 'Start Free Trial',
      icon: <Icons.Layers size={28} />
    },
    {
      name: 'Professional',
      desc: 'For universities and state boards managing high-volume assessments with advanced needs.',
      price: annual ? '₹99,999' : '₹11,999',
      period: annual ? '/year' : '/month',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'OMR + CBT + OSM Suite',
        'AI-Powered Proctoring',
        'Advanced Analytics & Reports',
        '25 Admin Users',
        'Priority Support (4hr SLA)',
        'LMS Integration',
        'Question Bank (10K items)',
        'White-Label Options'
      ],
      cta: 'Get Started',
      icon: <Icons.Rocket size={28} />
    },
    {
      name: 'Enterprise',
      desc: 'For national boards and large organizations requiring the full power of the eVAL ecosystem.',
      price: 'Custom',
      period: '',
      highlight: false,
      features: [
        'Complete eVAL Suite (All 5 Products)',
        'Unlimited Users & Volume',
        'Dedicated Account Manager',
        'Custom API Integration',
        'On-Premise Deployment Option',
        'Blockchain Result Verification',
        '99.99% Uptime SLA',
        'Compliance & Audit Support',
        '24/7 Phone & Chat Support'
      ],
      cta: 'Contact Sales',
      icon: <Icons.Building2 size={28} />
    }
  ];

  const comparison = [
    { feature: 'OMR Processing', starter: '5K/mo', pro: '50K/mo', enterprise: 'Unlimited' },
    { feature: 'CBT Platform', starter: '—', pro: '✓', enterprise: '✓' },
    { feature: 'On-Screen Marking', starter: '—', pro: '✓', enterprise: '✓' },
    { feature: 'LMS Portal', starter: '—', pro: '✓', enterprise: '✓' },
    { feature: 'Question Bank', starter: '1K items', pro: '10K items', enterprise: 'Unlimited' },
    { feature: 'AI Proctoring', starter: '—', pro: '✓', enterprise: '✓' },
    { feature: 'Custom Branding', starter: '—', pro: '✓', enterprise: '✓' },
    { feature: 'API Access', starter: '—', pro: 'REST API', enterprise: 'Full API + Webhooks' },
    { feature: 'Support Level', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated Manager' },
    { feature: 'Uptime SLA', starter: '99.5%', pro: '99.9%', enterprise: '99.99%' },
    { feature: 'Data Retention', starter: '1 Year', pro: '3 Years', enterprise: 'Unlimited' },
    { feature: 'Deployment', starter: 'Cloud', pro: 'Cloud', enterprise: 'Cloud / On-Premise' }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Transparent Pricing</span>
          <h1 style={{ fontSize: '3.5rem' }}>Plans That Scale with <br /><span className="gradient-text">Your Institution</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            No hidden fees. No surprise charges. Choose the plan that fits your evaluation needs—upgrade, downgrade, or cancel anytime.
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', background: 'var(--muted)', padding: '0.5rem', borderRadius: '9999px', border: '1px solid var(--border)' }}>
            <button onClick={() => setAnnual(false)} style={{
              padding: '0.75rem 2rem', borderRadius: '9999px', border: 'none', cursor: 'pointer',
              background: !annual ? 'white' : 'transparent', fontWeight: '700', fontSize: '0.875rem',
              boxShadow: !annual ? 'var(--shadow-sm)' : 'none', color: !annual ? 'var(--foreground)' : 'var(--muted-foreground)',
              transition: 'var(--transition)'
            }}>Monthly</button>
            <button onClick={() => setAnnual(true)} style={{
              padding: '0.75rem 2rem', borderRadius: '9999px', border: 'none', cursor: 'pointer',
              background: annual ? 'white' : 'transparent', fontWeight: '700', fontSize: '0.875rem',
              boxShadow: annual ? 'var(--shadow-sm)' : 'none', color: annual ? 'var(--foreground)' : 'var(--muted-foreground)',
              transition: 'var(--transition)'
            }}>
              Annual <span style={{ color: 'var(--primary)', fontWeight: '800', marginLeft: '4px' }}>Save 30%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ background: 'white', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {plans.map((plan, i) => (
              <div key={i} className="card" style={{
                padding: '3.5rem',
                borderTop: plan.highlight ? '4px solid var(--primary)' : '4px solid var(--border)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                background: plan.highlight ? 'linear-gradient(180deg, rgba(229,57,53,0.02) 0%, white 100%)' : 'var(--card)',
                transform: plan.highlight ? 'scale(1.03)' : 'none',
                zIndex: plan.highlight ? 2 : 1
              }}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--primary)', color: 'white', padding: '0.4rem 1.5rem',
                    borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '800',
                    letterSpacing: '0.05em', textTransform: 'uppercase'
                  }}>{plan.badge}</div>
                )}

                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{plan.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem', minHeight: '48px' }}>{plan.desc}</p>

                <div style={{ marginBottom: '2.5rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--foreground)' }}>{plan.price}</span>
                  <span style={{ fontSize: '1rem', color: 'var(--muted-foreground)', fontWeight: '600' }}>{plan.period}</span>
                </div>

                <div style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem', flex: 1 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9375rem' }}>
                      <Icons.Check size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <Link to={plan.name === 'Enterprise' ? '/contact' : '/book-demo'}
                  className={plan.highlight ? 'btn btn-primary' : 'btn btn-outline'}
                  style={{ width: '100%', padding: '1.25rem', textAlign: 'center' }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Detailed Comparison</span>
            <h2>Feature-by-Feature <span className="gradient-text">Breakdown</span></h2>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '2rem', border: '1px solid var(--border)', background: 'white' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: '1.5rem 2rem', textAlign: 'left', fontWeight: '800', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>Feature</th>
                  <th style={{ padding: '1.5rem 2rem', textAlign: 'center', fontWeight: '800', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Starter</th>
                  <th style={{ padding: '1.5rem 2rem', textAlign: 'center', fontWeight: '800', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)' }}>Professional</th>
                  <th style={{ padding: '1.5rem 2rem', textAlign: 'center', fontWeight: '800', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'white' : 'var(--muted)' }}>
                    <td style={{ padding: '1.25rem 2rem', fontWeight: '700', fontSize: '0.9375rem' }}>{row.feature}</td>
                    <td style={{ padding: '1.25rem 2rem', textAlign: 'center', fontSize: '0.9375rem', color: row.starter === '—' ? 'var(--muted-foreground)' : 'var(--foreground)' }}>{row.starter}</td>
                    <td style={{ padding: '1.25rem 2rem', textAlign: 'center', fontSize: '0.9375rem', fontWeight: '600', color: 'var(--foreground)' }}>{row.pro}</td>
                    <td style={{ padding: '1.25rem 2rem', textAlign: 'center', fontSize: '0.9375rem', fontWeight: '600', color: 'var(--foreground)' }}>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ for Pricing */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Common Questions</span>
            <h2>Pricing <span className="gradient-text">FAQs</span></h2>
          </div>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { q: 'Can I switch plans mid-contract?', a: 'Yes. You can upgrade at any time and the prorated difference will be adjusted to your billing cycle. Downgrades take effect at the next renewal.' },
              { q: 'Is there a free trial available?', a: 'Absolutely. All plans come with a 14-day free trial with full feature access. No credit card required to start.' },
              { q: 'What payment methods do you accept?', a: 'We accept bank transfers, UPI, credit/debit cards, and institutional purchase orders for Enterprise plans.' },
              { q: 'Do you offer discounts for government institutions?', a: 'Yes. We offer special pricing for government boards, state examination authorities, and public universities. Contact our sales team for details.' }
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem' }}>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>{item.q}</h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: 0, lineHeight: '1.7' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center', marginBottom: '3rem' }}>
            {[
              { icon: <Icons.ShieldCheck size={32} />, text: 'ISO 27001 Certified' },
              { icon: <Icons.Lock size={32} />, text: 'SOC 2 Compliant' },
              { icon: <Icons.Globe size={32} />, text: 'GDPR Ready' },
              { icon: <Icons.Award size={32} />, text: '99.99% Uptime' }
            ].map((badge, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--primary)' }}>{badge.icon}</div>
                <span style={{ fontWeight: '800', fontSize: '0.9375rem', color: 'var(--foreground)' }}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem' }}>Not Sure Which Plan <span className="gradient-text">Fits Best?</span></h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>Our solution architects will assess your institutional needs and recommend the perfect configuration—absolutely free.</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link to="/book-demo" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Schedule Consultation</Link>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem' }}>Talk to Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
