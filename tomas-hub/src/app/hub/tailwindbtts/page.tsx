'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import GradientButtonViewer from './components/gradients1';  // Correct relative path
import { motion } from 'framer-motion';

export default function Tailwindbtts() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen bg-gray-500 overflow-y-auto">
            {/* Top Navbar */}
            <nav className="bg-gray-800 text-white p-4 flex items-center">
                <Link href="../">
                    <HomeIcon className="h-6 w-6 text-white cursor-pointer" />
                </Link>
                <span className="ml-2 font-semibold">Back to hub</span>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center flex-grow">
                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md mb-4"
                >
                    {isOpen ? "Close Collection" : "Gradiant buttons collection"}
                </button>

                {/* Collapsible Collection */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="w-full max-w-lg"
                >
                    <div className="m-3">
                        <GradientButtonViewer />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
