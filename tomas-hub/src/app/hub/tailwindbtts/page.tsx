import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import GradientButtonViewer from './components/gradients1';  // Correct relative path
import { motion } from 'framer-motion';

export default function Tailwindbtts() {
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
                <div className="m-4">
                    <GradientButtonViewer />
                </div>

            </div>
        </div>
    );
}
