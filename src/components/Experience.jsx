import React from 'react';
import { Calendar, MapPin, ChevronRight, Briefcase, Award, TrendingUp } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gray-800 relative">
          {/* Mixed Color Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900"></div>
          
          {/* Additional color accent */}
          <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          {/* Subtle red accent */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Professional <span className="text-red-500">Experience</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  My journey in software development, building solutions and growing technical expertise.
                </p>
                <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-500/30 transform md:-translate-x-1/2"></div>
            
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative mb-8 sm:mb-12 last:mb-0">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full transform -translate-x-1.5 sm:-translate-x-2 md:-translate-x-2 border-2 sm:border-4 border-gray-800 shadow-lg"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 sm:ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                      <div className="bg-gray-900/50 rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/30">
                        {/* Header */}
                        <div className="mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 text-red-400 text-xs sm:text-sm font-medium mb-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            {exp.duration}
                          </div>
                          
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {exp.position}
                          </h3>
                          
                          <h4 className="text-base sm:text-lg font-semibold text-red-400 mb-2">
                            {exp.company}
                          </h4>
                          
                          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            {exp.location}
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        <div>
                          <h5 className="font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1 sm:space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 mt-0.5 flex-shrink-0" />
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

              {/* Professional Highlights */}
              <div className="mt-12 sm:mt-16 bg-gray-900/50 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  Professional Highlights
                </h3>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/5">
                    <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2 flex items-center justify-center gap-2">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                      15+
                    </div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base">Applications Built</div>
                  </div>
                  
                  <div className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/5">
                    <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2 flex items-center justify-center gap-2">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                      8+
                    </div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base">Tech Stacks</div>
                  </div>
                  
                  <div className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/5 sm:col-span-2 md:col-span-1">
                    <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2 flex items-center justify-center gap-2">
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                      100%
                    </div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base">Project Success Rate</div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;