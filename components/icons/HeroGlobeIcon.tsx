import React from 'react';

export const HeroGlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity="0.3">
            <circle cx="400" cy="400" r="300" stroke="white" strokeWidth="1" />
            <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
            <ellipse cx="400" cy="400" rx="300" ry="100" stroke="white" strokeWidth="0.5" />
            <ellipse cx="400" cy="400" rx="300" ry="200" transform="rotate(45 400 400)" stroke="white" strokeWidth="0.5" />
            <ellipse cx="400" cy="400" rx="300" ry="200" transform="rotate(-45 400 400)" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="400" x2="700" y2="400" stroke="white" strokeWidth="0.5" />
            <line x1="400" y1="100" x2="400" y2="700" stroke="white" strokeWidth="0.5" />
        </g>
    </svg>
);