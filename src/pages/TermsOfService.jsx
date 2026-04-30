import React from 'react';
import SEO from '@/components/common/SEO';
import SectionHeader from '@/components/common/SectionHeader';

const TermsOfService = () => {
  return (
    <div className="terms-page" style={{ paddingTop: 'var(--nav-height)' }}>
      <SEO
        title="Terms of Service | eVAL EdTech"
        description="Read the terms of service and agreement for using eVAL's assessment and evaluation platform."
      />

      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 164, 0.03) 0%, white 100%)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <SectionHeader
            badge="Legal"
            title={<>Terms of <span className="gradient-text">Service</span></>}
            text="Please read these terms carefully before using the eVAL platform."
          />

          <div style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', fontSize: '1.0625rem' }}>
            <p style={{ marginBottom: '2rem' }}>
              Welcome to eVAL. These Terms of Service ("Terms") govern your access to and use of the eVAL website and services provided by <strong>Vir Softech Pvt. Ltd.</strong> ("Company", "we", "us", or "our"). By creating an account or using our services, you agree to be bound by these Terms.
            </p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>1. Services and Product</h3>
            <p>
              eVAL is an advanced institutional assessment and evaluation platform designed to streamline examination preparation, delivery, and performance analysis. We provide customers with access to our online assessment environment via secure infrastructure.
            </p>
            <p>
              <strong>Infrastructure Updates:</strong> In the event of planned maintenance or infrastructure changes, we will make reasonable efforts to notify customers in advance.
            </p>
            <p>
              <strong>Account Security:</strong> You are responsible for providing accurate identification during registration and maintaining the security of your account. Any unauthorized use must be reported immediately. Vir Softech is not liable for losses resulting from inaccurate information or compromised account security.
            </p>
            <p>
              <strong>Service Continuity:</strong> While our team works tirelessly to ensure 100% uptime, service is dependent on external factors like network stability and server providers. In case of technical errors, our priority support team will work to resolve issues with urgency, understanding the critical nature of examination events.
            </p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>2. Subscription Terms</h3>
            <p>
              Service begins on the date of subscription. We will notify you in advance of your renewal date. A grace period of one week is provided for renewals. Customers may request account termination by contacting our support team for subscription cancellation.
            </p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>3. Usage Policy</h3>
            <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--primary-light)' }}>
              <p><strong>A. Prohibited Activities:</strong> Use of our services for spam, hacking (IP scanning, DOS attacks), or any attempt to breach network security is strictly prohibited. Intellectual property rights, including copyrights and patents, are strictly reserved by Vir Softech.</p>
              <p><strong>B. Information Integrity:</strong> All personal and institutional information provided must be accurate. We reserve the right to suspend accounts found with mismatched or false information.</p>
              <p><strong>C. Resource Management:</strong> Multiple accounts for a single organization are not permitted unless specified in the plan. Excessive attempt volumes beyond subscription limits may be restricted to ensure system stability.</p>
              <p><strong>D. Concurrency:</strong> Default concurrency is set to 10% of the monthly limit. Vir Softech is not responsible for system instability if actual usage exceeds this limit without prior coordination.</p>
            </div>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>4. Account Cancellation</h3>
            <p>
              Users are responsible for their account cancellation and data backup. Upon formal instruction for cancellation, all content associated with the account panel will be permanently deleted from our servers.
            </p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>5. Cancellation and Refund Policy</h3>
            <p>
              <strong>Requests:</strong> Cancellation requests must be submitted through official support channels with relevant transaction details.
            </p>
            <p>
              <strong>Timeframe:</strong> Requests are processed within 15 business days. Eligible refunds will be issued to the original payment method.
            </p>
            <p>
              <strong>Technical Discrepancies:</strong> In case of payment failures where money is deducted but not reflected in our ERP (Ginger Webs ERP), users must contact our support. If our bank reflects the receipt, we will manually rectify it; otherwise, the user must coordinate with the payment gateway.
            </p>
            <p>
              <strong>Multiple Payments:</strong> If multiple payments occur for the same transaction, a refund will be processed upon confirmation, or the amount may be adjusted against future fees at the customer's request.
            </p>

            <h3 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1.5rem' }}>6. Governing Law</h3>
            <p style={{ marginBottom: '4rem' }}>
              This agreement is governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Noida/Delhi, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
