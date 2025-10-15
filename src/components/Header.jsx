import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, User, Wrench, Briefcase, GraduationCap, BookOpen, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home, id: 'home' },
    { href: '#about', label: 'About', icon: User, id: 'about' },
    { href: '#skills', label: 'Skills', icon: Wrench, id: 'skills' },
    { href: '#projects', label: 'Projects', icon: Briefcase, id: 'projects' },
    { href: '#experience', label: 'Experience', icon: Code, id: 'experience' },
    { href: '#education', label: 'Education', icon: GraduationCap, id: 'education' },
    { href: '#contact', label: 'Contact', icon: Mail, id: 'contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-xl text-white">
            <span className="gradient-text text-2xl">M</span>ohomed{' '}
            <span className="gradient-text text-2xl">A</span>shfak
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 font-medium rounded-lg ${
                    isActive
                      ? 'text-red-400 bg-red-500/10 border border-red-500/30'
                      : 'text-gray-300 hover:text-red-400 hover:bg-gray-800/50'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-red-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800">
            <div className="py-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? 'text-red-400 bg-red-500/10 border-l-4 border-red-500'
                        : 'text-gray-300 hover:text-red-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="font-medium">{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;