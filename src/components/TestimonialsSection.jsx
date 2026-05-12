import * as Icons from '@/components/LucideFix';
import React, { useState, useEffect } from 'react';
import SectionHeader from './common/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "The application is performing exceptionally well in the checking and evaluation process. The OMR scanning and result processing are accurate, smooth, and highly efficient. It has significantly improved our exam evaluation system by saving time and reducing manual errors. Overall, we are very satisfied with its performance and appreciate the support provided by your team.",
      author: 'Anil Patil & Manish Jha',
      role: 'Catalyst Coaching Class',
      org: 'Silvassa',
      images: [
        '/assets/images/Testimonials/catalyst-classes-silvassa-diu-logo.png'
      ]
    },
    {
      quote: "Before being introduced to eval, our evaluation process was time consuming and more often a frustrating one. Managing data, tracking it and ensuring consistency while correcting the papers required significant effort and coordination. But this app really transformed the entire process. The Eval app brought all the stuff into one intuitive platform and made the hourly long process gets done within no time with much more accuracy.",
      author: 'Shaju Joseph',
      role: 'Principal',
      org: 'St. Joseph College',
      images: [
        '/assets/images/Testimonials/ST JOSEPH-logo.png'
      ]
    },
    {
      quote: "The adoption of eVal has significantly enhanced the efficiency, accuracy, and transparency of the evaluation process. The software’s ability to process large volumes of OMR sheets with high speed and near-perfect accuracy has streamlined examination workflows and reduced manual effort considerably. The University is using this software for its Recruitment as well as Admission Examination.",
      author: 'Er. S Govind Singh',
      role: 'System Analyst',
      org: 'Central Agricultural University, Imphal',
      images: [
        '/assets/images/Testimonials/Central_Agricultural_University_Logo.png'
      ]
    },
    {
      quote: "I would like to take a moment to express our sincere appreciation for the excellent performance of your software and scanner during our recent examination process. The system functioned smoothly and efficiently, which greatly supported our team in conducting the examination successfully. The support provided by your team is truly commendable and highly appreciated.",
      author: 'Abhishek Dwivedi',
      role: 'Admin Executive',
      org: 'Smt. D G Agrawal Memorial School, Maharashtra',
      images: [
        '/assets/images/Testimonials/DG.jpeg'
      ]
    },
    {
      quote: "Hi, we have been using this software for 4 years. It is good product, accuracy is also good and technical service is also good. We are highly satisfied with the automation and reliability eVAL brings to our institution.",
      author: 'PACE Shimoga',
      role: 'Institution Partner',
      org: 'Shimoga',
      images: [
        '/assets/images/Testimonials/PACE.png'
      ]
    },
    {
      quote: "OMR scanner and evaluation software have been purchased, installed, and are working properly. The system is adequate for examination and evaluation purposes. It has simplified our result processing significantly.",
      author: 'Little Flowers SCH',
      role: 'Academic Board',
      org: 'Madhupuram Walterganj Basti R.O Allahabad',
      images: [
        '/assets/images/Testimonials/LITTLE FLOWER.jpeg'
      ]
    },
    {
      quote: "We are pleased to share our positive feedback regarding the Eval OMR Software developed by VIR Softech. We have been using the software for our examination and evaluation processes, and we are highly satisfied with its performance, accuracy, and user-friendly interface. The software has significantly streamlined the OMR assessment process, reduced manual efforts, and improved efficiency in result processing. We also appreciate the timely support and cooperation provided by the VIR Softech team whenever required.",
      author: 'Pradip Maradiya',
      role: 'Noble University',
      org: 'Junagadh, Gujarat',
      images: [
        '/assets/images/Testimonials/noble university.png'
      ]
    },
    {
      quote: "qSarthi is pleased to place on record its appreciation for the eVAL Examination Software. The solution has significantly improved the efficiency, transparency, and accuracy of our answer script evaluation process. The software is user-friendly, secure, and well-organized, enabling our evaluators and administrators to complete assessments faster while maintaining confidentiality and fairness. Its digital workflow has minimized manual effort and reduced the chances of human error considerably.",
      author: 'Rohit Panchal',
      role: 'IT-Head',
      org: 'qSarthi Kota',
      images: [
        '/assets/images/Testimonials/qsarthi.png'
      ]
    },
    {
      quote: "National Cadet Corps(NCC) is pleased to place on record its appreciation for the eVAL Examination Software provided by VIR Softech Pvt. Ltd. The implementation of this solution has greatly enhanced the efficiency and transparency of our examination answer script evaluation process. The software is well-structured, easy to operate, and has enabled our evaluators and administrators to complete assessments in a much faster and more organized manner. We would also like to acknowledge the dedicated technical assistance and timely support extended by the VIR Softech team during deployment, training and live operations. Their professional approach and responsiveness ensured a seamless transition from conventional evaluation methods to a modern digital platform.",
      author: 'Brig KS BAWA',
      role: 'Gp Cdr',
      org: "NCC Group HQ Mumbai 'A'",
      images: [
        '/assets/images/Testimonials/ncc.png'
      ]
    },
    {
      quote: "We would like to share our experience of eVAL OMR reader software. We are pleased with the services and support provided through the eVAL OMR Reading Software. The software has helped streamline the OMR answer sheet processing work with good accuracy and faster result generation. The platform is easy to operate and has reduced manual effort and chances of human error during OMR evaluation. One of the useful features is the ability to design customized OMR sheets as per examination requirements. The overall performance and support provided by VIR Softech have been satisfactory.",
      author: 'V.K. Vishwakarma',
      role: 'Examination Manager',
      org: 'School for Aircraft Maintenance Engineering',
      images: [
        '/assets/images/Testimonials/same.png'
      ]
    },
    {
      quote: "We are highly satisfied with the OMR Evaluation Software provided by Virsoftech. Their solution has significantly improved the accuracy, efficiency, and speed of our examination evaluation process. The software is user-friendly, reliable, and supported by a highly responsive technical team. Virsoftech has proven to be a dependable technology partner, and we confidently recommend their OMR Evaluation Software to institutions seeking efficient and accurate examination management solutions",
      author: 'Team RPSIS‑89',
      role: 'RPS International School',
      org: 'Gurugram',
      images: [
        '/assets/images/Testimonials/rpsis.jpg'
      ]
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding" style={{ background: 'white', overflow: 'hidden' }}>
      <div className="container">
        <SectionHeader
          badge="Global Success"
          title={<>Institutional <span className="gradient-text">Voices</span></>}
          text="Hear from the leaders who are transforming evaluation with eVAL's deep-tech ecosystem."
        />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
                gap: '2.5rem',
                minHeight: '400px'
              }}
            >
              {/* Show two cards if possible, or just the active one on mobile */}
              {[activeIndex, (activeIndex + 1) % testimonials.length].map((idx, i) => (
                <div key={`${idx}-${i}`} style={{
                  background: '#ffffff', // Clean white card on muted section
                  borderRadius: '1.5rem',
                  padding: '3.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                  border: '1px solid var(--border)'
                }}>
                  <div>
                    {/* Theme Primary Quote */}
                    <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                      <Icons.Quote size={48} fill="var(--primary)" strokeWidth={0} />
                    </div>

                    <p style={{
                      fontSize: '1.0625rem',
                      lineHeight: '1.7',
                      color: 'var(--muted-foreground)',
                      marginBottom: '4rem',
                      fontWeight: '500'
                    }}>
                      {testimonials[idx].quote}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    {/* Single Focused Avatar / Logo */}
                    <div style={{ position: 'relative', bottom: '-4.5rem', left: '-1rem' }}>
                      <div style={{
                        width: '85px',
                        height: '85px',
                        borderRadius: '50%',
                        background: 'white',
                        padding: '4px',
                        border: '4px solid var(--primary)',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <img
                          src={testimonials[idx].images[0]}
                          alt="Client"
                          style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                        />
                      </div>
                    </div>

                    {/* Author Details - Right Aligned */}
                    <div style={{ textAlign: 'right' }}>
                      <h4 style={{ color: 'var(--primary)', fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                        {testimonials[idx].author}
                      </h4>
                      <p style={{ color: 'var(--primary)', opacity: 0.8, fontSize: '0.9375rem', fontWeight: '500', lineHeight: 1.4 }}>
                        {testimonials[idx].role} <br />
                        {testimonials[idx].org}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '6rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: activeIndex === i ? '30px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: activeIndex === i ? 'var(--primary)' : '#e2e8f0',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
