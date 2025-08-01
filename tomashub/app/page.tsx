'use client';
import React, { useState } from 'react';
import ProjectsGrid from './components/projectGrid';
import { AnimatePresence, motion } from 'framer-motion';

import AboutMe from './components/aboutme';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Me');

  const renderContent = () => {
    switch (activeTab) {
      case 'Me':
        return (
          <AboutMe />
        );
      case '</> Projects':
        return <ProjectsGrid />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 overflow-y-scroll">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl flex flex-col min-h-[80vh] h-[90vh] max-h-[900px] md:h-[85vh] md:max-h-[800px]">
        {/* Navbar */}
        <nav className="flex justify-center gap-4 py-4 bg-white rounded-t-2xl border-b border-gray-200">
          {['Me', '</> Projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-32 text-base font-semibold transition-colors py-2 rounded-xl
                ${activeTab === tab
                  ? 'text-gray-900 bg-gray-100 border-2 border-gray-200'
                  : 'text-gray-500 bg-white border-2 border-transparent hover:border-gray-200 hover:bg-gray-50'
                }`}
            >
              {tab === '</> Projects' ? (
                <>
                  <span className="font-bold">&lt;/&gt;</span> Projects
                </>
              ) : (
                tab
              )}
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
              transition={{ duration: 0.1 }}
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