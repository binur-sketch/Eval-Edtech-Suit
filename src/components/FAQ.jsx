import React, { useState } from 'react';
import * as Icons from './LucideFix';
import SectionHeader from './common/SectionHeader';


/* =========================
   FAQ ITEM
========================= */
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
        padding: '1.5rem 0'
      }}
    >
      <button
        onClick={onClick}
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
        <span
          className="gradient-text"
          style={{
            fontSize: '1.1rem',
            fontWeight: '800',
            lineHeight: '1.4'
          }}
        >
          {question}
        </span>

        <div
          style={{
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            color: 'var(--primary)',
            background: 'var(--primary-light)',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            flexShrink: 0
          }}
        >
          <Icons.ChevronDown size={20} />
        </div>
      </button>

      {/* Answer */}
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'all 0.35s ease',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div style={{ padding: '1rem 0 0.5rem' }}>
          <p
            style={{
              marginBottom: 0,
              fontSize: '0.95rem',
              color: 'var(--muted-foreground)',
              lineHeight: '1.7'
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================
   DEFAULT FAQ (Fallback)
========================= */
const defaultFaqs = [
  {
    question: "Do I need special scanners for OMR processing?",
    answer:
      "No. eVAL OMR works with any standard image scanner including flatbed and ADF scanners."
  },
  {
    question: "Is the platform secure?",
    answer:
      "Yes, the system includes role-based access, encryption, and anti-cheating mechanisms."
  }
];

/* =========================
   MAIN FAQ COMPONENT
========================= */
const FAQ = ({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Support",
  allowMultipleOpen = false,
  background = 'white'
}) => {

  const [openIndex, setOpenIndex] = useState(null);
  const [multiOpen, setMultiOpen] = useState([]);

  const handleToggle = (index) => {
    if (allowMultipleOpen) {
      setMultiOpen((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <section className="section-padding" style={{ background }}>
      <div className="container" style={{ maxWidth: '1100px' }}>

        <SectionHeader 
          badge={subtitle}
          title={<>{title.split(' ')[0]} <span className="gradient-text">{title.split(' ').slice(1).join(' ')}</span></>}
        />


        {/* FAQ Box */}
        <div
          style={{
            background: 'white',
            padding: '1.5rem clamp(1.5rem, 5vw, 3rem)',
            borderRadius: '2rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={
                allowMultipleOpen
                  ? multiOpen.includes(index)
                  : openIndex === index
              }
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;