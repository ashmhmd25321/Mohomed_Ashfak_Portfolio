import React, { useState } from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  const getSkillColor = (skill) => {
    const colorMap = {
      'React': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'Java': 'bg-red-100 text-red-800',
      'Python': 'bg-green-100 text-green-800',
      'Spring Boot': 'bg-green-100 text-green-800',
      'Node.js': 'bg-green-100 text-green-800',
      'MySQL': 'bg-orange-100 text-orange-800',
      'MongoDB': 'bg-green-100 text-green-800',
      'Docker': 'bg-blue-100 text-blue-800',
      'Flutter': 'bg-blue-100 text-blue-800',
      default: 'bg-gray-100 text-gray-800'
    };
    return colorMap[skill] || colorMap.default;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Technical <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive overview of technologies and tools I work with to build modern, scalable applications.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((skillCategory) => (
              <button
                key={skillCategory.category}
                onClick={() => setActiveCategory(skillCategory.category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === skillCategory.category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {skillCategory.category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8">
            {skills
              .filter(category => category.category === activeCategory)
              .map((category) => (
                <div key={category.category} className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    {category.category} Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className={`${getSkillColor(tech)} px-4 py-3 rounded-lg font-medium text-center transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-md`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>

          {/* All Skills Overview */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              All Technologies at a Glance
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.flatMap(category => category.technologies).map((tech, index) => (
                <span
                  key={index}
                  className={`${getSkillColor(tech)} px-3 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-300`}
                >
                  {tech}
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