import React from 'react';
import * as Icons from './LucideFix';

const WorkflowSection = () => {
  const steps = [
    { title: 'Design & Print', icon: <Icons.Printer size={26} />, desc: 'Create custom sheets and print on ordinary paper.' },
    { title: 'Scan Sheets', icon: <Icons.Scan size={26} />, desc: 'Use any standard scanner or mobile device.' },
    { title: 'AI Processing', icon: <Icons.Zap size={26} />, desc: 'Instant 100% accurate digital evaluation.' },
    { title: 'Results & Analytics', icon: <Icons.BarChart3 size={26} />, desc: 'Generate reports and deep insights instantly.' }
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge">How it Works</span>
          <h2>
            Streamlined <span className="gradient-text">Evaluation Workflow</span>
          </h2>
        </div>

        {/* Workflow Row */}
        <div className="workflow-row">

          {/* Line */}
          <div className="workflow-line"></div>

          {steps.map((s, i) => (
            <div key={i} className="workflow-step">

              {/* Circle */}
              <div className="step-circle">
                {s.icon}
              </div>

              {/* Number */}
              <div className="step-number">{i + 1}</div>

              {/* Card */}
              <div className="step-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`

        .workflow-row {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }

        /* CONNECTING LINE */
        .workflow-line {
          position: absolute;
          top: 36px;
          left: 5%;
          width: 90%;
          height: 2px;
          background: linear-gradient(to right, var(--primary), rgba(0,0,0,0.1));
          z-index: 0;
        }

        /* STEP */
        .workflow-step {
          position: relative;
          flex: 1;
          text-align: center;
          z-index: 1;
        }

        /* ICON CIRCLE */
        .step-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          color: var(--primary);
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        /* NUMBER BADGE */
        .step-number {
          margin-top: 0.6rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
        }

        /* CARD */
        .step-card {
          margin-top: 1.2rem;
          background: var(--muted);
          padding: 1.5rem;
          border-radius: 1.2rem;
          border: 1px solid var(--border);
          transition: 0.3s;
          min-height: 140px;
        }

        .step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .step-card h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .step-card p {
          font-size: 0.875rem;
          color: var(--muted-foreground);
          line-height: 1.6;
          margin: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .workflow-row {
            flex-direction: column;
            align-items: center;
          }

          .workflow-line {
            display: none;
          }

          .workflow-step {
            max-width: 400px;
          }
        }

      `}</style>
    </section>
  );
};

export default WorkflowSection;