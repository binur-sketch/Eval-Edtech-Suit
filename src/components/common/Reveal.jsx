import React from 'react';

const Reveal = ({ children, width = "100%", delay, direction }) => {
  return (
    <div style={{ width, position: 'relative' }}>
      {children}
    </div>
  );
};

export default Reveal;
