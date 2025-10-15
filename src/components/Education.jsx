import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Academic <span className="text-blue-600">Qualifications</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My educational foundation in software engineering and technology that supports my professional expertise.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Education Grid */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`group bg-gradient-to-r ${
                  index === 0 ? 'from-blue-50 to-purple-50' : 
                  index === 1 ? 'from-green-50 to-blue-50' :
                  index === 2 ? 'from-orange-50 to-yellow-50' :
                  'from-purple-50 to-pink-50'
                } rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${
                          index === 0 ? 'bg-blue-100 text-blue-600' :
                          index === 1 ? 'bg-green-100 text-green-600' :
                          index === 2 ? 'bg-orange-100 text-orange-600' :
                          'bg-purple-100 text-purple-600'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                            {edu.degree}
                          </h3>
                          
                          <h4 className="text-lg font-semibold text-blue-600 mb-3">
                            {edu.institution}
                          </h4>
                          
                          <p className="text-slate-600 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Duration & Grade */}
                    <div className="flex flex-col items-end space-y-3">
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-slate-700">{edu.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-slate-700">{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="mt-6">
                    <div className="h-1 bg-white/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          index === 0 ? 'bg-gradient-to-r from-blue-400 to-purple-400' :
                          index === 1 ? 'bg-gradient-to-r from-green-400 to-blue-400' :
                          index === 2 ? 'bg-gradient-to-r from-orange-400 to-yellow-400' :
                          'bg-gradient-to-r from-purple-400 to-pink-400'
                        } transform transition-transform duration-1000 group-hover:scale-x-100 scale-x-75 origin-left`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Summary */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Educational Highlights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-blue-600 mb-2">BSc</div>
                <div className="text-slate-600 font-medium">Software Engineering Degree</div>
              </div>
              
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
                <div className="text-slate-600 font-medium">Academic Qualifications</div>
              </div>
              
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
                <div className="text-slate-600 font-medium">Years of Study</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;