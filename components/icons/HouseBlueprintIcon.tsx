
import React from 'react';

interface HouseBlueprintIconProps extends React.SVGProps<SVGSVGElement> {
  layers: {
    roof: boolean;
    walls: boolean;
    frame: boolean;
  };
}

export const HouseBlueprintIcon: React.FC<HouseBlueprintIconProps> = ({ layers, ...props }) => {
  const commonStroke = {
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g 
        id="frame" 
        className="transition-opacity duration-500 ease-in-out" 
        style={{ opacity: layers.frame ? 1 : 0.1 }}
      >
        <path d="M100 300 V 150 L 200 100 V 250 L 100 300" stroke="#a47551" {...commonStroke} />
        <path d="M350 300 V 150 L 450 100 V 250 L 350 300" stroke="#a47551" {...commonStroke} />
        <path d="M100 300 H 350" stroke="#a47551" {...commonStroke} />
        <path d="M200 250 L 450 250" stroke="#a47551" {...commonStroke} />
        <path d="M100 150 H 350" stroke="#a47551" {...commonStroke} />
        <path d="M200 100 H 450" stroke="#a47551" {...commonStroke} />
        
        {/* Studs */}
        {[140, 180, 220, 260, 300].map(x => <path key={`stud-f-${x}`} d={`M ${x} 300 V 150`} stroke="#a47551" strokeOpacity="0.7" {...commonStroke} />)}
        {[245, 295, 345, 395].map(x => <path key={`stud-s-${x}`} d={`M ${x} 250 L ${x+50} 225 V 75 L ${x} 100 V 250`} stroke="#a47551" strokeOpacity="0.7" {...commonStroke} pathLength="1" strokeDasharray="1" strokeDashoffset={0}/>)}
        
        {/* Roof Frame */}
        <path d="M100 150 L 150 75 H 400 L 450 100 H 200 L 100 150" stroke="#a47551" {...commonStroke} />
        <path d="M350 150 L 400 75" stroke="#a47551" {...commonStroke} />
        <path d="M150 150 L 200 75" stroke="#a47551" strokeOpacity="0.5" {...commonStroke} />
        <path d="M250 150 L 300 75" stroke="#a47551" strokeOpacity="0.5" {...commonStroke} />
      </g>
      
      <g 
        id="walls" 
        className="transition-opacity duration-500 ease-in-out" 
        style={{ opacity: layers.walls ? 1 : 0 }}
      >
        <path d="M100 150 V 300 H 350 V 150 H 100 Z" fill="#e5e5e5" fillOpacity="0.1" stroke="#c4b5fd" {...commonStroke} />
        <path d="M350 150 V 300 L 450 250 V 100 L 350 150 Z" fill="#e5e5e5" fillOpacity="0.1" stroke="#c4b5fd" {...commonStroke} />
        {/* Window */}
        <path d="M140 200 H 200 V 260 H 140 V 200 Z" fill="#0a0a0a" stroke="#a855f7" {...commonStroke} />
        <path d="M170 200 V 260 M140 230 H 200" stroke="#a855f7" strokeWidth="1" />
        {/* Door */}
        <path d="M260 190 V 300 H 310 V 190 Z" fill="#0a0a0a" stroke="#a855f7" {...commonStroke} />
        <circle cx="300" cy="245" r="3" fill="#a855f7" />
      </g>
      
      <g 
        id="roof" 
        className="transition-opacity duration-500 ease-in-out" 
        style={{ opacity: layers.roof ? 1 : 0 }}
      >
        <path d="M90 155 L 145 70 H 405 L 460 105 L 450 100 L 400 75 H 150 L 100 150 L 90 155 Z" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" {...commonStroke} />
        <path d="M405 70 L 460 105 V 255 L 450 250 V 100 L 400 75" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" {...commonStroke} />
      </g>
    </svg>
  );
};
