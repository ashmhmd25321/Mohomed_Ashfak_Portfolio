import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const getProjectIcon = (tech) => {
    if (tech.includes('React') || tech.includes('JavaScript')) return <Code className="h-5 w-5" />;
    if (tech.includes('Spring') || tech.includes('Java')) return <Database className="h-5 w-5" />;
    if (tech.includes('Flutter')) return <Smartphone className="h-5 w-5" />;
    return <Code className="h-5 w-5" />;
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.technologies.some(tech => tech.toLowerCase().includes(filter)));

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      {/* Mixed Color Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900"></div>
      
      {/* Additional color accent */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Subtle red accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-red-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on that showcase my technical skills and problem-solving abilities.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'featured', 'react', 'spring', 'java'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  filter === filterType
                    ? 'bg-red-500 text-white shadow-lg transform scale-105 border border-red-400'
                    : 'bg-white/10 text-gray-300 hover:bg-red-500/20 hover:text-red-400 shadow-md border border-white/20'
                }`}
              >
                {filterType === 'all' ? 'All Projects' : filterType}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-700"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  
                  {/* Project Links - Show on Hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-700 hover:text-red-500 shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-700 hover:text-red-500 shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="text-red-400">
                      {getProjectIcon(project.technologies.join(' '))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium border border-white/20">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200 text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-600 text-gray-300 px-4 py-2 rounded-lg font-medium hover:border-red-500 hover:text-red-400 transition-colors duration-200 text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/ashmhmd25321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="h-5 w-5" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;