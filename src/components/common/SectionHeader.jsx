import React from 'react';

const SectionHeader = ({ badge, title, text, centered = true }) => {
  return (
    <div style={{ 
      textAlign: centered ? 'center' : 'left', 
      maxWidth: '800px', 
      margin: centered ? '0 auto 5rem' : '0 0 5rem' 
    }} className="reveal">
      {badge && <span className="badge">{badge}</span>}
      <h2>
        {typeof title === 'string' ? (
          title.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              {i === 2 ? <span className="gradient-text">{word} </span> : word + ' '}
            </React.Fragment>
          ))
        ) : title}
      </h2>
      {text && <p>{text}</p>}
    </div>
  );
};

export default SectionHeader;
