import React, { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import SectionHeader from './common/SectionHeader';


const Counter = ({ value, duration = 1.5 }) => {
  const count = useMotionValue(0);

  // Clean the value to get the number part
  const numPart = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');

  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    const controls = animate(count, numPart, { duration, ease: "easeOut" });
    return controls.stop;
  }, [numPart, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsSection = () => {
  const stats = [
    { label: 'Global Presence Countries', val: '10+' },
    { label: 'Domestic Segment Clients', val: '5000+' },
    { label: 'Universities', val: '200+' },
    { label: 'Colleges', val: '2000+' },
    { label: 'Political Parties, Survey & Others', val: '100+' },
    { label: 'Coaching', val: '2900+' },
    { label: 'OMR Sheets Evaluated', val: '25 Cr+' },
    { label: 'Years Of Experience', val: '10+' }
  ];

  return (
    <section id="stats" className="section-padding" style={{ background: 'white', position: 'relative' }}>

      <div className="container">

        <SectionHeader
          badge="Institutional Impact"
          title={<>Trusted by <span className="gradient-text">Institutions Worldwide</span></>}
          text="Powering large-scale examinations with unmatched speed, accuracy, and reliability."
        />


        <div className="stats-grid-v3">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="stat-item-v3"
            >
              <div className="stat-line-v3" />

              <div className="stat-content-v3">
                <div className="stat-value-v3">
                  <Counter value={item.val} />
                </div>
                <div className="stat-label-v3">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid-v3 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .stat-item-v3 {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .stat-line-v3 {
          width: 4px;
          height: 60px;
          background: #0EA5A4;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .stat-value-v3 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1A3636;
          line-height: 1.1;
          margin-bottom: 0.3rem;
          font-family: 'Outfit', sans-serif;
        }

        .stat-label-v3 {
          font-size: 0.9375rem;
          color: #4A5568;
          line-height: 1.3;
          font-weight: 600;
          max-width: 180px;
        }

        @media (max-width: 1024px) {
          .stats-grid-v3 {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1rem;
          }
        }

        @media (max-width: 640px) {
          .stats-grid-v3 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .stat-value-v3 {
            font-size: 2rem;
          }

          .stat-line-v3 {
            height: 50px;
          }
        }
      `}</style>
    </section >
  );
};


export default StatsSection;