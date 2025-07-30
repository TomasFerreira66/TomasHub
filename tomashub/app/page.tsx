'use client';
import React, { useState } from 'react';
import ProjectsGrid from './components/projectGrid';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Me');

  const renderContent = () => {
    switch (activeTab) {
      case 'Me':
        return (
          <div className="max-w-4xl mx-auto space-y-12">
            {/* About Me Section */}
            <section className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">About Me</h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  I'm Tomás Ferreira, a Portuguese software developer with a Bachelor's degree in Computer Systems Engineering and a strong focus on web development.
                </p>
                <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                  I'm passionate about building clean, functional, and visually engaging web experiences. 
                  I enjoy working with modern technologies to bring ideas to life, whether it's a portfolio, an interactive tool, or a full-stack app, 
                  I always constantly push myself to explore new tools and improve the way I build things.
                </p>
              </div>
            </section>

            {/* Contact Info */}
            <section className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">Contact</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Email: </span>
                    <span className="text-sm text-gray-600">tomasff2002@gmail.com</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Phone: </span>
                    <span className="text-sm text-gray-600">+351 937 957 936</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Location: </span>
                    <span className="text-sm text-gray-600">Braga, Portugal</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Links */}
            <section className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">Connect With Me</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <a href="#" className="group p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700">GitHub</h4>
                  <p className="text-sm text-gray-600">View my code and contributions</p>
                </a>
                <a href="#" className="group p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700">LinkedIn</h4>
                  <p className="text-sm text-gray-600">Professional connections</p>
                </a>
                <a href="#" className="group p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700">Twitter</h4>
                  <p className="text-sm text-gray-600">Latest thoughts and updates</p>
                </a>
              </div>
            </section>
          </div>
        );

      case 'Projects':
         return <ProjectsGrid />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-light text-gray-900">Tomás Ferreira</h1>
            
            {/* Navigation */}
            <nav className="flex space-x-8">
              {['Me', 'Projects'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm md:text-base font-light transition-colors ${
                    activeTab === tab
                      ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}