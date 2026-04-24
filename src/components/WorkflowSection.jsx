import React from 'react';
import * as Icons from './LucideFix';
import { motion } from 'framer-motion';

const WorkflowSection = () => {
  const steps = [
    {
      title: 'Design OMR & Answer Key',
      icon: <Icons.PenTool size={32} />,
      desc: 'Create custom sheets easily.',
      color: 'var(--primary)',
      bg: 'var(--primary-light)'
    },
    {
      title: 'Print & Conduct Exam',
      icon: <Icons.Printer size={32} />,
      desc: 'Use ordinary paper & printers.',
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      title: 'Scan Sheets',
      icon: <Icons.Scan size={32} />,
      desc: 'Use any scanner to scan the answer sheets',
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.1)'
    },
    {
      title: 'Results & Analysis',
      icon: <Icons.BarChart3 size={32} />,
      desc: 'Share instant reports & insights.',
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.1)'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ background: 'white', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge"
          >
            How it Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Simple to <span className="gradient-text">Setup & Use</span>
          </motion.h2>
        </div>

        {/* Horizontal Flow Container */}
        <div className="workflow-h-container">
          {/* Connecting Path (Background Arcs) */}
          <div className="workflow-h-path">
            <svg width="100%" height="120" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none">
              {/* Arc 1-2 */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                d="M 125,60 C 125,10 375,10 375,60"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Arc 2-3 */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                d="M 375,60 C 375,110 625,110 625,60"
                stroke="#6366F1"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Arc 3-4 */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                d="M 625,60 C 625,10 875,10 875,60"
                stroke="#EC4899"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Arrowheads */}
              <circle cx="250" cy="15" r="4" fill="var(--primary)" />
              <circle cx="500" cy="105" r="4" fill="#6366F1" />
              <circle cx="750" cy="15" r="4" fill="#EC4899" />
            </svg>
          </div>

          <div className="workflow-h-steps">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`workflow-h-item ${i % 2 === 0 ? 'top-text' : 'bottom-text'}`}
              >
                {/* Text Content (Above for 1 & 3) */}
                {i % 2 === 0 && (
                  <div className="h-step-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                )}

                {/* Circle with Icon */}
                <div className="h-step-visual">
                  <div className="h-step-circle" style={{ borderColor: s.color, background: 'white' }}>
                    <div className="h-step-icon" style={{ color: s.color, background: s.bg }}>
                      {s.icon}
                    </div>
                  </div>
                  <div className="h-step-number" style={{ background: s.color }}>{i + 1}</div>
                </div>

                {/* Text Content (Below for 2 & 4) */}
                {i % 2 !== 0 && (
                  <div className="h-step-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .workflow-h-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .workflow-h-path {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 120px;
          transform: translateY(-50%);
          z-index: 0;
          opacity: 0.6;
        }

        .workflow-h-steps {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .workflow-h-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 25%;
          text-align: center;
          position: relative;
        }

        .h-step-visual {
          position: relative;
          margin: 1.5rem 0;
        }

        .h-step-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          background: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .workflow-h-item:hover .h-step-circle {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .h-step-icon {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .h-step-number {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.75rem;
          border: 3px solid white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .h-step-content {
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: 0.3s;
        }

        .workflow-h-item:hover .h-step-content {
          transform: translateY(${i => i % 2 === 0 ? '-5px' : '5px'});
        }

        .h-step-content h3 {
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
          color: var(--secondary);
          font-weight: 800;
        }

        .h-step-content p {
          font-size: 0.85rem;
          color: var(--muted-foreground);
          margin: 0;
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 850px) {
          .workflow-h-steps {
            flex-direction: column;
            gap: 2.5rem;
          }

          .workflow-h-path {
            display: none;
          }

          .workflow-h-item {
            width: 100%;
            flex-direction: row !important;
            text-align: left;
            gap: 1.5rem;
          }

          .h-step-content {
            height: auto;
            text-align: left;
          }

          .top-text, .bottom-text {
            flex-direction: row !important;
          }

          .h-step-visual {
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkflowSection;


