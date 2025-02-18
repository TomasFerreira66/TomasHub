'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import GradientButtonViewer from './components/gradients1';  // Correct relative path
import { motion } from 'framer-motion';

export default function Tailwindbtts() {
    const [openCollection, setOpenCollection] = useState<number | null>(null);  // Define state type as number or null

    const handleToggle = (index: number) => {  // Explicitly define the type of index as number
        setOpenCollection(openCollection === index ? null : index);
    };

    return (
        <div className="flex h-screen bg-gray-500 overflow-y-auto">
            {/* Left Sidebar with collection buttons */}
            <div className="w-64 bg-gray-800 text-white p-4">
                <nav className="flex flex-col">
                    <Link href="../">
                        <HomeIcon className="h-6 w-6 text-white cursor-pointer" />
                    </Link>
                    <span className="ml-2 font-semibold">Back to hub</span>
                    <div className="mt-6">
                        {/* Collection Buttons */}
                        <button
                            onClick={() => handleToggle(1)}
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-md mb-4"
                        >
                            {openCollection === 1 ? "Close Gradient Buttons" : "Gradient Buttons Collection"}
                        </button>
                        {/* Add more buttons as needed */}
                        <button
                            onClick={() => handleToggle(2)}
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-md mb-4"
                        >
                            {openCollection === 2 ? "Close Another Collection" : "Another Collection"}
                        </button>
                    </div>
                </nav>
            </div>
    
            {/* Right Main Content Area */}
            <div className="flex-1 border-2">
                {/* Render content based on the selected collection */}
                {openCollection === 1 && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: openCollection === 1 ? "auto" : 0, opacity: openCollection === 1 ? 1 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <GradientButtonViewer />
                    </motion.div>
                )}
                {openCollection === 2 && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: openCollection === 2 ? "auto" : 0, opacity: openCollection === 2 ? 1 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="w-full"
                    >
                        {/* Replace with the actual component for this collection */}
                        <div>Another collection content goes here</div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
