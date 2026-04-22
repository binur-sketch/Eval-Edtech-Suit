import React, { useState, useEffect } from 'react';
import * as Icons from './LucideFix';

const CaseStudySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      id: 1,
      title: 'National Cadet Corps (NCC)',
      tagline: 'End-to-End OMR Examination Automation',
      tags: ['OMR', 'Admit Card', 'Certificates'],
      color: 'var(--primary)',
      background: 'The National Cadet Corps (NCC) conducts certification examinations across the country for Junior & Senior Division cadets. These exams evaluate cadets\' knowledge, discipline, and readiness for defense-related opportunities.',
      points: [
        'Conducted offline across multiple NCC units',
        '\'A\' Certificate – School Level Cadets',
        '\'B\' & \'C\' Certificates – College Level Cadets',
        'Examination mode traditionally based on Physical test papers & OMR sheets'
      ],
      solution: 'Vir Softech deployed an Examination Management System tailored for NCC operations in 500+ Locations.',
      features: [
        { title: 'OMR Examination Software', items: ['Automated OMR sheet reading & scoring', 'High processing accuracy with instant error detection'] },
        { title: 'Admit Card Generation System', items: ['Secure identity validation with QR Code', 'Highly Secure with integration of Digitally Signed'] },
        { title: 'Certificate Generator Tool', items: ['Auto-qualified certification as per scoring rules', 'Secure certificate design, print & digital Signature'] }
      ],
      outcomes: [
        'NCC successfully transitioned to a digitally enabled offline OMR examination ecosystem',
        'Faster and more accurate evaluation process',
        'Streamlined certification for thousands of cadets nationwide'
      ]
    },
    {
      id: 2,
      title: 'Union Public Service Commission (UPSC)',
      tagline: 'Automated ICR/OCR Based Marks Processing',
      tags: ['ICR', 'OCR', 'Security'],
      color: 'var(--secondary)',
      background: 'The Union Public Service Commission (UPSC) is India’s premier central recruitment agency. It conducts nationwide competitive examinations attended by millions of aspirants.',
      points: [
        'Marks are handwritten on the back of answer sheets',
        'Different questions have different validation rules',
        'Manual data entry resulted in high chance of human error',
        'Difficult tracking & verification at scale'
      ],
      solution: 'Vir Softech deployed its advanced eVAL Evaluation System using cutting-edge character recognition (ICR/OCR).',
      features: [
        { title: 'ICR Technology', items: ['Reads handwritten marks with validation logic', 'Automated extraction with built-in rule checks'] },
        { title: 'OCR Intelligence', items: ['Reads roll numbers & identifiers on each sheet', 'Ensures 100% data integrity for identifiers'] },
        { title: 'Workflow Automation', items: ['Instant processing & centralized result mapping', 'Export-ready formats (PDF, Excel, CSV, DBF)'] }
      ],
      outcomes: [
        'Eliminated human calculation errors entirely',
        'Cut result preparation cycles by 60%',
        'Guaranteed 100% data integrity for national-level recruitment'
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cases.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const current = cases[activeIndex];

  return (
    <div style={{ position: 'relative' }}>
      {/* Container */}
      <div className="card" style={{ 
        padding: 0, 
        overflow: 'hidden', 
        background: 'white', 
        minHeight: '600px',
        transition: 'all 0.5s ease'
      }}>
        {/* Header */}
        <div style={{ 
          background: current.color, 
          padding: '2.5rem 4rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap',
          transition: 'background 0.5s ease'
        }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'rgba(255,255,255,0.15)', 
            borderRadius: '1rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexShrink: 0 
          }}>
            <Icons.Award size={32} color="white" />
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>
              Case Study {current.id}
            </div>
            <h3 style={{ color: 'white', fontSize: '1.75rem', margin: 0 }}>{current.title}</h3>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {current.tags.map(tag => (
              <span key={tag} style={{ 
                padding: '0.4rem 0.9rem', 
                background: 'rgba(255,255,255,0.12)', 
                borderRadius: '0.5rem', 
                fontSize: '0.6875rem', 
                fontWeight: '700', 
                color: 'white' 
              }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ padding: '3rem 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          {/* Left Column */}
          <div>
            <h4 style={{ color: current.color, fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Background</h4>
            <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
              {current.background}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
              {current.points.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: '1.6' }}>
                  <Icons.ChevronRight size={16} style={{ color: current.color, flexShrink: 0, marginTop: '2px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 style={{ color: current.color, fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Solution: {current.tagline}</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              {current.solution}
            </p>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {current.features.map((block, i) => (
                <div key={i} style={{ background: 'var(--muted)', borderRadius: '1rem', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
                    <Icons.CheckCircle2 size={16} style={{ color: current.color, flexShrink: 0 }} />
                    <span style={{ fontWeight: '800', fontSize: '0.8125rem', color: 'var(--foreground)' }}>{block.title}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, paddingLeft: '1.25rem', display: 'grid', gap: '0.25rem' }}>
                    {block.items.map((item, j) => (
                      <li key={j} style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', lineHeight: '1.5' }}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome Strip */}
        <div style={{ 
          background: activeIndex === 0 ? 'var(--secondary)' : 'var(--primary)', 
          padding: '2rem 4rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap',
          transition: 'all 0.5s ease'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Combined Outcome</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {current.outcomes.map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.9)', fontSize: '0.8125rem', lineHeight: '1.4' }}>
                  <Icons.Check size={14} style={{ color: 'white', flexShrink: 0, marginTop: '2px' }} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
        {cases.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: i === activeIndex ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: i === activeIndex ? 'var(--primary)' : '#e2e8f0',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to case study ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudySlider;
