'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';


export default function Hero() {
return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/brain-hero.png"
          alt="Brain background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4 }}
  viewport={{ once: false, amount: 1}}
  className="relative z-10 px-6"
>
  <p className="text-lg text-gray-300 uppercase tracking-widest mb-2">
    Brain Bee España
  </p>

  {/* headline */}
  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl text-white">
    NEURONS IN COMPETITION
  </h1>

  <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
    The Spanish Brain Bee is a national neuroscience competition for curious high school students under 19. Challenging curiosity and connecting Spanish students to an exciting global science stage, competing against countries all over the world.
  </p>

<div className="mt-6 flex justify-center">
  <LearnMoreMenu />
</div>

</motion.div>

    </section>
); }


// Inline "Learn More" bubble menu
function LearnMoreMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [btnW, setBtnW] = useState(0);

  useEffect(() => {
    const w = btnRef.current?.offsetWidth ?? 0;
    setBtnW(w);
    // keep it correct on resize
    const onResize = () => setBtnW(btnRef.current?.offsetWidth ?? 0);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const items = [
    { label: 'Competition Topics', href: '#topics' },   // left
    { label: 'How it Works', href: '#howitworks' },     // center
    { label: "What’s to come?", href: '#comingsoon' },  // right
  ];

  // triangle targets relative to the button center
const targets = [
  { x: -160, y: -55 }, // left
  { x:    0, y:  25 }, // center
  { x:  160, y: -55 }, // right
];

  return (
    <div className="relative inline-block z-10">
      {/* MAIN PILL */}
      <motion.button
        ref={btnRef}
        onClick={() => setOpen(v => !v)}
        initial={{ opacity: 0, y: 6, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg ring-1 ring-black/10"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Learn More
      </motion.button>

      {/* FAN-OUT: positioned from the exact center of the button */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="fan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full mt-3 left-0 w-full pointer-events-none"
          >
            {items.map((it, i) => (
              // wrapper is anchored at button center
              <motion.div
                key={it.href}
                className="absolute"
                style={{ left: btnW / 2 }} // exact middle of the button
                initial={{ x: 0, y: 0, scale: 0.6, opacity: 0 }}
                animate={{ x: targets[i].x, y: targets[i].y, scale: 1, opacity: 1 }}
                exit={{ x: 0, y: 0, scale: 0.6, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28, delay: i * 0.05 }}
              >
                {/* the pill, centered under its wrapper using -translate-x-1/2 */}
                <a
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="pointer-events-auto -translate-x-1/2 inline-flex h-12 w-[140px] items-center justify-center rounded-full bg-white/95 px-5 text-sm font-semibold text-black shadow-lg ring-1 ring-black/10 hover:bg-white whitespace-wrap"
                  role="menuitem"
                >
                  {it.label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




