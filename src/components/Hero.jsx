import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from '@/components/LucideFix';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      visual: "diagram"
    },
    {
      badge: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Icons.Award size={14} /> Market Leader</div>,
      title: <>India's Largest <span className="gradient-text">Examination Evaluation</span>Suite</>,
      desc: "eVAL provides an end-to-end ecosystem for modern institutions—from secure student registration and QPMS to high-speed OMR, OSM, CBT, and AI-driven proctoring.",
      ctaPrimary: "Book Free Demo",
      ctaSecondary: "Explore Solutions",
      visual: "collage"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const offlineProducts = [
    { title: 'OMR Software', icon: <Icons.FileText size={18} />, color: '#0EA5A4' },
    { title: 'On Screen Marking', icon: <Icons.Monitor size={18} />, color: '#6366F1' },
    { title: 'Olympiad Portal', icon: <Icons.GraduationCap size={18} />, color: '#8B5CF6' },
  ];

  const onlineProducts = [
    { title: 'AI Proctoring', icon: <Icons.ShieldCheck size={18} />, color: '#EC4899' },
    { title: 'CBT Platform', icon: <Icons.Zap size={18} />, color: '#F59E0B' },
    { title: 'Olympiad Portal', icon: <Icons.GraduationCap size={18} />, color: '#8B5CF6' },
  ];

  return (
    <section className="hero-v4">
      {/* Background with subtle tech pattern */}
      <div className="hero-v4-bg">
        <div className="grid-overlay"></div>
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
      </div>

      <div className="container hero-v4-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`hero-v4-grid ${slides[currentSlide].visual === "diagram" ? 'diagram-mode' : ''}`}
          >
            {/* Content Area - Only for non-diagram slides */}
            {slides[currentSlide].visual !== "diagram" && (
              <div className="hero-v4-content">
                <div className="hero-v4-badge">
                  <div className="pulse-dot"></div>
                  {slides[currentSlide].badge}
                </div>
                <h1>{slides[currentSlide].title}</h1>
                <p>{slides[currentSlide].desc}</p>

                <div className="hero-v4-cta">
                  <Link to="/book-demo" className="btn-v4-primary">
                    {slides[currentSlide].ctaPrimary} <Icons.ArrowRight size={20} />
                  </Link>
                  <Link to="#solutions" className="btn-v4-secondary">
                    {slides[currentSlide].ctaSecondary}
                  </Link>
                </div>
              </div>
            )}

            <div className={`hero-v4-visual ${slides[currentSlide].visual === "diagram" ? 'full-width' : ''}`}>
              {slides[currentSlide].visual === "diagram" ? (
                <div className="ecosystem-container detailed-suite" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                  <img
                    src="/assets/images/ecosystem-diagram.png"
                    alt="eVAL Examination Evaluation Suite Ecosystem"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: 'min(100%, 1000px)',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      borderRadius: '20px',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}
                  />
                </div>
              ) : (
                <div className="hero-collage-container">
                  <div className="collage-bg-glow"></div>

                  {/* AI Proctoring Card */}
                  <div className="collage-card ai-card">
                    <div className="card-badge"><Icons.ShieldCheck size={12} /> AI Proctoring</div>
                    <img src="/assets/images/ai_proctoring_dashboard.png" alt="AI Proctoring Dashboard" />
                  </div>

                  {/* OSM Card */}
                  <div className="collage-card osm-card">
                    <div className="card-badge"><Icons.Monitor size={12} /> OSM System</div>
                    <img src="/assets/images/OSMScreen.jpeg" alt="On-Screen Marking" />
                  </div>

                  {/* OMR Card */}
                  <div className="collage-card omr-card">
                    <div className="card-badge"><Icons.FileText size={12} /> OMR Technology</div>
                    <img src="/assets/images/omr_scanning.png" alt="OMR Scanning" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="hero-carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${currentSlide === i ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hero-v4 {
          position: relative;
          height: 85vh; /* Reduced height to keep header visible */
          min-height: 800px;
          background: #020617; /* Deepest Navy */
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-v4 {
            height: auto;
            min-height: 100vh;
            padding: 100px 0 60px;
          }
        }

        .hero-v4-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 60px;
        }

        .hero-v4-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(14, 165, 164, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 164, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: 1;
        }

        .glow-1 {
          width: 500px;
          height: 500px;
          background: var(--primary);
          top: -10%;
          right: -10%;
        }

        .glow-2 {
          width: 400px;
          height: 400px;
          background: #4F46E5;
          bottom: -10%;
          left: -5%;
        }

        .hero-v4-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hero-v4-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          justify-items: center;
          width: 100%;
          max-width: 1400px;
          min-height: 600px;
        }

        .hero-v4-grid.diagram-mode {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1rem;
          width: 100%;
          height: 100%;
        }

        .hero-v4-grid.diagram-mode .hero-v4-content {
          max-width: 850px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }

        @media (max-width: 1200px) {
          .hero-v4-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .hero-v4-content {
            max-width: 800px;
            text-align: center;
          }
          .hero-v4-cta {
            justify-content: center;
          }
          .hero-v4-content p {
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* Left Content */
        .hero-v4-content {
          max-width: 600px;
          text-align: left;
        }

        .hero-v4-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 165, 164, 0.1);
          border: 1px solid rgba(14, 165, 164, 0.2);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          animation: dotPulse 2s infinite;
        }

        @keyframes dotPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-v4-content h1 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          line-height: 1.1;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
        }

        .hero-v4-content p {
          font-size: 1.25rem;
          line-height: 1.6;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2.5rem;
          max-width: 650px;
        }

        .hero-v4-cta {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 0;
        }

        .btn-v4-primary {
          background: var(--primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(14, 165, 164, 0.2);
        }

        .btn-v4-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(14, 165, 164, 0.3);
          background: #0D8A89;
        }

        .btn-v4-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 800;
          transition: all 0.3s ease;
        }

        .btn-v4-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }


        /* Visual Ecosystem Area */
        .hero-v4-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ecosystem-container {
          position: relative;
          width: 1100px;
          height: 550px;
          transform-origin: center center;
        }

        .ecosystem-lines {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .nodes-layer {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
        }

        .eco-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .eco-node-main {
          z-index: 3;
        }

        .node-icon {
          width: 64px;
          height: 64px;
          background: #1e293b;
          border: 2px solid rgba(14, 165, 164, 0.3);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }

        .eco-node:hover .node-icon {
          transform: translateY(-5px) scale(1.1);
          border-color: var(--primary);
          box-shadow: 0 15px 40px rgba(14, 165, 164, 0.2);
        }

        .result-node:hover .node-icon {
          border-color: #10B981 !important;
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.2) !important;
        }

        .node-label {
          font-size: 0.6rem;
          font-weight: 800;
          color: white;
          white-space: nowrap;
        }

        /* Flow V8 - Architectural Blueprint */
        .flow-visual-v8 {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .flow-svg-v8 {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 5; /* Above frame, below icons */
          pointer-events: none;
        }

        .flow-nodes-v8 {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .hub-node-v8 {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 120px;
          z-index: 10;
        }

        .hub-node-v8.inner-node {
          position: relative;
          width: 120px;
          height: 64px; /* Matches hub-icon height */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hub-icon-v8 {
          width: 64px;
          height: 64px;
          background: #0f172a;
          border: 2px solid var(--primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 0 30px rgba(14, 165, 164, 0.2);
        }

        .hub-label-v8 {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 10px;
          color: white;
          text-align: center;
          line-height: 1.2;
          font-size: 0.7rem;
          font-weight: 600;
          width: 160px; /* Allow space for long titles without overlapping */
          pointer-events: none;
          display: block;
        }

        .track-label-v8 {
          font-weight: 900;
        }

        .flow-item-v8 {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(5px);
          padding: 8px 15px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.05);
          width: 180px;
        }

        .item-dot-v8 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .flow-item-v8 span {
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
        }

        .result-hub-v8 .hub-icon-v8 {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.2);
        }

        /* Detailed Suite Styles */
        .detailed-suite {
          width: 100% !important;
          max-width: 1200px;
          height: auto !important;
          aspect-ratio: 12 / 5.5;
          margin: 0 auto;
          position: relative;
        }

        .suite-frame-label {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #0EA5A4, #6366F1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 0.9rem;
          font-weight: 900;
          z-index: 10;
          white-space: nowrap;
          opacity: 0.8;
        }

        .suite-outer-frame {
          position: absolute;
          left: 150px;
          top: 0;
          width: 950px;
          height: 100%;
          display: flex;
          padding: 0 30px;
          justify-content: space-between;
          align-items: center; /* Center nodes vertically */
          z-index: 1; /* Below SVG icons */
        }

        .suite-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; /* Center content vertically */
          height: 100%;
          position: relative;
        }

        .suite-section-header {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-weight: 900;
          color: rgba(255, 255, 255, 0.4);
          background: rgba(255,255,255,0.03);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.75rem;
          white-space: nowrap;
        }

        .nodes-row {
          display: flex;
          flex-direction: column;
          gap: 40px;
          height: 100%;
          justify-content: center;
        }

        .nodes-row.horizontal {
          flex-direction: row;
          gap: 100px; /* Increased gap to prevent label overlap */
          align-items: center;
        }

        .hub-node-v8.inner-node {
          position: relative;
          left: auto !important;
          top: auto !important;
          width: auto;
        }

        .hub-icon-v8.small {
          width: 48px;
          height: 48px;
          border-radius: 14px;
        }

        .hub-icon-v8.external {
          border-color: #0EA5A4;
          box-shadow: 0 0 20px rgba(14, 165, 164, 0.3);
        }

        .exam-stacks.single-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .track-label-v8 {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          pointer-events: none;
          font-family: 'Outfit', sans-serif;
        }

        .stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .suite-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30, 41, 59, 0.6);
          padding: 6px 12px;
          border-radius: 8px;
          border-left: 3px solid;
          min-width: 160px;
        }

        .suite-item span {
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
        }

        .suite-item .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .hub-icon-v8.success {
          border-color: #10B981;
          color: #10B981;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }

        .path-label {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
          fill: currentColor;
          opacity: 0.6;
        }

        @media (max-width: 1400px) {
          .hero-v4-visual { transform: scale(0.8); }
        }

        @media (max-width: 768px) {
          .hero-v4-visual { 
            display: flex; 
            justify-content: center;
            width: 100%;
            margin-top: 2rem;
            transform: scale(0.9);
            order: 2;
          }
          .hero-v4-content {
            order: 1;
          }
          .hero-v4 { 
            height: auto;
            min-height: 100vh;
            padding: 100px 0 60px;
          }
        }

        @media (max-width: 1400px) {
          .lifecycle-grid { flex-direction: column; gap: 20px; }
          .block-arrow { transform: rotate(90deg); padding: 10px; }
          .evaluation-block { width: 100%; }
        }

        @media (max-width: 768px) {
          .hero-v4-grid.diagram-mode {
            padding: 0 1rem;
          }
        }

        /* Carousel Dots */
        .hero-carousel-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--primary);
          width: 30px;
          border-radius: 100px;
          box-shadow: 0 0 15px rgba(14, 165, 164, 0.5);
        }

        /* Collage Visual */
        .hero-collage-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .collage-bg-glow {
          position: absolute;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle at center, rgba(14, 165, 164, 0.1), transparent 70%);
          z-index: 1;
        }

        .collage-card {
          position: absolute;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .collage-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
        }

        .card-badge svg { color: var(--primary); }

        .ai-card {
          width: 320px;
          height: 200px;
          top: 0;
          right: 0;
          transform: rotate(4deg) translateZ(20px);
          animation: float 6s ease-in-out infinite;
        }

        .osm-card {
          width: 340px;
          height: 210px;
          bottom: 10%;
          right: 15%;
          transform: rotate(-2deg) translateZ(40px);
          z-index: 4;
          animation: float 7s ease-in-out infinite 0.5s;
          border-color: rgba(14, 165, 164, 0.3);
        }

        .omr-card {
          width: 300px;
          height: 180px;
          top: 25%;
          left: 0;
          transform: rotate(-5deg) translateZ(10px);
          z-index: 3;
          animation: float 8s ease-in-out infinite 1s;
        }

        .collage-card:hover {
          transform: scale(1.05) translateZ(60px) rotate(0deg);
          z-index: 100;
          border-color: var(--primary);
          box-shadow: 0 40px 80px -15px rgba(14, 165, 164, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rot, 0deg)); }
        }

        .ai-card { --rot: 4deg; }
        .osm-card { --rot: -2deg; }
        .omr-card { --rot: -5deg; }

        @media (max-width: 1200px) {
          .hero-collage-container {
            width: 100%;
            max-width: 500px;
            height: 400px;
            margin: 2rem auto;
          }
          .ai-card { width: 260px; height: 160px; }
          .osm-card { width: 280px; height: 175px; }
          .omr-card { width: 240px; height: 145px; }
        }
      `}</style>
    </section >
  );
};

export default Hero;