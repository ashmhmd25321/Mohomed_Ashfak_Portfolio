import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Latest <span className="text-blue-600">Blog Posts</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on software development, technology trends, and best practices.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Read More Button - Show on Hover */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Posts CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Want to read more technical articles and tutorials?
            </p>
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              View All Posts
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Blog Categories */}
          <div className="mt-16 bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Topics I Write About
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'React Development',
                'Spring Boot',
                'Full Stack Architecture', 
                'Database Design',
                'Security Best Practices',
                'Performance Optimization',
                'Cloud Computing',
                'Machine Learning',
                'Mobile Development',
                'DevOps'
              ].map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;