
import React from 'react';

export const RulerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="22 7 17 2 12 7 17 12 22 7"></polygon>
    <polygon points="12 22 7 17 2 22 7 27 12 22"></polygon>
    <line x1="17" y1="12" x2="7" y2="2"></line>
    <line x1="2.1" y1="21.9" x2="7" y2="17"></line>
  </svg>
);
