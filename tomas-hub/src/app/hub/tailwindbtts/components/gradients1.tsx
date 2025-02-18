'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Button {
  label: string;
  gradient: string[];
}

const buttons: Button[] = [
  {
    label: 'Purple Gradient',
    gradient: ['#a855f7', '#ec4899'],
  },
  {
    label: 'Blue Gradient',
    gradient: ['#3b82f6', '#06b6d4'],
  },
  {
    label: 'Green Gradient',
    gradient: ['#22c55e', '#a3e635'],
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
  transition={{ duration: 0.5 }}
>
  Button Label
</motion.button>
    `; // Ensures no extra whitespace at the top or bottom
  };

  return (
    <div className="flex bg-gray-500 items-center justify-center">
      <div className="flex flex-col p-6 border-1 shadow-lg bg-gray-800 rounded-lg text-white">
        {/* Top Part: Buttons */}
        <div className="flex gap-6 border-2 p-6 rounded-md bg-gray-700">
          {buttons.map((btn, index) => (
            <motion.button
              key={index}
              className="relative px-6 py-2 rounded-lg shadow-lg text-white overflow-hidden"
              onClick={() => setSelectedCode(generateCode(btn.gradient))} // Update code when button is clicked
              initial={{
                background: `linear-gradient(to right, ${btn.gradient[0]}, ${btn.gradient[1]})` // Dynamically set the gradient
              }}
              whileHover={{
                background: `linear-gradient(to right, ${btn.gradient[1]}, ${btn.gradient[0]})` // Dynamically set the gradient on hover
              }}
              transition={{ duration: 0.4 }}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Bottom Part: Code Display */}
        <div className="bg-gray-900 p-4 rounded-lg shadow-md w-full max-w-lg text-sm mt-6 overflow-auto">
          <pre className="whitespace-pre-wrap text-green-400">
            <code>{selectedCode}</code>
          </pre>
        </div>
      </div>

    </div>
  );


}
