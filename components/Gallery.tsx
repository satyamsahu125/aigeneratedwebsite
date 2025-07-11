import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Modern Villa Transformation',
    category: ProjectCategory.RESIDENTIAL,
    imageBefore: 'https://picsum.photos/seed/villa-before/800/600',
    imageAfter: 'https://picsum.photos/seed/villa-after/800/600',
    description: 'Complete overhaul of a suburban villa, focusing on open spaces and natural light.',
    interactive: 'slider',
  },
  {
    id: 2,
    title: 'Corporate HQ Lobby',
    category: ProjectCategory.COMMERCIAL,
    imageBefore: 'https://picsum.photos/seed/corp-before/800/600',
    imageAfter: 'https://picsum.photos/seed/corp-after/800/600',
    description: 'A striking new lobby design for a tech company, reflecting innovation.',
  },
  {
    id: 3,
    title: 'Kitchen Lighting Overhaul',
    category: ProjectCategory.RESIDENTIAL,
    imageBefore: 'https://picsum.photos/seed/kitchen-dark/800/600',
    imageAfter: 'https://picsum.photos/seed/kitchen-light/800/600',
    description: 'Strategic lighting placement to transform a kitchen\'s ambiance and functionality.',
    interactive: 'toggle',
  },
  {
    id: 4,
    title: 'Retail Space Redesign',
    category: ProjectCategory.COMMERCIAL,
    imageBefore: 'https://picsum.photos/seed/retail-before/800/600',
    imageAfter: 'https://picsum.photos/seed/retail-after/800/600',
    description: 'A boutique store redesign that enhances customer flow and product visibility.',
  },
  {
    id: 5,
    title: 'Urban Landscape Plotting',
    category: ProjectCategory.MAPPING,
    imageBefore: 'https://picsum.photos/seed/map-before/800/600',
    imageAfter: 'https://picsum.photos/seed/map-after/800/600',
    description: 'High-precision 3D mapping for a new urban development project.',
  },
  {
    id: 6,
    title: 'Penthouse Apartment',
    category: ProjectCategory.RESIDENTIAL,
    imageBefore: 'https://picsum.photos/seed/penta-before/800/600',
    imageAfter: 'https://picsum.photos/seed/penta-after/800/600',
    description: 'Luxurious interior design for a top-floor penthouse with panoramic city views.',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-neutral-200 transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={showAfter ? project.imageAfter : project.imageBefore}
          alt={project.title}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
        
        {project.interactive === 'toggle' && (
          <div className="absolute top-3 right-3 flex items-center bg-black/50 backdrop-blur-sm rounded-full p-1 text-xs text-white">
            <button onClick={() => setShowAfter(false)} className={`px-3 py-1 rounded-full transition-colors ${!showAfter ? 'bg-purple-600' : 'hover:bg-white/10'}`}>Before</button>
            <button onClick={() => setShowAfter(true)} className={`px-3 py-1 rounded-full transition-colors ${showAfter ? 'bg-purple-600' : 'hover:bg-white/10'}`}>After</button>
          </div>
        )}

        {project.interactive === 'slider' && (
           <div className="absolute top-3 right-3 flex items-center bg-black/50 backdrop-blur-sm rounded-full p-1 text-xs text-white">
            <button onClick={() => setShowAfter(false)} className={`px-3 py-1 rounded-full transition-colors ${!showAfter ? 'bg-purple-600' : 'hover:bg-white/10'}`}>Before</button>
            <button onClick={() => setShowAfter(true)} className={`px-3 py-1 rounded-full transition-colors ${showAfter ? 'bg-purple-600' : 'hover:bg-white/10'}`}>After</button>
          </div>
        )}
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">{project.category}</span>
        <h3 className="text-xl font-bold mt-2 text-gray-900">{project.title}</h3>
        <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const filters: (ProjectCategory | 'All')[] = ['All', ...Object.values(ProjectCategory)];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Our Best Projects</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">From concept to construction—see how we redefine spaces.</p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;