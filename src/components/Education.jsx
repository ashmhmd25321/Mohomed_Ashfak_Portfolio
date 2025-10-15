import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Star, Trophy } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
        <section id="education" className="py-12 sm:py-16 md:py-20 bg-gray-800 relative">
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
                  Academic <span className="text-red-500">Qualifications</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  My educational foundation in software engineering and technology that supports my professional expertise.
                </p>
                <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
              </div>

              {/* Education Grid */}
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="group bg-gray-900/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-700 hover:border-red-500/30"
                  >
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6">
                    
                        {/* Left Content */}
                        <div className="flex-1">
                          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="p-2 sm:p-3 rounded-lg bg-red-500/20 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-1 sm:mb-2">
                                {edu.degree}
                              </h3>
                              
                              <h4 className="text-base sm:text-lg font-semibold text-red-400 mb-2 sm:mb-3">
                                {edu.institution}
                              </h4>
                              
                              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {edu.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Right Content - Duration & Grade */}
                        <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-0 md:space-y-3">
                          <div className="flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-gray-600">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                            <span className="font-medium text-gray-300 text-xs sm:text-sm">{edu.duration}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-gray-600">
                            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                            <span className="font-medium text-gray-300 text-xs sm:text-sm">{edu.grade}</span>
                          </div>
                        </div>
                  </div>

                      {/* Animated Progress Bar */}
                      <div className="mt-4 sm:mt-6">
                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-red-500 to-red-400 transform transition-transform duration-1000 group-hover:scale-x-100 scale-x-75 origin-left"
                          />
                        </div>
                      </div>
                </div>
              </div>
            ))}
          </div>

              {/* Educational Highlights */}
              <div className="mt-12 sm:mt-16 bg-gray-900/50 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  Educational Highlights
                </h3>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/5">
                    <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2 flex items-center justify-center gap-2">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                      BSc
                    </div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base">Software Engineering Degree</div>
                  </div>
                  
                  <div className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/5">
                    <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2 flex items-center justify-center gap-2">
                      <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                      4+
                    </div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base">Academic Qualifications</div>
                  </div>
                  
                  <div className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/5 sm:col-span-2 md:col-span-1">
                    <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2 flex items-center justify-center gap-2">
                      <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
                      8+
                    </div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base">Years of Study</div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Education;