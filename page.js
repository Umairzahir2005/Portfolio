'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Home() {
    useEffect(() => {
        let ctx;
        let scrollTriggerPlugin;
        let isMounted = true;

        async function setupScrollAnimations() {
            try {
                const [{ gsap }, { ScrollTrigger }] = await Promise.all([
                    import('gsap/dist/gsap'),
                    import('gsap/dist/ScrollTrigger'),
                ]);

                if (!isMounted) {
                    return;
                }

                scrollTriggerPlugin = ScrollTrigger;
                gsap.registerPlugin(ScrollTrigger);

                ctx = gsap.context(() => {
                    const sections = gsap.utils.toArray('.gsap-fade');
                    sections.forEach((section) => {
                        gsap.fromTo(
                            section,
                            { y: 50, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.9,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: section,
                                    start: 'top 85%',
                                    toggleActions: 'play none none none',
                                },
                            }
                        );
                    });
                });
            } catch (error) {
                console.error('Failed to load scroll animations:', error);
            }
        }

        setupScrollAnimations();

        return () => {
            isMounted = false;
            ctx?.revert();
            scrollTriggerPlugin?.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <main className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-slate-100">
            <div className="absolute inset-0 bg-aurora opacity-40" />
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-float" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-pulse-glow" />

            <div className="relative z-10 min-h-screen">
                <section className="relative overflow-hidden py-24">
                    <ThreeScene />
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] items-center">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={sectionVariants}
                                className="max-w-2xl space-y-6"
                            >
                                <motion.span className="inline-flex rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] shadow-glow-purple border border-purple-500/20" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                    <span className="bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">Web Developer & Content Creator</span>
                                </motion.span>
                                <motion.h1 className="text-5xl font-bold leading-tight tracking-[-0.05em] bg-gradient-to-r from-white via-purple-100 to-cyan-100 text-transparent bg-clip-text md:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                    Hi, I&apos;m Umair Zahir — building bold digital experiences for brands and creators.
                                </motion.h1>
                                <motion.p className="max-w-xl text-lg text-slate-300/90 md:text-xl leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                    I design and build modern websites, content campaigns, and immersive web projects with polished UI, smooth interactions, and performance-first code.
                                </motion.p>
                                <motion.div className="flex flex-wrap gap-4 pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                    <a href="mailto:umairzahir2003@gmail.com" className="btn-transition inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-base font-semibold text-white shadow-glow-purple hover:shadow-lg hover:from-purple-500 hover:to-blue-500">
                                        Hire Me
                                    </a>
                                    <a href="#portfolio" className="btn-transition inline-flex items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/10 px-8 py-3 text-base font-semibold text-white hover:border-purple-400 hover:bg-purple-500/20">
                                        See Work
                                    </a>
                                </motion.div>
                            </motion.div>

                            <motion.div className="card-hover rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-slate-900/60 to-purple-900/20 p-8 shadow-glow-purple backdrop-blur-xl" whileHover={{ scale: 1.02 }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                                <div className="space-y-6">
                                    <motion.div className="rounded-3xl bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-6 shadow-xl border border-purple-500/10 card-hover" whileHover={{ y: -4 }}>
                                        <p className="text-sm uppercase tracking-[0.24em] bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text font-semibold">Contact</p>
                                        <div className="mt-6 space-y-3 text-slate-200">
                                            <p><span className="font-semibold text-slate-100">Email:</span> umairzahir2003@gmail.com</p>
                                            <p><span className="font-semibold text-slate-100">WhatsApp:</span> +92 319 5447734</p>
                                            <p><span className="font-semibold text-slate-100">Location:</span> Pakistan</p>
                                        </div>
                                    </motion.div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <motion.div className="card-hover rounded-3xl bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-5 shadow-xl border border-purple-500/10" whileHover={{ y: -4 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                            <p className="text-sm uppercase tracking-[0.24em] bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text font-semibold">Experience</p>
                                            <p className="mt-4 text-3xl font-semibold text-white">4+</p>
                                            <p className="mt-2 text-sm text-slate-300">Years building websites and content brands.</p>
                                        </motion.div>
                                        <motion.div className="card-hover rounded-3xl bg-gradient-to-br from-slate-800/80 to-purple-800/40 p-5 shadow-xl border border-purple-500/10" whileHover={{ y: -4 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                            <p className="text-sm uppercase tracking-[0.24em] bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text font-semibold">Projects</p>
                                            <p className="mt-4 text-3xl font-semibold text-white">50+</p>
                                            <p className="mt-2 text-sm text-slate-300">Websites, landing pages and campaigns shipped.</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="about" className="container mx-auto px-6 lg:px-8 py-24">
                    <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="gsap-fade mb-12 max-w-3xl">
                        <motion.span className="inline-flex rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] shadow-glow-purple border border-purple-500/20" whileHover={{ scale: 1.05 }}>
                            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">About Me</span>
                        </motion.span>
                        <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-white to-purple-100 text-transparent bg-clip-text md:text-5xl">Designing modern web experiences that feel premium and perform fast.</h2>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                            I help ambitious businesses and creators launch websites, social content strategies, and visual campaigns with thoughtful design, smooth motion, and web technologies that scale.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {[
                            { title: 'Web Development', description: 'Responsive, fast, and accessible web experiences built with modern front-end tools.', icon: '💻' },
                            { title: 'UI & UX Design', description: 'Clean interfaces with strong hierarchy, polished spacing, and smooth interaction.', icon: '✨' },
                            { title: 'Content Creation', description: 'Creative content for social, blogs, and brand campaigns that captures attention.', icon: '🎨' },
                        ].map((item, idx) => (
                            <motion.div key={item.title} className="gsap-fade card-hover rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-8 shadow-glow-purple backdrop-blur-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6, borderColor: 'rgba(168, 85, 247, 0.4)' }}>
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                <p className="mt-4 text-slate-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="portfolio" className="relative py-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
                    <div className="container mx-auto px-6 lg:px-8 relative z-10">
                        <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="gsap-fade mb-12 max-w-3xl">
                            <motion.span className="inline-flex rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] shadow-glow-purple border border-purple-500/20" whileHover={{ scale: 1.05 }}>
                                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">Portfolio</span>
                            </motion.span>
                            <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-white to-purple-100 text-transparent bg-clip-text md:text-5xl">Selected work that blends motion, design, and interactivity.</h2>
                        </motion.div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {[
                                { title: 'Business Website', description: 'A polished responsive website built for speed, conversion and mobile-first UX.', gradient: 'from-blue-500/20 to-purple-500/20' },
                                { title: 'Content Campaign', description: 'Branded visuals and motion-first content crafted to grow visibility across social channels.', gradient: 'from-purple-500/20 to-pink-500/20' },
                                { title: 'Portfolio Landing', description: 'A modern portfolio space designed to showcase work with dynamic interaction.', gradient: 'from-cyan-500/20 to-blue-500/20' },
                            ].map((item, idx) => (
                                <motion.article key={item.title} className={`gsap-fade card-hover rounded-[2rem] border border-purple-500/20 bg-gradient-to-br ${item.gradient} backdrop-blur-xl p-8 shadow-glow-purple`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}>
                                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="mt-4 text-slate-300">{item.description}</p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="container mx-auto px-6 lg:px-8 py-24">
                    <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="gsap-fade grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
                        <div>
                            <motion.span className="inline-flex rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] shadow-glow-purple border border-purple-500/20" whileHover={{ scale: 1.05 }}>
                                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">Let&apos;s connect</span>
                            </motion.span>
                            <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-white to-purple-100 text-transparent bg-clip-text md:text-5xl">Ready to launch your next website or content project?</h2>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                                Contact me for a website build, content campaign, or digital experience that helps your brand stand out.
                            </p>
                            <div className="mt-10 space-y-4 text-slate-300">
                                <motion.p whileHover={{ x: 4 }}>
                                    <span className="font-semibold text-white">Email:</span> <a className="text-purple-300 hover:text-purple-200 transition" href="mailto:umairzahir2003@gmail.com">umairzahir2003@gmail.com</a>
                                </motion.p>
                                <motion.p whileHover={{ x: 4 }}>
                                    <span className="font-semibold text-white">WhatsApp:</span> <a className="text-purple-300 hover:text-purple-200 transition" href="https://wa.me/923195447734" target="_blank" rel="noreferrer">+92 319 5447734</a>
                                </motion.p>
                            </div>
                        </div>

                        <motion.div className="card-hover rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-slate-900/60 to-purple-900/20 p-8 shadow-glow-purple backdrop-blur-xl" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                            <form className="space-y-6">
                                <label className="block text-sm font-medium text-slate-300">
                                    Your name
                                    <motion.input type="text" placeholder="Your name" className="mt-3 w-full rounded-3xl border border-purple-500/30 bg-slate-950/50 px-4 py-4 text-slate-100 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20" whileFocus={{ borderColor: 'rgba(168, 85, 247, 0.5)' }} />
                                </label>
                                <label className="block text-sm font-medium text-slate-300">
                                    Email address
                                    <motion.input type="email" placeholder="you@example.com" className="mt-3 w-full rounded-3xl border border-purple-500/30 bg-slate-950/50 px-4 py-4 text-slate-100 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20" whileFocus={{ borderColor: 'rgba(168, 85, 247, 0.5)' }} />
                                </label>
                                <label className="block text-sm font-medium text-slate-300">
                                    Message
                                    <motion.textarea rows="5" placeholder="Tell me about your project" className="mt-3 w-full rounded-3xl border border-purple-500/30 bg-slate-950/50 px-4 py-4 text-slate-100 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 resize-none" whileFocus={{ borderColor: 'rgba(168, 85, 247, 0.5)' }} />
                                </label>
                                <motion.button type="submit" className="btn-transition w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:from-purple-500 hover:to-blue-500 shadow-glow-purple" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
