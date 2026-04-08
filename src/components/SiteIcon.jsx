import React from 'react';

const SiteIcon = ({ name, size = 24, style = {} }) => {
  return (
    <div style={{ 
      width: size, 
      height: size, 
      background: 'currentColor', 
      borderRadius: '4px', 
      opacity: 0.5,
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style 
    }} title={name} />
  );
};

export default SiteIcon;
