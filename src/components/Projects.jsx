import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Play, Star, Calendar, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const getProjectScreenshots = (projectId) => {
    if (projectId === 1) {
      return [
        "/images/skill-exchange-platform/feed page.png",
        "/images/skill-exchange-platform/sessions page.png",
        "/images/skill-exchange-platform/skill management page.png",
        "/images/skill-exchange-platform/credits and payments.png",
        "/images/skill-exchange-platform/admin dashboard.png",
        "/images/skill-exchange-platform/login.png",
        "/images/skill-exchange-platform/register.png",
        "/images/skill-exchange-platform/chatbot.png",
        "/images/skill-exchange-platform/topup credits.png"
      ];
    }
    if (projectId === 2) {
      return [
        "/images/LearnHub/landing-page.png",
        "/images/LearnHub/login.png",
        "/images/LearnHub/register.png",
        "/images/LearnHub/adminDashboard.png",
        "/images/LearnHub/classes-view.png",
        "/images/LearnHub/usermanage.png",
        "/images/LearnHub/profile.png"
      ];
    }
    if (projectId === 3) {
      return [
        "/images/PCMart/Screenshot 2025-10-15 at 20.01.20.png",
        "/images/PCMart/Screenshot 2025-10-15 at 20.01.31.png",
        "/images/PCMart/Screenshot 2025-10-15 at 20.01.46.png",
        "/images/PCMart/Screenshot 2025-10-15 at 20.01.53.png",
        "/images/PCMart/Screenshot 2025-10-15 at 20.02.03.png",
        "/images/PCMart/Screenshot 2025-10-15 at 20.02.13.png"
      ];
    }
    return [projects.find(p => p.id === projectId)?.image || ""];
  };

  const getProjectIcon = (tech) => {
    if (tech.includes('React') || tech.includes('JavaScript')) return <Code className="h-5 w-5" />;
    if (tech.includes('Spring') || tech.includes('Java')) return <Database className="h-5 w-5" />;
    if (tech.includes('Flutter')) return <Smartphone className="h-5 w-5" />;
    return <Code className="h-5 w-5" />;
  };

  const getProjectStats = (projectId) => {
    if (projectId === 1) {
      return [
        { icon: <Users className="h-4 w-4" />, label: "Multi-user Platform", value: "100+" },
        { icon: <Calendar className="h-4 w-4" />, label: "Sessions", value: "500+" },
        { icon: <Zap className="h-4 w-4" />, label: "Real-time Chat", value: "Live" }
      ];
    }
    if (projectId === 2) {
      return [
        { icon: <Users className="h-4 w-4" />, label: "Educational Platform", value: "Schools" },
        { icon: <Calendar className="h-4 w-4" />, label: "Homework Management", value: "Active" },
        { icon: <Star className="h-4 w-4" />, label: "Role-based Access", value: "Multi-tier" }
      ];
    }
    if (projectId === 3) {
      return [
        { icon: <Code className="h-4 w-4" />, label: "E-commerce Platform", value: "PC Hardware" },
        { icon: <Star className="h-4 w-4" />, label: "Product Categories", value: "50+" },
        { icon: <Play className="h-4 w-4" />, label: "Payment Integration", value: "Secure" }
      ];
    }
    return [
      { icon: <Code className="h-4 w-4" />, label: "Technologies", value: "6+" },
      { icon: <Star className="h-4 w-4" />, label: "Features", value: "10+" },
      { icon: <Play className="h-4 w-4" />, label: "Live Demo", value: "✓" }
    ];
  };

  const nextImage = (projectId) => {
    const screenshots = getProjectScreenshots(projectId);
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % screenshots.length
    }));
  };

  const prevImage = (projectId) => {
    const screenshots = getProjectScreenshots(projectId);
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + screenshots.length) % screenshots.length
    }));
  };

  // Auto-slide for projects with multiple images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newState = { ...prev };
        
        // Auto-slide for Skill Exchange Platform (project 1)
        const screenshots1 = getProjectScreenshots(1);
        if (screenshots1.length > 1) {
          const currentIndex1 = prev[1] || 0;
          newState[1] = (currentIndex1 + 1) % screenshots1.length;
        }
        
        // Auto-slide for LearnHub (project 2)
        const screenshots2 = getProjectScreenshots(2);
        if (screenshots2.length > 1) {
          const currentIndex2 = prev[2] || 0;
          newState[2] = (currentIndex2 + 1) % screenshots2.length;
        }
        
        // Auto-slide for PCMart (project 3)
        const screenshots3 = getProjectScreenshots(3);
        if (screenshots3.length > 1) {
          const currentIndex3 = prev[3] || 0;
          newState[3] = (currentIndex3 + 1) % screenshots3.length;
        }
        
        return newState;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Show all projects
  const filteredProjects = projects;

  return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-800 relative">
          {/* Mixed Color Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900"></div>
          
          {/* Additional color accent */}
          <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          {/* Subtle red accent */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Featured <span className="text-red-500">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on that showcase my technical skills and problem-solving abilities.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>


          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => {
              const screenshots = getProjectScreenshots(project.id);
              const currentIndex = currentImageIndex[project.id] || 0;
              const isMultiImage = screenshots.length > 1;
              
              return (
                <div
                  key={project.id}
                  className="bg-gray-900/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-700"
                >
                  {/* Image Slider */}
                  <div className="relative overflow-hidden h-40 sm:h-48">
                    <img
                      src={screenshots[currentIndex]}
                      alt={`${project.name} - Screenshot ${currentIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.log('Image failed to load:', e.target.src);
                        e.target.src = project.image; // Fallback to original image
                      }}
                    />
                    
                    {/* Image Navigation */}
                    {isMultiImage && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            prevImage(project.id);
                          }}
                          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/90 z-10"
                        >
                          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            nextImage(project.id);
                          }}
                          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/90 z-10"
                        >
                          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          {screenshots.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentImageIndex(prev => ({
                                  ...prev,
                                  [project.id]: imgIndex
                                }));
                              }}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                                imgIndex === currentIndex ? 'bg-red-500' : 'bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="text-red-400">
                        <div className="h-4 w-4 sm:h-5 sm:w-5">
                          {getProjectIcon(project.technologies.join(' '))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                      {project.description}
                    </p>
                    
                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {getProjectStats(project.id).map((stat, statIndex) => (
                        <div key={statIndex} className="text-center p-1.5 sm:p-2 bg-gray-800/50 rounded-lg">
                          <div className="text-red-400 mb-1 flex justify-center">
                            <div className="h-3 w-3 sm:h-4 sm:w-4">
                              {stat.icon}
                            </div>
                          </div>
                          <div className="text-white font-bold text-xs sm:text-sm">{stat.value}</div>
                          <div className="text-gray-400 text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Button */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200 text-center flex items-center justify-center gap-2 text-xs sm:text-sm"
                    >
                      <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Want to see more of my work?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;