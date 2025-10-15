import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, Zap } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-800 relative overflow-hidden">
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
              Let's <span className="text-red-500">Connect</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? I'm always excited to collaborate and bring innovative ideas to life with cutting-edge technology.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-700 hover:border-red-500/30">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-red-500/20 text-red-400 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors duration-300 text-sm sm:text-base">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200 font-medium text-xs sm:text-sm break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-700 hover:border-red-500/30">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-red-500/20 text-red-400 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors duration-300 text-sm sm:text-base">WhatsApp</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200 font-medium text-xs sm:text-sm"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-700 hover:border-red-500/30">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-red-500/20 text-red-400 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors duration-300 text-sm sm:text-base">Location</h4>
                    <span className="text-gray-300 font-medium text-xs sm:text-sm">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-700 hover:border-red-500/30">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-red-500/20 text-red-400 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors duration-300 text-sm sm:text-base">Response Time</h4>
                    <span className="text-gray-300 font-medium text-xs sm:text-sm">Usually within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & CTA Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 md:p-8 text-center border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
              Let's Build Something Amazing Together
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you need a full-stack web application, mobile app, or technical consultation, 
              I'm here to help bring your vision to life.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-600 hover:border-red-500/30"
              >
                <Github className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-600 hover:border-red-500/30"
              >
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
              </a>
            </div>

            {/* Primary CTA Button */}
            <div className="flex justify-center">
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=Hi Mohomed, I would like to discuss a project with you.`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-500 text-red-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;