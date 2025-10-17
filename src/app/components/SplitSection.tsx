'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter'

type SplitSectionProps = {
  title: string;
  description: React.ReactNode;
  image: string;
  imageClass?: string; 
  reverse?: boolean;
  linkText?: string;
  linkHref?: string;
};

export default function SplitSection({ title, description, image, imageClass, reverse = false, linkText, linkHref }: SplitSectionProps) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2">
<motion.img
  src={image}
  alt={title}
  className={`rounded-lg object-cover w-full h-auto shadow-lg ${imageClass || ''}`}
  initial={{ opacity: 0, x: reverse ? 100 : -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
/>
      </div>
<motion.div
  className="md:w-1/2 space-y-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <div className="relative inline-block">
  <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
<div className="absolute left-0 bottom-0 h-[2px] w-full overflow-hidden">
  {/* line thingy */}
  <motion.div
    className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500"
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
  />


  <motion.div
    className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500"
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    transition={{ duration: 1.3, ease: 'easeIn', delay: 1.6 }}
  />
</div>
</div>
  <div className="text-gray-300 leading-relaxed space-y-4">{description}</div>


{linkText && linkHref && (

<motion.a
  href={linkHref}
  className="inline-block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 hover:from-pink-500 hover:to-purple-600 font-medium text-lg"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.8, duration: 1.2 }}
>
  <Typewriter text={linkText} speed={100} delay={1200} />
</motion.a>
)}

</motion.div>
    </div>
  );
}
