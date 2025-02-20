'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LavaLampButtonViewer() {
    const [selectedCode, setSelectedCode] = useState<string>(
        `<motion.button className="relative px-6 py-3 font-semibold text-white rounded-lg overflow-hidden flex items-center justify-center border-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                    >
                        {/* Lava Lamp Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-8 h-8 bg-blue-400 rounded-full"
                                    animate={{
                                        y: [100, -100],
                                        scale: [0.4, 1.2],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 4 + i,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: i * 0.2,
                                    }}
                                    style={{
                                        left: \`\${Math.random() * 80 + 10}%\`,
                                        bottom: '-20%',
                                    }}
                                />
                            ))}
                        </div>
                        <span className="relative z-10">{Label}</span>
</motion.button>`
    );
    const [LavaLampColors, setCustomGradient] = useState<string[]>(['#3b82f6', '#06b6d4']);
    const [Label, setCustomLabel] = useState<string>('Custom Button');

    return (
        <div className="flex flex-grow w-full border-1 bg-gray-500 items-center justify-center h-full">
            <div className="flex flex-grow flex-row p-6 shadow-lg bg-gray-600 text-white w-full">
                {/* Left Part */}
                <div className="flex flex-col p-6 border-2 bg-gray-700 rounded-md w-1/3">
                    {/* Lava Lamp Button */}
                    <motion.button
                        className="relative px-6 py-3 font-semibold text-white rounded-lg overflow-hidden flex items-center justify-center border-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                    >
                        {/* Lava Lamp Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-8 h-8 bg-blue-400 rounded-full"
                                    animate={{
                                        y: [100, -100],
                                        scale: [0.4, 1.2],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 4 + i,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: i * 0.2,
                                    }}
                                    style={{
                                        left: `${Math.random() * 80 + 10}%`,
                                        bottom: '-20%',
                                    }}
                                />
                            ))}
                        </div>
                        <span className="relative z-10">{Label}</span>
                    </motion.button>
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
