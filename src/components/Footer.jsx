import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code2, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            
            {/* Brand & Bio */}
            <div className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1">
              <div className="font-bold text-2xl sm:text-3xl">
                <span className="text-red-500">M</span>ohomed <span className="text-red-500">A</span>shfak
              </div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Full-stack developer passionate about creating innovative solutions 
                with modern technologies. Always learning, always building.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                  <span className="text-xs sm:text-sm break-all">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                  <span className="text-xs sm:text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                  <span className="text-xs sm:text-sm">{personalInfo.location}</span>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 border border-gray-700 hover:border-red-500 group"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 border border-gray-700 hover:border-red-500 group"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                Quick Links
              </h3>
              <nav className="space-y-2 sm:space-y-3">
                {[
                  { href: '#about', label: 'About Me' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#education', label: 'Education' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base hover:translate-x-2 transform"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Technologies */}
            <div className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Technologies I Use</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React', 'Java', 'Spring Boot', 'Node.js', 'Python', 'MySQL', 'Docker', 'Flutter'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-gray-300 rounded-lg text-xs sm:text-sm hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-700 hover:border-red-500 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8 sm:pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                <span>© {currentYear} Made </span>
                <span>by <span className="text-red-500 font-semibold">{personalInfo.name}</span></span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-red-400 transition-all duration-300 bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-700 hover:border-red-500 hover:bg-red-500/10 group"
              >
                <span className="font-medium text-sm sm:text-base">Back to Top</span>
                <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;