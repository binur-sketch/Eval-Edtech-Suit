import React from 'react';
import { motion } from 'framer-motion';

export const ScanIcon = ({ size = 32, color = 'currentColor' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corner Markers */}
      <path 
        d="M7 2H5C3.34315 2 2 3.34315 2 5V7" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M17 2H19C20.6569 2 22 3.34315 22 5V7" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M2 17V19C2 20.6569 3.34315 22 5 22H7" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M22 17V19C22 20.6569 20.6569 22 19 22H17" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Animated Scan Line */}
      <motion.line 
        x1="4" 
        y1="12" 
        x2="20" 
        y2="12" 
        stroke="#10B981" 
        strokeWidth="2" 
        strokeLinecap="round"
        animate={{ y1: [5, 19, 5], y2: [5, 19, 5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Subtle Glow behind the line */}
      <motion.rect
        x="4"
        y="11.5"
        width="16"
        height="1"
        fill="#10B981"
        initial={{ opacity: 0 }}
        animate={{ y: [4.5, 18.5, 4.5], opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ filter: 'blur(2px)' }}
      />
    </svg>
  );
};
