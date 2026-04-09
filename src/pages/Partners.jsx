import * as Icons from '@/components/LucideFix';
import React from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const integrations = [
    { name: 'Google Workspace', desc: 'Seamless integration with Google Classroom, Drive, and Forms for content sync.', category: 'LMS' },
    { name: 'Microsoft Azure', desc: 'Deploy EVAL on Azure infrastructure with Active Directory SSO support.', category: 'Cloud' },
    { name: 'Moodle', desc: 'Native plug-in for Moodle LMS with grade sync and course management.', category: 'LMS' },
    { name: 'AWS', desc: 'Auto-scaling infrastructure on AWS with S3 storage and CloudFront CDN.', category: 'Cloud' },
    { name: 'Zoom', desc: 'Live proctoring and remote invigilation through Zoom integration.', category: 'Proctoring' },
    { name: 'SAP SuccessFactors', desc: 'Sync corporate assessment results with HR management workflows.', category: 'Enterprise' },
    { name: 'Slack', desc: 'Real-time notifications and exam status alerts directly in your Slack channels.', category: 'Communication' },
    { name: 'DigiLocker', desc: 'Verified credential issuance and digital certificate archival.', category: 'Government' }
  ];

  const partnerTiers = [
    {
      tier: 'Technology Partner',
      desc: 'Integrate your platform or infrastructure with the EVAL ecosystem to deliver joint solutions.',
      benefits: ['Joint go-to-market', 'API & SDK access', 'Co-branded documentation', 'Technical enablement'],
      icon: <Icons.Code size={32} />
    },
    {
      tier: 'Reseller Partner',
      desc: 'Distribute EVAL solutions across your region and earn competitive margins.',
      benefits: ['Revenue sharing model', 'Sales enablement kit', 'Dedicated partner manager', 'Demo environment access'],
      icon: <Icons.Handshake size={32} />
    },
    {
      tier: 'Implementation Partner',
      desc: 'Help institutions deploy and customize EVAL solutions with professional services.',
      benefits: ['Certification program', 'Implementation playbooks', 'Priority support channel', 'Co-delivery projects'],
      icon: <Icons.Settings size={32} />
    }
  ];

  const partnerLogos = [
    'Google for Education', 'Microsoft', 'Amazon Web Services', 'Moodle',
    'DigiLocker', 'NASSCOM', 'AICTE', 'UGC'
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge">Partner Ecosystem</span>
          <h1 style={{ fontSize: '3.5rem' }}>Grow Together with the <br/><span className="gradient-text">EVAL Network</span></h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            We believe the best assessments are powered by an ecosystem. Partner with EVAL to expand your reach, enhance your offerings, and deliver better outcomes.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a href="#partner-tiers" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Become a Partner</a>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem' }}>Contact Partnerships</Link>
          </div>
        </div>
      </section>

      {/* Partner Stats */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', padding: '4rem 0', gap: '3rem' }}>
          {[
            { label: 'Active Partners', value: '85+' },
            { label: 'Integration Points', value: '25+' },
            { label: 'Countries Covered', value: '12' },
            { label: 'Joint Deployments', value: '300+' }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.value}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: '800', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Integrations</span>
            <h2>Connected <span className="gradient-text">Ecosystem</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>EVAL integrates with the tools your institution already uses, ensuring zero friction adoption.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {integrations.map((item, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)', fontWeight: '900', fontSize: '1.25rem'
                  }}>{item.name.charAt(0)}</div>
                  <span style={{
                    padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.6875rem',
                    background: 'var(--muted)', fontWeight: '700', color: 'var(--muted-foreground)',
                    textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}>{item.category}</span>
                </div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>{item.name}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: 0, lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="section-padding" id="partner-tiers" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge">Partnership Models</span>
            <h2>Choose Your <span className="gradient-text">Partner Path</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
            {partnerTiers.map((tier, i) => (
              <div key={i} className="card" style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-light)', borderRadius: '1.5rem' }}>{tier.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{tier.tier}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', textAlign: 'center', marginBottom: '2.5rem' }}>{tier.desc}</p>
                <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2.5rem', flex: 1 }}>
                  {tier.benefits.map((b, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9375rem' }}>
                      <Icons.Check size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> {b}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partner Logos */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge">Trusted Collaborations</span>
          <p style={{ fontWeight: '800', fontSize: '0.875rem', marginBottom: '4rem', textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>Aligned with industry leaders and regulatory bodies</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
            {partnerLogos.map((name, i) => (
              <div key={i} style={{ fontSize: '1.25rem', fontWeight: '900', color: '#cbd5e1', letterSpacing: '-0.025em', opacity: 0.8 }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Success Story */}
      <section className="section-padding" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">Success Story</span>
            <h2>Partner <span className="gradient-text">Impact</span></h2>
          </div>
          <div className="card" style={{ padding: '4rem', borderRadius: '3rem' }}>
            <Icons.Quote size={48} style={{ color: 'var(--primary)', opacity: '0.15', marginBottom: '2rem' }} />
            <p style={{ fontStyle: 'italic', fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              "Partnering with EVAL allowed us to expand into the education vertical effortlessly. Their API documentation is impeccable, and the co-selling support helped us close 15 enterprise deals in the first quarter alone."
            </p>
            <div style={{ fontWeight: '800', fontSize: '1rem' }}>Regional VP, Cloud Solutions</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: '600' }}>Leading Cloud Infrastructure Provider</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem' }}>Ready to <span className="gradient-text">Partner?</span></h2>
          <p style={{ maxWidth: '640px', margin: '2rem auto 4rem', fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>Whether you're a technology company, system integrator, or regional distributor—there's a place for you in the EVAL ecosystem.</p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 4rem' }}>Start Partnership Conversation</Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;
