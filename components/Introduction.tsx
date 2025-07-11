import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { CpuIcon } from './icons/CpuIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const features = [
  {
    icon: <TargetIcon className="w-6 h-6" />,
    title: 'Client-Centric Approach',
    description: 'Our design process is built around your vision. We collaborate closely with you at every stage to ensure the final result is a true reflection of your goals and aspirations.'
  },
  {
    icon: <CpuIcon className="w-6 h-6" />,
    title: 'Innovative Technology',
    description: 'We leverage cutting-edge 3D modeling and visualization tools to bring your project to life before breaking ground, allowing for precise planning and immersive previews.'
  },
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: 'Future-Proof Design',
    description: 'We are committed to creating timeless and sustainable designs, incorporating durable materials and energy-efficient solutions that add value for years to come.'
  }
];

const Introduction: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Designing The Future, <br />
              <span className="text-purple-400">Building With Precision.</span>
            </h2>
            <p className="mb-8 leading-relaxed text-gray-400">
              At K2V Designs, we believe that great architecture is more than just structures; it's about creating environments that inspire, function flawlessly, and endure. Our philosophy merges bold artistic vision with meticulous engineering to transform your ideas into tangible, breathtaking realities.
            </p>
            <a
              href="#services"
              className="font-semibold text-white hover:text-purple-400 transition-colors duration-300 group inline-flex items-center"
            >
              Explore our services
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
            </a>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-5 p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-purple-600/70 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-900/10">
                <div className="p-3 bg-gray-700 rounded-full text-purple-400 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;