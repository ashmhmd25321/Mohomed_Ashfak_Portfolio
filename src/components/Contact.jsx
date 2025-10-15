import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute -bottom-8 -left-4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to start your next project? I'm always excited to collaborate and bring innovative ideas to life with cutting-edge technology.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-600 hover:text-purple-600 transition-colors duration-200 font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">Phone / WhatsApp</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-blue-600 hover:text-purple-600 transition-colors duration-200 font-medium"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">Location</h4>
                    <span className="text-slate-600 font-medium">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg group-hover:from-red-500 group-hover:to-pink-500 transition-all duration-300">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">Response Time</h4>
                    <span className="text-slate-600 font-medium">Usually within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & CTA Section */}
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you need a full-stack web application, mobile app, or technical consultation, 
              I'm here to help bring your vision to life.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-8 w-8 text-slate-700 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-8 w-8 text-slate-700 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-4 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-8 w-8 text-slate-700 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${personalInfo.email}?subject=Project Discussion&body=Hi Mohomed, I would like to discuss a project with you.`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start a Project
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=Hi Mohomed, I would like to discuss a project with you.`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
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