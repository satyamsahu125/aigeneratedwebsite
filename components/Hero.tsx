import React from 'react';
import { CircularText } from './icons/CircularText';
import { HeroGlobeIcon } from './icons/HeroGlobeIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center animated-gradient-bg overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
            Visionary Design,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Structural Integrity.
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            K2V Designs transforms ambitious ideas into architectural marvels. We build the future, one precise blueprint at a time.
          </p>
          <a
            href="#solutions"
            className="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 group"
          >
            Discover Our Philosophy <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <HeroGlobeIcon className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/4 right-1/4 md:top-1/3 md:right-1/4 transform translate-x-1/2 -translate-y-1/2 z-10">
          <CircularText />
        </div>
      </div>
    </section>
  );
};

export default Hero;