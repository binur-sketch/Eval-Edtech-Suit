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
        <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--foreground)' }}>{question}</span>
        <span style={{ 
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
        }}>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div style={{ 
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        paddingTop: isOpen ? '1rem' : '0',
        opacity: isOpen ? 1 : 0
      }}>
        <p style={{ marginBottom: 0, fontSize: '1rem' }}>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need special scanners for OMR processing?",
      answer: "No. EVAL OMR works with any standard image scanner, including basic flatbed or ADF scanners. You don't need specialized high-cost OMR hardware."
    },
    {
      question: "Is the CBT platform secure against cheating?",
      answer: "Yes. Our CBT platform includes an Anti-Cheating engine, AI proctoring with facial recognition, and secure browser lockdowns to ensure 100% integrity."
    },
    {
      question: "Can I use plain paper for OMR sheets?",
      answer: "Absolutely. EVAL is designed to work with standard 70-80 GSM photocopying paper, significantly reducing your stationery costs."
    },
    {
      question: "Scale of students EVAL can handle?",
      answer: "Our cloud-native infrastructure is built for global scale, currently handling millions of students across national and state-level examination boards."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge">Support</span>
          <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '2rem', border: '1px solid var(--border)' }}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
