"use client";

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-purple-500/10 bg-gradient-to-t from-purple-950/30 via-slate-950 to-transparent py-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3 mb-8">
                    <motion.div whileHover={{ y: -4 }} className="group">
                        <h3 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">About</h3>
                        <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-300 transition">Crafting beautiful digital experiences with modern technology and creative design.</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -4 }} className="group">
                        <h3 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">Quick Links</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-400">
                            <li><a href="#about" className="hover:text-purple-300 transition duration-300">About</a></li>
                            <li><a href="#portfolio" className="hover:text-purple-300 transition duration-300">Portfolio</a></li>
                            <li><a href="#contact" className="hover:text-purple-300 transition duration-300">Contact</a></li>
                        </ul>
                    </motion.div>
                    <motion.div whileHover={{ y: -4 }} className="group">
                        <h3 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">Connect</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-400">
                            <li><a href="mailto:umairzahir2003@gmail.com" className="hover:text-purple-300 transition duration-300">Email</a></li>
                            <li><a href="https://wa.me/923195447734" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition duration-300">WhatsApp</a></li>
                        </ul>
                    </motion.div>
                </div>

                <div className="border-t border-purple-500/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <motion.p className="text-sm text-slate-400 hover:text-slate-300 transition" whileHover={{ x: 2 }}>© {currentYear} Umair Zahir — Web developer & content creator.</motion.p>
                    <motion.p className="text-sm text-slate-500" whileHover={{ scale: 1.05 }}>Built with Next.js, Tailwind, Framer Motion, GSAP & Three.js</motion.p>
                </div>
            </div>
        </footer>
    );
}
