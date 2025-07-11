import React from 'react';
import { BlueprintIcon } from './icons/BlueprintIcon';
import { CubeIcon } from './icons/CubeIcon';
import { RulerIcon } from './icons/RulerIcon';

const servicesData = [
  {
    icon: <BlueprintIcon className="w-10 h-10 text-purple-400" />,
    title: 'Architectural Design',
    description: 'From initial concept sketches to detailed construction documents, we provide comprehensive architectural services for residential and commercial projects.',
  },
  {
    icon: <CubeIcon className="w-10 h-10 text-purple-400" />,
    title: '3D Visualization',
    description: 'Experience your project before it\'s built with our stunningly realistic 3D renderings and virtual reality walkthroughs, ensuring every detail is perfect.',
  },
  {
    icon: <RulerIcon className="w-10 h-10 text-purple-400" />,
    title: 'Interior & Space Planning',
    description: 'We design interior spaces that are not only beautiful but also functional, optimizing layout, flow, materials, and lighting to enhance daily life.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Expertise</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We blend artistry with precision to create spaces that are not only beautiful but also deeply functional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 ease-in-out"
            >
              <div className="mb-6 p-4 bg-purple-900/30 inline-block rounded-full">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;