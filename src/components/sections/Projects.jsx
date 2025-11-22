import { motion } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import { useState } from 'react';
import projectsData from '../../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects =   projectsData;
    

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'Frontend', label: 'Frontend' },
    { key: 'Backend', label: 'Backend' },
    { key: 'Fullstack', label: 'Fullstack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="section-wrapper">
      {(isInView) => (
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-neon-pink mx-auto mb-8" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-cyber text-sm uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-cyber-cyan text-dark-space shadow-lg shadow-cyber-cyan/50'
                  : 'glass text-gray-400 hover:text-white hover:glass-cyber'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-cyber group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-space/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.liveUrl} className="p-2 glass rounded-full hover:glass-cyber transition-all">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg" alt="Live Demo" className="w-4 h-4" />
                  </a>
                  <a href={project.githubUrl} className="p-2 glass rounded-full hover:glass-cyber transition-all">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-cyber font-bold text-gradient-cyber mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyber-cyan/10 text-cyber-cyan rounded-full text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      )}
    </SectionWrapper>
  );
}