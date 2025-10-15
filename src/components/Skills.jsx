import React, { useState } from 'react';
import { skills } from '../data/mock';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server,
  Cloud,
  GitBranch,
  Layers,
  Zap,
  Cpu,
  FileText,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  const getSkillIcon = (skill) => {
    const iconMap = {
      'React': <Code2 className="h-5 w-5" />,
      'JavaScript': <FileText className="h-5 w-5" />,
      'TypeScript': <Code2 className="h-5 w-5" />,
      'Java': <Cpu className="h-5 w-5" />,
      'Python': <Terminal className="h-5 w-5" />,
      'Spring Boot': <Server className="h-5 w-5" />,
      'Node.js': <Zap className="h-5 w-5" />,
      'MySQL': <Database className="h-5 w-5" />,
      'MongoDB': <Database className="h-5 w-5" />,
      'Docker': <Layers className="h-5 w-5" />,
      'Flutter': <Smartphone className="h-5 w-5" />,
      'HTML': <Globe className="h-5 w-5" />,
      'CSS': <Globe className="h-5 w-5" />,
      'Git': <GitBranch className="h-5 w-5" />,
      'AWS': <Cloud className="h-5 w-5" />,
      default: <Code2 className="h-5 w-5" />
    };
    return iconMap[skill] || iconMap.default;
  };

  const getSkillColor = (skill) => {
    const colorMap = {
      'React': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'JavaScript': 'bg-white/10 text-white border border-white/20',
      'TypeScript': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Java': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Python': 'bg-white/10 text-white border border-white/20',
      'Spring Boot': 'bg-white/10 text-white border border-white/20',
      'Node.js': 'bg-white/10 text-white border border-white/20',
      'MySQL': 'bg-white/10 text-white border border-white/20',
      'MongoDB': 'bg-white/10 text-white border border-white/20',
      'Docker': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Flutter': 'bg-red-500/20 text-red-400 border border-red-500/30',
      default: 'bg-white/10 text-white border border-white/20'
    };
    return colorMap[skill] || colorMap.default;
  };

  return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-800 relative">
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
                  Technical <span className="text-red-500">Skills</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  A comprehensive overview of technologies and tools I work with to build modern, scalable applications.
                </p>
                <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                {skills.map((skillCategory) => (
                  <button
                    key={skillCategory.category}
                    onClick={() => setActiveCategory(skillCategory.category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                      activeCategory === skillCategory.category
                        ? 'bg-red-500 text-white shadow-lg transform scale-105 border border-red-400'
                        : 'bg-white/10 text-gray-300 hover:bg-red-500/20 hover:text-red-400 shadow-md border border-white/20'
                    }`}
                  >
                    {skillCategory.category}
                  </button>
                ))}
          </div>

              {/* Skills Grid */}
              <div className="grid gap-6 sm:gap-8">
                {skills
                  .filter(category => category.category === activeCategory)
                  .map((category) => (
                    <div key={category.category} className="bg-gray-900/50 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-700">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
                        {category.category} Technologies
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                        {category.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className={`${getSkillColor(tech)} px-2 sm:px-4 py-2 sm:py-3 rounded-lg font-medium text-center transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-md flex items-center justify-center gap-1 sm:gap-2`}
                          >
                            <div className="h-3 w-3 sm:h-4 sm:w-4">
                              {getSkillIcon(tech)}
                            </div>
                            <span className="text-xs sm:text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                }
              </div>

              {/* All Skills Overview */}
              <div className="mt-12 sm:mt-16 bg-gray-900/50 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
                  All Technologies at a Glance
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {skills.flatMap(category => category.technologies).map((tech, index) => (
                    <span
                      key={index}
                      className={`${getSkillColor(tech)} px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transform hover:scale-105 transition-all duration-300 flex items-center gap-1 sm:gap-2`}
                    >
                      <div className="h-3 w-3 sm:h-4 sm:w-4">
                        {getSkillIcon(tech)}
                      </div>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;