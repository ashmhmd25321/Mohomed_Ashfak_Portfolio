import React from 'react';
import { Code2, Database, Globe, Smartphone, Brain, Target, Users, Zap } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Problem-Solving Focus",
      description: "Driven by the challenge of solving complex problems and transforming ideas into user-friendly solutions."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning Solutions",
      description: "Developing intelligent ML solutions that combine innovation with practical usability and real-world impact."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Building complete web applications with modern technologies, ensuring seamless user experiences."
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable, and well-documented code following industry best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Subtle accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-red-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-xl leading-relaxed font-medium text-white">
                  I'm a passionate developer driven by solving complex problems and transforming ideas into user-friendly, efficient digital solutions that make a real impact for users and businesses.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-300">
                  I focus on hands-on experimentation and continuous learning, ensuring code quality through clean architecture, proper testing, and industry best practices. My proudest achievements include developing intelligent machine learning solutions, full-stack web applications, and mobile apps that combine innovation with practical usability.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
                  <div className="text-gray-300 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">8+</div>
                  <div className="text-gray-300 font-medium">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">3+</div>
                  <div className="text-gray-300 font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-red-500/10 transition-colors duration-300 group border border-gray-800">
                  <div className="flex-shrink-0 p-3 bg-gray-800 rounded-lg shadow-md group-hover:bg-red-500 group-hover:text-white transition-all duration-300 text-red-500">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;