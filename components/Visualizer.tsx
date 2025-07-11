import React, { useState } from 'react';
import { HouseBlueprintIcon } from './icons/HouseBlueprintIcon';

interface LayerButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const LayerButton: React.FC<LayerButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
        active
          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
          : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
      }`}
    >
      {label}
    </button>
  );
};

const Visualizer: React.FC = () => {
  const [layers, setLayers] = useState({
    roof: true,
    walls: true,
    frame: true,
  });

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <section id="visualizer" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Interactive House Blueprint</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Explore the anatomy of a modern home. Use the controls to toggle structural layers and see how design comes together from the inside out.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 bg-grid-pattern p-4 sm:p-8 border border-neutral-200 rounded-xl shadow-lg">
             <div className="relative w-full aspect-[4/3] bg-white/30 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <HouseBlueprintIcon layers={layers} className="w-full h-full" />
             </div>
          </div>
          <div className="flex flex-col gap-4">
             <h3 className="text-2xl font-semibold text-gray-900 mb-2">View Layers</h3>
             <p className="text-neutral-600 mb-4 text-sm">Click to show or hide parts of the structure.</p>
             <LayerButton
                label={layers.roof ? 'Hide Roof' : 'Show Roof'}
                active={layers.roof}
                onClick={() => toggleLayer('roof')}
              />
              <LayerButton
                label={layers.walls ? 'Hide Walls' : 'Show Walls'}
                active={layers.walls}
                onClick={() => toggleLayer('walls')}
              />
              <LayerButton
                label={layers.frame ? 'Hide Frame' : 'Show Frame'}
                active={layers.frame}
                onClick={() => toggleLayer('frame')}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualizer;