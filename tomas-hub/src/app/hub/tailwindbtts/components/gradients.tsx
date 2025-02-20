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
    gradient: ['#ffd700', '#ff8c00'],
  },
  {
    label: 'Pink Lemonade button',
    gradient: ['#ff9a9e', '#fdffcc'],
  },
  {
    label: 'Deep Space button',
    gradient: ['#0f2027', '#203a43'],
  },
  {
    label: 'Tropical Sunset button',
    gradient: ['#f12711', '#f5af19'],
  },
  {
    label: 'Its gonna rain button',
    gradient: ['#ccfcff', '#516c6e'],
  },
  {
    label: 'Swamp button',
    gradient: ['#1f1d36', '#253b2b'],
  },
];

export default function GradientButtonViewer() {
  const [selectedCode, setSelectedCode] = useState<string>('Click a button to see its code');
  const [customGradient, setCustomGradient] = useState<string[]>(['#3b82f6', '#06b6d4']); // Default gradient
  const [customLabel, setCustomLabel] = useState<string>('Custom Button'); // Default label

  // Function to generate the code dynamically
  const generateCode = (gradient: string[], label: string = 'Button Label') => {
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
  ${label}
</motion.button>
    `;
  };

  // Handle custom gradient creation
  const handleCustomGradient = () => {
    setSelectedCode(generateCode(customGradient, customLabel));
  };

  return (
    <div className="flex flex-grow w-full border-1 bg-gray-500 items-center justify-center h-full">
      <div className="flex flex-grow flex-row p-6 shadow-lg bg-gray-600 text-white w-full">
        {/* Left Part: Buttons */}
        <div className="flex flex-col p-6 border-2 bg-gray-700 rounded-md w-1/3">
          {/* Predefined Buttons */}
          {buttons.map((btn, index) => (
            <motion.button
              key={index}
              className="relative px-6 py-2 rounded-lg shadow-lg text-white overflow-hidden mb-4"
              onClick={() => setSelectedCode(generateCode(btn.gradient, btn.label))}
              initial={{
                background: `linear-gradient(to right, ${btn.gradient[0]}, ${btn.gradient[1]})`,
              }}
              whileHover={{
                background: `linear-gradient(to right, ${btn.gradient[1]}, ${btn.gradient[0]})`,
              }}
              transition={{ duration: 0.3 }}
            >
              {btn.label}
            </motion.button>
          ))}

          {/* Custom Gradient Creator */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Create Your Own Button</h3>
            <div className="space-y-4">
              {/* Color Pickers */}
              <div className="flex space-x-4">
                {/* Custom Color Picker 1 */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                  <input
                    type="color"
                    value={customGradient[0]}
                    onChange={(e) => setCustomGradient([e.target.value, customGradient[1]])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" // Ensure input is on top
                  />
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: customGradient[0] }}
                  />
                </div>

                {/* Custom Color Picker 2 */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                  <input
                    type="color"
                    value={customGradient[1]}
                    onChange={(e) => setCustomGradient([customGradient[0], e.target.value])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" // Ensure input is on top
                  />
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: customGradient[1] }}
                  />
                </div>
              </div>

              {/* Label Input */}
              <input
                type="text"
                value={customLabel}
                onChange={(e) => setCustomLabel(e.target.value)}
                placeholder="Button Label"
                className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
              />

              <h1>Hover to see how it looks!</h1>

              {/* Preview Button */}
              <motion.button
                className="w-full px-6 py-2 rounded-lg shadow-lg text-white overflow-hidden"
                onClick={handleCustomGradient}
                initial={{
                  background: `linear-gradient(to right, ${customGradient[0]}, ${customGradient[1]})`,
                }}
                whileHover={{
                  background: `linear-gradient(to right, ${customGradient[1]}, ${customGradient[0]})`,
                }}
                transition={{ duration: 0.3 }}
              >
                {customLabel}
              </motion.button>
            </div>
          </div>
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