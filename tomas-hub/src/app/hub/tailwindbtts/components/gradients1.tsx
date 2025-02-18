'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Button {
  label: string;
  gradient: string[];
}

const buttons: Button[] = [
  {
    label: 'Fade button',
    gradient: ['#a855f7', '#ec4899'],
  },
  {
    label: 'Soft Blue button',
    gradient: ['#3b82f6', '#06b6d4'],
  },
  {
    label: 'Mint Fresh button',
    gradient: ['#22c55e', '#a3e635'],
  },
  {
    label: 'Golden Hour button',
    gradient: ['#ffd700', '#ff8c00']
  },
  {
    label: 'Pink Lemonade button',
    gradient: ['#ff9a9e', '#fdffcc']
  },
  {
    label: 'Deep Space button',
    gradient: ['#0f2027', '#203a43']
  },
  {
    label: 'Tropical Sunset button',
    gradient: ['#f12711', '#f5af19']
  },
  {
    label: 'Its gonna rain button',
    gradient: ['#ccfcff', '#516c6e']
  },
  {
    label: 'Swamp button',
    gradient: ['#1f1d36', '#253b2b']
  }
];

export default function GradientButtonViewer() {
  const [selectedCode, setSelectedCode] = useState<string>('Click a button to see its code');

  // Function to generate the code dynamically
  const generateCode = (gradient: string[]) => {
    return `
<motion.button
  className="relative px-6 py-2 rounded-lg shadow-lg text-white overflow-hidden"
  initial={{
    background: 'linear-gradient(to right, ${gradient[0]}, ${gradient[1]})'
  }}
  whileHover={{
    background: 'linear-gradient(to right, ${gradient[1]}, ${gradient[0]})'
  }}
  transition={{ duration: 0.3 }}
>
  Button Label
</motion.button>
    `; // Ensures no extra whitespace at the top or bottom
  };

  return (
    <div className="flex flex-grow w-full border-1 bg-gray-500 items-center justify-center h-full">
        <div className="flex flex-grow flex-row p-6 shadow-lg bg-gray-600 text-white w-full">
            {/* Left Part: Buttons */}
            <div className="flex flex-col p-6 border-2 bg-gray-700 rounded-md w-1/3">
                {buttons.map((btn, index) => (
                    <motion.button
                        key={index}
                        className="relative px-6 py-2 rounded-lg shadow-lg text-white overflow-hidden mb-4"
                        onClick={() => setSelectedCode(generateCode(btn.gradient))}
                        initial={{
                            background: `linear-gradient(to right, ${btn.gradient[0]}, ${btn.gradient[1]})`
                        }}
                        whileHover={{
                            background: `linear-gradient(to right, ${btn.gradient[1]}, ${btn.gradient[0]})`
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {btn.label}
                    </motion.button>
                ))}
            </div>

            {/* Right Part: Code Display */}
            <div className="flex-grow p-4 bg-gray-900 rounded-lg shadow-md w-2/3 text-sm mt-6 overflow-auto">
                <pre className="whitespace-pre-wrap text-green-400">
                    <code>{selectedCode}</code>
                </pre>
            </div>
        </div>
    </div>
);
}
