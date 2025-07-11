import React from 'react';

export const CircularText: React.FC = () => (
  <svg viewBox="0 0 100 100" width="120" height="120" className="animate-spin" style={{ animationDuration: '20s', animationTimingFunction: 'linear' }}>
    <defs>
      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
    </defs>
    <text fill="#9ca3af" fontSize="9" letterSpacing="0.5">
      <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
        love for a lifetime • love for a lifetime •
      </textPath>
    </text>
  </svg>
);