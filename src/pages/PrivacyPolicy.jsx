import React from 'react';
import SEO from '@/components/common/SEO';
import SectionHeader from '@/components/common/SectionHeader';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page" style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO
        title="Privacy Policy | eVAL EdTech"
        description="Data privacy and protection policy for eVAL assessment and evaluation platform."
      />

      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <SectionHeader
            badge="Legal"
            title={<>Privacy <span className="gradient-text">Policy</span></>}
            text="Version: 2.0.0.1 | Last Updated: April 1st, 2026"
          />

          <div style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', fontSize: '1.0625rem' }}>
            <p style={{ marginBottom: '2rem' }}>
              By accessing this website, participating in our data collection initiatives, and/or availing any of our services, you agree to the terms of this Data Privacy and Protection Policy.
            </p>

            <div style={{ background: 'var(--muted)', padding: '2rem', borderRadius: '1.5rem', marginBottom: '3rem' }}>
              <h4 style={{ color: 'var(--foreground)', marginBottom: '1rem' }}>Table of Contents</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                <li>1. Terms used in this policy</li>
                <li>2. Our commitment</li>
                <li>3. Data collection & purpose</li>
                <li>4. Data sharing</li>
                <li>5. Data retention</li>
                <li>6. Data transfer</li>
                <li>7. Your rights</li>
                <li>8. Cookies policy</li>
                <li>9. Data security</li>
                <li>10. Contact us</li>
              </ul>
            </div>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>1. TERMS USED IN THIS POLICY</h3>
            <p><strong>“Personal Data”</strong> means any information relating to an identified or identifiable natural person.</p>
            <p><strong>“Service”</strong> refers to any assessment, evaluation, or institutional service that <strong>eVAL</strong> provides. You are using our Service when you sign up or sign in to get access to any Service provided by us.</p>
            <p><strong>“we”, “us”, “our”, and “eVAL”</strong> refer to eVAL, a product by <strong>Vir Softech Pvt. Ltd.</strong></p>
            <p><strong>“Processor”</strong> means eVAL (Vir Softech Pvt. Ltd.), which processes personal data on behalf of the Controller (Client Organization) in accordance with applicable data protection laws, including GDPR.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>2. OUR COMMITMENT TOWARDS PROTECTING PERSONAL INFORMATION</h3>
            <p>Your privacy is paramount. We act in accordance with applicable data protection laws, including GDPR. We are committed to safeguarding the privacy of our website visitors, clients, and research participants.</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>We protect your privacy and treat provided information as confidential.</li>
              <li>Information is used strictly for the purpose for which it was sought.</li>
              <li>We do not release personal information to third parties without explicit consent.</li>
              <li>We never sell your personal data to anyone.</li>
            </ul>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>3. WHAT DATA DO WE COLLECT OR PROCESS?</h3>
            <p><strong>Usage Data:</strong> We may process data about your use of our Website and Services (IP address, location, browser type, visit length) to monitor and improve our performance metrics. Legal basis: Consent or legitimate interests.</p>
            <p><strong>Service Data:</strong> This includes your name, email, and telephone number provided during service use. This is processed for service delivery, security, and communication. Legal basis: Contractual necessity or consent.</p>
            <p><strong>Transaction Data:</strong> Information relating to purchases, including contact and banking details, processed for supplying goods/services and record-keeping.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>4. WHOM DO WE SHARE YOUR DATA WITH?</h3>
            <p>We may disclose personal data to our employees, officers, or members of our group (Vir Softech) as reasonably necessary for service delivery. Financial transactions are handled by secure payment providers only to the extent necessary for processing payments or refunds.</p>
            <p>We do not sell, share, or rent your personal information to market research or direct marketing companies.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>5. DATA RETENTION</h3>
            <p>Personal data is retained only as long as necessary to achieve the purposes for which it was collected, or to comply with legal obligations. Upon expiry, data is securely deleted or anonymized.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>6. TRANSFER OF YOUR DATA</h3>
            <p>Your information may be processed at our operating offices in India. For transfers outside the EEA, we rely on Standard Contractual Clauses (SCCs) and adequate security controls to ensure a high level of protection as required by Articles 44 to 49 of the GDPR.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>7. YOUR RIGHTS</h3>
            <p>Under GDPR, you have the right to access, rectification, erasure (the "right to be forgotten"), restriction of processing, and data portability. You may exercise these rights by contacting us at <strong>corp@virsoftech.com</strong>.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>8. HOW DO WE USE COOKIES?</h3>
            <p>We use cookies for authentication, security, analysis, and to store your preferences. Analytics cookies (e.g., Google Analytics) are deployed only after informed consent via our cookie banner.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>9. SECURITY OF YOUR DATA</h3>
            <p>While no method of electronic storage is 100% secure, we use commercially acceptable means to protect your data. In case of a breach, we will notify relevant authorities and affected subjects within 72 hours where required by Articles 33 and 34 of the GDPR.</p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>10. CONTACT US</h3>
            <p><strong>eVAL</strong> is a product of <strong>Vir Softech Private Limited</strong>.</p>
            <p>Registered Office: A 306, The i-Thum,, Plot No A 40, Block A, Industrial Area,, Sector 62, Noida, Uttar Pradesh 201309</p>
            <p>
              Email: corp@virsoftech.com<br />
              Website: <a href="https://evalexam.com" style={{ color: 'inherit', textDecoration: 'underline' }}>evalexam.com</a> (Powered by virsoftech.com)
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
