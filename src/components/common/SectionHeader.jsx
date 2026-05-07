import React from 'react';

const SectionHeader = ({ badge, title, text, centered = true, className = "" }) => {
  return (
    <div 
      className={`section-header ${className} reveal`}
      style={{ 
        textAlign: centered ? 'center' : 'left', 
        maxWidth: centered ? '800px' : 'none', 
        margin: centered ? '0 auto 5rem' : '0 0 5rem' 
      }}
    >
      {badge && <span className="badge">{badge}</span>}
      <h2 style={{ marginBottom: text ? '1.5rem' : '0' }}>
        {title}
      </h2>
      {text && (
        <p style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
          color: 'var(--muted-foreground)',
          fontWeight: 600,
          lineHeight: 1.6,
          opacity: 0.9
        }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

