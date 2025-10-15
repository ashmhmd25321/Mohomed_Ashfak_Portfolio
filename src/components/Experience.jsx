import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Professional <span className="text-blue-600">Experience</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My journey in software development, building solutions and growing technical expertise.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
            
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {exp.position}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Professional Highlights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-slate-600 font-medium">Applications Built</div>
              </div>
              
              <div className="text-center p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-slate-600 font-medium">Tech Stacks</div>
              </div>
              
              <div className="text-center p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-slate-600 font-medium">Project Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;