'use client';

function ResetOnMount() {
  useEffect(() => {
    // prevent the browser from restoring an old scroll position
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    // clear any lingering #fragment so we don't jump to a section on first load
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);

    // go to very top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return null;
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplitSection from './components/SplitSection';
import FeatureCard from './components/FeatureCard';
import SectionHeading from './components/SectionHeading';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import ContactSection from './components/ContactSection';


export default function HomePage() {
  const [showDetails, setShowDetails] = useState<boolean[]>([false, false, false]);

  function toggleDetail(index: number) {
    setShowDetails((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  }

  const features = [
    { title: 'How it works', 
    id: 'howitworks',
    desc: (
      <>
        Students from across Spain compete in local Brain Bee chapter competitions. The top performers advance to the national championship – Brain Bee España – happening online, where one finalist earns the chance to represent Spain at the{' '}
        <a
          href="https://thebrainbee.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors duration-200 underline"
        > 
          International Brain Bee 
        
        </a>.
      </>
    ),

    image: '/images/firegirl.jpg.webp', reverse: false,
    linkText: 'Want to start a local chapter?',
    linkHref: '/start-a-chapter' },

    { title: 'Competition topics',
      id: 'topics',
desc: (
  <>
    <p>All Brain Bee competitions are based on either <em>“Brain Facts”</em> by the Society for Neuroscience or <em>“Neuroscience: The Science of the Brain”</em>.</p>
    <p className="mt-4">For the Spanish Brain Bee, students will prepare using study materials specifically curated and adapted for Spain’s neuroscience curriculum. These materials are based on <em>Brain Facts</em>, but simplified to match the level of local science education.</p>
  </>
),
    image: '/images/neuron.png', 
    reverse: true,
    imageClass: 'w-2/3 max-w-xs',
},

{
  title: 'Next Steps',
  id: 'comingsoon',
  desc: (
    <>
      <p>Here’s what’s coming up as we get Brain Bee España off the ground:</p>
      <ul className="mt-4 list-disc list-inside space-y-2">
        <li>
          Finalize study materials - developing resources based on “Brain Facts” but adapted to Spain’s curriculum.{' '}
          <button className="text-purple-400 hover:text-pink-500" onClick={() => toggleDetail(0)}>
            ⓘ
          </button>
          {showDetails[0] && (
            <div className="mt-2 text-gray-300">
              We’re partnering with neuroscience educators to adapt and simplify chapters of the book to create the best version of a fun and comprehensive study guide.
            </div>
          )}
        </li>
        <li>
          Launch local pilot rounds - testing in selected regions.{' '}
          <button className="text-purple-400 hover:text-pink-500" onClick={() => toggleDetail(1)}>
            ⓘ
          </button>
          {showDetails[1] && (
            <div className="mt-2 text-gray-300">
              We’ll start with a pilot in Mallorca and Madrid to gather feedback, before scaling across regions.
            </div>
          )}
        </li>
        <li>
          Open national competition - invite qualifying students from chapters to then compete for Spain’s representation.{' '}
          <button className="text-purple-400 hover:text-pink-500" onClick={() => toggleDetail(2)}>
            ⓘ
          </button>
          {showDetails[2] && (
            <div className="mt-2 text-gray-300">
              The top student will represent Spain in the International Brain Bee. Event details and dates will be published well in advance.
            </div>
          )}
        </li>
      </ul>
    </>
  ),
  image: '/images/xray-brain.jpg',
  reverse: false,
},
];

const resourceCards = [
 {
   title: 'Brain Facts copy',
   desc: 'The official neuroscience primer used by Brain Bee competitions.',
   icon: '/icons/pdf.svg',
   href: '/pdfs/Brain Facts 2012.pdf',
   image: '/blurryimages/blurrybrain.JPG',
 },
 {
   title: 'Neuroscience: The Science of the Brain copy',
   desc: 'Advanced textbook often referenced in international Brain Bee tests.',
   icon: '/icons/pdf.svg',
   href: '/pdfs/Neuroscience Science of The Brain.pdf',
   image: '/blurryimages/blurryneuroscience.jpg',
 },
 {
   title: '2014 Mock Test',
   desc: 'Practice test from 2014 to get familiar with question format.',
   icon: '/icons/pdf.svg',
   href: '/pdfs/2014 Mock Test.pdf',
   image: '/blurryimages/blurrymock.jpg',
 },
 {
   title: '2014 Mock Answers',
   desc: 'Answer key for the 2014 mock test for self-checking.',
   icon: '/icons/pdf.svg',
   href: '/pdfs/2014 Mock Test Answers.pdf',
   image: '/blurryimages/blurrymockanswers.jpg',
 },
 {
   title: '3D Brain (Interactive)',
   desc: 'Rotate and explore a 3D brain model online.',
   icon: '/icons/atlas.svg',
   href: 'https://www.brainfacts.org/3d-brain#intro=true',
   image: '/blurryimages/blurrybrain.JPG',
 },
 {
   title: 'Glossary of Brain Terms',
   desc: 'Definitions of 350+ neuroscience terms from the Dana Foundation.',
   icon: '/icons/case.svg',
   href: 'https://dana.org/glossary/',
   image: '/blurryimages/blurryglossary.JPG',
 },
];
  return (
<main className="bg-black text-white font-sans overflow-x-hidden">
  
  <Navbar />
  <ResetOnMount />
  <section id="home" className="scroll-mt-24">
  <Hero />
  </section>


  {/* bg */}
  <div
    className="relative z-0"
    style={{
      backgroundImage: "url('/images/neuron-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-70 z-0" />


    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 space-y-32">
{features.map((f) => (
  <section id={f.id} key={f.id} className="scroll-mt-24">
    <SplitSection
      title={f.title}
      description={f.desc}
      image={f.image}
      reverse={f.reverse}
      linkText={f.linkText}
      linkHref={f.linkHref}
    />
  </section>
))}

      <section id="resources" className="scroll-mt-24">
        <SectionHeading> </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {resourceCards && resourceCards.length > 0 ? (
            resourceCards.map((rc, i) => (
              <FeatureCard key={i} {...rc} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-400">No resources available at this time.</div>
          )}
        </div>
      </section>
    </div>
  </div>


<div className="final-bg">
<motion.section id="resources-rebuild" className="mt-32 mb-32 scroll-mt-24"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <SectionHeading>Available Study Resources</SectionHeading>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 items-start">

    <a href="/pdfs/2014 Mock Test.pdf" target="_blank" rel="noopener noreferrer" className="group relative block p-6 rounded-lg bg-black bg-opacity-40 border border-white border-opacity-60 hover:border-purple-500 transition duration-300 overflow-hidden">
      <h3 className="text-xl font-bold mb-2">2014 Mock Test</h3>
      <p>Practice test from 2014 to get familiar with question format.</p>
      <span className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 animate-borderPulse rounded-lg pointer-events-none"></span>
    </a>

    <a href="/pdfs/2014 Mock Answers.pdf" target="_blank" rel="noopener noreferrer" className="group relative block p-6 rounded-lg bg-black bg-opacity-40 border border-white border-opacity-60 hover:border-purple-500 transition duration-300 overflow-hidden">
      <h3 className="text-xl font-bold mb-2">2014 Mock Answers</h3>
      <p>Answer key for self-checking</p>
      <span className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 animate-borderPulse rounded-lg pointer-events-none"></span>
    </a>

    <a href="/pdfs/Brain Facts.pdf" target="_blank" rel="noopener noreferrer" className="group relative block p-6 rounded-lg bg-black bg-opacity-40 border border-white border-opacity-60 hover:border-purple-500 transition duration-300 overflow-hidden">
      <h3 className="text-xl font-bold mb-2">Brain Facts copy</h3>
      <p>The official neuroscience primer used by Brain Bee competitions.</p>
      <span className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 animate-borderPulse rounded-lg pointer-events-none"></span>
    </a>

    <a href="/pdfs/Neuroscience Science of the Brain.pdf" target="_blank" rel="noopener noreferrer" className="group relative block p-6 rounded-lg bg-black bg-opacity-40 border border-white border-opacity-60 hover:border-purple-500 transition duration-300 overflow-hidden">
      <h3 className="text-xl font-bold mb-2">Neuroscience: The Science of the Brain copy</h3>
      <p>Advanced textbook often referenced in international Brain Bee tests.</p>
      <span className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 animate-borderPulse rounded-lg pointer-events-none"></span>
    </a>

    <a href="https://www.brainfacts.org/3d-brain#intro=true" target="_blank" rel="noopener noreferrer" className="group relative block p-6 rounded-lg bg-black bg-opacity-40 border border-white border-opacity-60 hover:border-purple-500 transition duration-300 overflow-hidden">
      <h3 className="text-xl font-bold mb-2">3D Brain</h3>
      <p>Rotate and explore a 3D brain model online.</p>
      <span className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 animate-borderPulse rounded-lg pointer-events-none"></span>
    </a>

    <a href="https://www.dana.org/article/glossary/" target="_blank" rel="noopener noreferrer" className="group relative block p-6 rounded-lg bg-black bg-opacity-40 border border-white border-opacity-60 hover:border-purple-500 transition duration-300 overflow-hidden">
      <h3 className="text-xl font-bold mb-2">Glossary of Brain Terms</h3>
      <p>Definitions of 350+ neuroscience terms from the Dana Foundation.</p>
      <span className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 animate-borderPulse rounded-lg pointer-events-none"></span>
    </a>

  </div>
</motion.section>
<ContactSection />
<div id="contact" className="scroll-mt-24" />
</div>
  <Footer />
</main>


  );
}
