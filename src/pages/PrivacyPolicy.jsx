import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = 'April 1, 2026';

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'We collect information that you provide directly to us when you create an account, request a demo, contact support, or engage with our services. This includes:',
        '• Personal identifiers (name, email, phone number, institutional role)',
        '• Institutional data (organization name, type, size, location)',
        '• Technical data (IP address, browser type, device information, cookies)',
        '• Assessment data (examination results, student performance metrics)',
        '• Usage data (feature engagement, session duration, navigation patterns)',
        'We never collect or store student biometric data beyond the session-level AI proctoring requirements, which are immediately discarded post-examination.'
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'We use the information we collect to:',
        '• Provide, maintain, and improve the EVAL Suite of products',
        '• Process examination data and generate institutional analytics',
        '• Send transactional communications about your account and services',
        '• Provide technical support and respond to your inquiries',
        '• Detect, investigate, and prevent fraudulent activity or security breaches',
        '• Comply with legal obligations and regulatory requirements',
        '• Develop new features based on usage patterns and institutional feedback'
      ]
    },
    {
      title: '3. Data Sharing & Third Parties',
      content: [
        'We do not sell your personal information. We may share data with:',
        '• Cloud infrastructure providers (AWS, Azure) for hosting and storage—bound by strict data processing agreements',
        '• Payment processors for handling subscription billing securely',
        '• Analytics partners to improve product performance (anonymized data only)',
        '• Legal authorities when required by law, regulation, or valid legal process',
        'All third-party processors are evaluated for security compliance and bound by contractual obligations to protect your data.'
      ]
    },
    {
      title: '4. Data Security',
      content: [
        'We employ industry-standard security measures including:',
        '• AES-256 encryption for data at rest and TLS 1.3 for data in transit',
        '• Multi-factor authentication for all administrative access',
        '• Regular penetration testing and vulnerability assessments',
        '• SOC 2 Type II certified operational controls',
        '• ISO 27001 certified information security management system',
        '• Geographic data residency options for compliance-sensitive institutions'
      ]
    },
    {
      title: '5. Data Retention',
      content: [
        'We retain your data for the duration of your active subscription plus a grace period of 90 days. After termination:',
        '• Institutional assessment data is retained for legal compliance periods as required by applicable education regulations',
        '• Personal identifiers are anonymized or deleted within 30 days of account closure',
        '• Backup copies are purged within 90 days following our data lifecycle policy',
        'You may request early deletion by contacting our Data Protection Office at dpo@virsoftech.com.'
      ]
    },
    {
      title: '6. Your Rights',
      content: [
        'Depending on your jurisdiction, you may have the right to:',
        '• Access the personal data we hold about you',
        '• Rectify inaccurate or incomplete data',
        '• Request deletion of your personal data',
        '• Restrict or object to certain processing activities',
        '• Data portability—receive your data in a structured, machine-readable format',
        '• Withdraw consent for optional data processing',
        'To exercise any of these rights, contact us at privacy@virsoftech.com. We respond to all verified requests within 30 days.'
      ]
    },
    {
      title: '7. Cookies & Tracking',
      content: [
        'We use cookies and similar technologies for:',
        '• Essential cookies: Required for platform functionality (session management, security tokens)',
        '• Analytics cookies: To understand usage patterns and improve our products',
        '• Preference cookies: To remember your settings and display preferences',
        'You can manage cookie preferences through your browser settings. Disabling essential cookies may impair platform functionality.'
      ]
    },
    {
      title: '8. International Data Transfers',
      content: [
        'EVAL operates globally. Your data may be processed in India, where our primary data centers are located. For international clients:',
        '• We offer data residency options in AWS Mumbai, AWS Bahrain, and Azure UAE North',
        '• EU data transfers are governed by Standard Contractual Clauses (SCCs)',
        '• We comply with applicable data protection regulations including GDPR, IT Act 2000, and PDPA'
      ]
    },
    {
      title: '9. Children\'s Privacy',
      content: [
        'EVAL services are provided to educational institutions, not directly to children. We process student data as a data processor on behalf of the institution (data controller). We do not knowingly collect personal information directly from individuals under 13 years of age without institutional and parental consent.'
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: [
        'We may update this Privacy Policy periodically. Material changes will be communicated via email to institutional administrators and posted on our platform with a 30-day advance notice. Continued use of our services after changes constitutes acceptance of the updated policy.'
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.03) 0%, white 100%)', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge">Legal</span>
          <h1>Privacy <span className="gradient-text">Policy</span></h1>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
            At EVAL, protecting your data is not just compliance—it's a core value. This policy explains how we collect, use, and safeguard your information.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: '700' }}>Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'white', padding: '4rem 0 8rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: '3.5rem' }}>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>{section.title}</h3>
              {section.content.map((paragraph, j) => (
                <p key={j} style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.8', 
                  color: 'var(--muted-foreground)', 
                  marginBottom: '0.75rem',
                  paddingLeft: paragraph.startsWith('•') ? '1rem' : '0'
                }}>{paragraph}</p>
              ))}
            </div>
          ))}

          {/* Contact Box */}
          <div className="card" style={{ 
            padding: '3rem', 
            background: 'var(--muted)', 
            borderRadius: '2rem', 
            marginTop: '4rem',
            textAlign: 'center' 
          }}>
            <h4 style={{ marginBottom: '1rem' }}>Questions About Your Data?</h4>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
              Our Data Protection Office is here to help. Contact us for any privacy-related concerns or to exercise your data rights.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="mailto:dpo@virsoftech.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Email DPO</a>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Contact Form</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
