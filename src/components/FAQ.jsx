import React, { useState } from 'react';
import * as Icons from './LucideFix';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      borderBottom: '1px solid var(--border)',
      padding: '1.5rem 0'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span className="gradient-text" style={{ fontSize: '1.25rem', fontWeight: '800' }}>{question}</span>
        <div style={{
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          color: 'var(--primary)',
          background: 'var(--primary-light)',
          padding: '8px',
          borderRadius: '50%',
          display: 'flex'
        }}>
          <Icons.ChevronDown size={20} />
        </div>
      </button>
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isOpen ? 1 : 0
      }}>
        <div style={{ padding: '1rem 0 0.5rem' }}>
          <p style={{ marginBottom: 0, fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: '1.7' }}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need special scanners for OMR processing?",
      answer: "No. eVAL OMR works with any standard image scanner, including basic flatbed or ADF scanners. You don't need specialized high-cost OMR hardware."
    },
    {
      question: "Is the CBT platform secure against cheating?",
      answer: "Yes. Our CBT platform includes an Anti-Cheating engine, AI proctoring with facial recognition, and secure browser lockdowns to ensure 100% integrity."
    },
    {
      question: "Can I use plain paper for OMR sheets?",
      answer: "Absolutely. eVAL is designed to work with standard 70-80 GSM photocopying paper, significantly reducing your stationery costs."
    },
    {
      question: "Scale of students eVAL can handle?",
      answer: "Our cloud-native infrastructure is built for global scale, currently handling millions of students across national and state-level examination boards."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge">Support</span>
          <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div style={{ background: 'white', padding: '1.5rem clamp(1.5rem, 5vw, 4rem)', borderRadius: '2.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
