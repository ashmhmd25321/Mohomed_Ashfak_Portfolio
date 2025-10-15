import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Code, Database, Globe, Smartphone, Brain, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center relative">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Subtle accent */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-8">
              
              {/* Location */}
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-red-500" />
                {personalInfo.location}
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-2">Hi, I'm</span>
                  <span className="gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    {personalInfo.name.split(' ')[1]}
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                  {personalInfo.title}
                </h2>
              </div>
              
              {/* Description */}
              <div className="max-w-2xl">
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { icon: Globe, label: 'Web Development' },
                  { icon: Smartphone, label: 'Mobile Apps' },
                  { icon: Brain, label: 'AI/ML' },
                  { icon: Database, label: 'Backend' }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 px-3 py-2 rounded-lg hover:border-red-500/50 transition-colors duration-300">
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                      <span className="text-white text-xs sm:text-sm font-medium">{tech.label}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-gray-300 hover:text-red-400 transition-colors duration-300" />
                </a>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-gray-300 hover:text-red-400 transition-colors duration-300" />
                </a>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  <Mail className="h-4 w-4" />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-first lg:order-last mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Simple accent elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-red-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simple Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-red-500 transition-colors duration-300"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;