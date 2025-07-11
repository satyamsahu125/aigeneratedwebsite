import React from 'react';

export const ExplodedHouseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="#374151" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      {/* Roof Layer */}
      <g transform="translate(0, -50)">
        <path d="M380 150 L180 200 L400 300 L600 250 L380 150 Z" />
        <path d="M600 250 L600 300 L400 350 L400 300 Z" />
        <path d="M180 200 L180 220" />
        <path d="M400 300 L400 320" />
        <path d="M600 250 L600 270" />
      </g>
      
      {/* Upper Floor Beams */}
      <g transform="translate(0, -20)">
        <rect x="200" y="250" width="400" height="100" />
        <path d="M200 250 L150 270 L350 370 L400 350 Z" />
        <path d="M600 250 L650 270 L450 370 L400 350 Z" />
        <line x1="200" y1="283" x2="600" y2="283" strokeWidth="0.5" />
        <line x1="200" y1="317" x2="600" y2="317" strokeWidth="0.5" />
        <line x1="250" y1="250" x2="250" y2="350" strokeWidth="0.5" />
        <line x1="300" y1="250" x2="300" y2="350" strokeWidth="0.5" />
        <line x1="350" y1="250" x2="350" y2="350" strokeWidth="0.5" />
        <line x1="400" y1="250" x2="400" y2="350" strokeWidth="0.5" />
        <line x1="450" y1="250" x2="450" y2="350" strokeWidth="0.5" />
        <line x1="500" y1="250" x2="500" y2="350" strokeWidth="0.5" />
        <line x1="550" y1="250" x2="550" y2="350" strokeWidth="0.5" />
      </g>

      {/* Main Structure */}
      <g>
        {/* Wall panels */}
        <path d="M100 480 L180 460 L180 350 L100 370 Z" />
        <path d="M180 460 L380 510 L380 400 L180 350 Z" fill="#1f2937" />
        <path d="M380 510 L430 500 L430 390 L380 400 Z" />
        <path d="M680 440 L620 455 L620 345 L680 330 Z" />

        {/* Floor */}
        <path d="M180 460 L380 510 L620 455 L420 400 Z" />

        {/* Inner walls */}
        <path d="M190 457 L190 352" />
        <path d="M190 400 L390 450" />
        <path d="M280 482 L280 372" />
        <path d="M390 450 L590 395" />

        {/* Window/Door details */}
        <rect x="220" y="380" width="100" height="60" fill="#f8f9fa" />
        <line x1="270" y1="380" x2="270" y2="440" />
        <line x1="220" y1="410" x2="320" y2="410" />

        <path d="M450 380 L450 485 L500 475 L500 370 Z" fill="#f8f9fa" />
      </g>

      {/* Ground Floor Elements */}
      <g>
        <path d="M200 580 L400 630 L640 575 L440 520 Z" fill="#fff" />
        <path d="M200 580 L200 500 L400 550 L400 630 Z" />
        <path d="M440 520 L640 465 L640 575 Z" />
      </g>
    </g>
  </svg>
);
