'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

// ----- tiny inline icons (no extra libs) -----
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

type Person = { name: string; role: string; email: string };

const CONTACTS: Person[] = [
  { name: 'Naomi Bork', role: 'Founder & National Coordinator - Spanish Brain Bee', email: 'naomi.brainbee@outlook.com' },
  { name: 'Ionut Dumitru', role: 'Academic Director - International Brain Bee', email: 'ionut.dumitru@thebrainbee.org' },
];

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  // open automatically when landing on /#contact
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#contact') {
      setOpen(true);
    }
  }, []);

  // ---- Motion variants (typed) ----
  const easeOutCubic: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const headline: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutCubic, staggerChildren: 0.08 },
    },
  };

  const line: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutCubic } },
  };

  return (
    <section id="contact" className="relative py-28 scroll-mt-24">
      {/* background (safe CSS, no fancy quotes) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 0%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(70% 55% at 80% 20%, rgba(217,70,239,0.14), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* header row */}
<div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
  {/* LEFT: headline + copy */}
  <div className="relative">
    <p className="text-xs uppercase tracking-widest text-neutral-300"></p>

    {/* BIG multi-line headline with staggered reveal (already typed variants in file) */}
    <motion.div variants={headline} initial="hidden" whileInView="show" viewport={{ once: false }}>
      <motion.h2
        variants={line}
        className="mt-2 text-3xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-white"
      >
        <span className="block">Want to</span>
        <span className="block bg-gradient-to-r from-purple-200 via-white to-fuchsia-400 bg-clip-text text-transparent">
          learn more?
        </span>
      </motion.h2>

      {/* underline flourish */}
      <motion.div
        variants={line}
        className="mt-4 h-[2px] w-32 md:w-48 bg-gradient-to-r from-purple-400 via-white to-purple-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1.5}}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: easeOutCubic }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>

    <motion.p
      className="mt-4 max-w-xl text-neutral-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.45, ease: easeOutCubic }}
    >
      We are happy to answer questions or help you get involved with Brain Bee España.
    </motion.p>
  </div>


  <motion.button
    onClick={() => setOpen(v => !v)}
    aria-expanded={open}
    // springy reveal as it enters viewport
    initial={{ opacity: 0, x: 24, y: -8, scale: 0.92 }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    viewport={{ once: false }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    // interactive hover/tap flair
    whileHover={{
      scale: 1.05,
      rotate: 0.25,
      boxShadow: '0 14px 35px rgba(99,102,241,0.28)',
    }}
    whileTap={{ scale: 0.98 }}
    className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black ring-1 ring-black/10 shadow-lg md:-translate-y-2"
  >
    <MailIcon className="h-5 w-5" />
    {'Let\'s talk'}
    <motion.span
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ type: 'tween', duration: 0.5}}
      className="inline-flex"
    >
      <ChevronDownIcon className="h-4 w-4" />
    </motion.span>

    {/* subtle inner glow sweep on hover (no plugins) */}
    <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent transition"></span>
  </motion.button>
</div>
        {/* dropdown panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: easeOutCubic }}
              className="overflow-hidden"
            >
              <div className="mt-8">
                {CONTACTS.map((p, i) => {
                  const mailto = 'mailto:' + p.email; // avoid template string
                  return (
                    <motion.a
                      key={p.email}
                      href={mailto}
                      initial={{ y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.45, delay: 0.06 * i, ease: easeOutCubic }}
                      className="group block py-5"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <div className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
                            {p.name}
                          </div>
                          <div className="mt-1 text-sm md:text-base text-neutral-300">{p.role}</div>
                          <div className="mt-2 text-sm md:text-base text-indigo-300 underline decoration-dotted underline-offset-4 transition group-hover:text-indigo-200">
                            {p.email}
                          </div>
                        </div>
                        <MailIcon className="mt-1 h-5 w-5 opacity-60 transition group-hover:opacity-100" />
                      </div>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.06 * i, ease: easeOutCubic }}
                        className="mt-5 h-px w-full origin-left bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}