"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-slate-950/50 border-b border-purple-500/10">
            <div className="container mx-auto px-6 lg:px-8">
                <nav className="flex items-center justify-between py-4">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                            Umair Zahir
                        </Link>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
                        <motion.div whileHover={{ textDecoration: 'underline' }}>
                            <Link href="#about" className="hover:text-purple-300 transition duration-300">About</Link>
                        </motion.div>
                        <motion.div whileHover={{ textDecoration: 'underline' }}>
                            <Link href="#portfolio" className="hover:text-purple-300 transition duration-300">Portfolio</Link>
                        </motion.div>
                        <motion.div whileHover={{ textDecoration: 'underline' }}>
                            <Link href="#contact" className="hover:text-purple-300 transition duration-300">Contact</Link>
                        </motion.div>
                        <motion.a
                            href="mailto:umairzahir2003@gmail.com"
                            className="ml-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:from-purple-500 hover:to-blue-500 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    <div className="md:hidden">
                        <button aria-label="open menu" className="p-2 rounded-md bg-purple-500/10 text-slate-200 hover:bg-purple-500/20 transition">☰</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
