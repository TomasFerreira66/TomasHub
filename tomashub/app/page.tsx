'use client';
import React, { useState } from 'react';
import ProjectsGrid from './components/projectGrid';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Me');

  const renderContent = () => {
    switch (activeTab) {
      case 'Me':
        return (
          <div className="space-y-12">
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
            {/* Contact & Socials Side by Side on Desktop */}
            <section className="space-y-8">
              <div className="grid grid-cols-2 gap-8 items-start">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-3xl font-light text-gray-900">Contact</h3>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Email: </span>
                    <span className="text-sm text-gray-600">tomasff2002@gmail.com</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Phone: </span>
                    <span className="text-sm text-gray-600">+351 937 957 936</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Location: </span>
                    <span className="text-sm text-gray-600">Braga, Portugal</span>
                  </div>
                </div>
                 {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-3xl font-light text-gray-900">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/tomasff2002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/tomasff2002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case '</> Projects':
        return <ProjectsGrid />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl flex flex-col min-h-[80vh] h-[90vh] max-h-[900px] md:h-[85vh] md:max-h-[800px]">
        {/* Navbar at the top, inside the border */}
        <nav className="flex justify-center gap-4 py-4 bg-white rounded-t-2xl border-b border-gray-200">
          {['Me', '</> Projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-32 text-base font-semibold transition-colors py-2 rounded-xl
                ${activeTab === tab
                  ? 'text-gray-900 bg-gray-200 border-2 border-gray-900'
                  : 'text-gray-500 bg-white border-2 border-transparent hover:border-gray-300 hover:bg-gray-50'
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
        {/* Content */}
        <main className="flex-1 px-6 md:px-12 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}