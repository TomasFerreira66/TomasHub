'use client';
import React, { useState } from 'react';
import ProjectsGrid from './components/projectGrid';
import { AnimatePresence, motion } from 'framer-motion';
import { MdLocationOn, MdVerified, MdSchool } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

              {/* Profile and Info */}
              <div className="space-y-6">
                <div className="flex gap-10 items-center justify-center">
                  {/* Minimalistic Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <MdLocationOn className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-800 text-sm">Portugal, Braga</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <MdVerified className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-800 text-sm">23 years old</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <MdSchool className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-800 text-sm">B.Sc. in Computer Systems Engineering</span>
                    </div>
                  </div>

                  {/* Image - Visible on all devices */}
                  <div>
                    <img
                      src="/ppfp.png"
                      alt="Tomás Ferreira"
                      className="w-48 h-48 md:w-48 md:h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                    I'm passionate about building clean, functional, and visually engaging web experiences.
                    I enjoy working with modern technologies to bring ideas to life, whether it's a portfolio,
                    an interactive tool, or a full-stack application. I constantly push myself to explore
                    new tools and improve the way I build things.
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">Tech Stack</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* My Expertise */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">My expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="w-4 h-4" />
                      React
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" />
                      Javascript
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-4 h-4" />
                      Typescript
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full">
                      REST APIs
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="Next.js" className="w-4 h-4" />
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" className="w-4 h-4" />
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="Framer Motion" className="w-4 h-4" />
                      Motion
                    </span>
                  </div>
                </div>

                {/* Databases */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">DB</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="SQL" className="w-4 h-4" />
                      SQL
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="SQLite" className="w-4 h-4" />
                      SQLite
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" className="w-4 h-4" />
                      Firebase
                    </span>
                  </div>
                </div>

                {/* Experienced In */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Experienced In</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="Kotlin" className="w-4 h-4" />
                      Kotlin
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" className="w-4 h-4" />
                      C#
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-4 h-4" />
                      Python
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-sm rounded-full flex items-center gap-1">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" className="w-4 h-4" />
                      Laravel
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact & Socials Side by Side on Desktop */}
            <section className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-3xl font-light text-gray-900">Contact</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-sm text-gray-600">tomasff2002@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-sm text-gray-600">+351 937 957 936</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-3xl font-light text-gray-900 text-center">Connect</h3>
                  <div className="flex gap-4 items-center justify-center">
                    <a
                      href="https://github.com/tomasferreira66"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-800 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://linkedin.com/in/tomás-ferreira-891405236"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6 text-white" />
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
    <div className="min-h-screen flex items-center justify-center py-8 overflow-y-scroll">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl flex flex-col min-h-[80vh] h-[90vh] max-h-[900px] md:h-[85vh] md:max-h-[800px]">
        {/* Navbar at the top, inside the border */}
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