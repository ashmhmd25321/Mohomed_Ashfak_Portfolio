import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand & Bio */}
            <div className="space-y-4">
              <div className="font-bold text-2xl">
                <span className="text-blue-400">M</span>ohomed <span className="text-blue-400">A</span>shfak
              </div>
              <p className="text-slate-300 leading-relaxed">
                Full-stack developer passionate about creating innovative solutions 
                with modern technologies. Always learning, always building.
              </p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <nav className="space-y-2">
                {[
                  { href: '#about', label: 'About Me' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#education', label: 'Education' },
                  { href: '#blog', label: 'Blog' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technologies I Use</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Java', 'Spring Boot', 'Node.js', 'Python', 'MySQL', 'Docker', 'Flutter'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-slate-300">
                <span>© {currentYear} Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span>by {personalInfo.name}</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-200"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-4 text-center text-slate-400 text-sm">
              <p>
                Built with React, Tailwind CSS, and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;