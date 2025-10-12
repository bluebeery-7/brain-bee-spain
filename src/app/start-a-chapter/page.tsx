'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StartAChapterPage() {
  return (
    
<main className="relative min-h-screen text-white px-6 md:px-20 py-16 overflow-hidden">

  {/* Background image */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/gradient-bg.jpg')" }}
  />

  {/* Black overlay */}
  <div className="absolute inset-0 -z-10 bg-black opacity-60" />


      {/* Background effect */}


      <div className="max-w-3xl mx-auto">
        {/* Back link - now with more bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="text-1xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 hover:opacity-80 transition-opacity duration-200"
          >
            ⬅ Back to Home
          </Link>
        </motion.div>

        {/* Heading and intro continue here... */}


        {/* Heading + Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4 bg-clip-text drop-shadow-xl">
  START A LOCAL CHAPTER
</h1>
          <p className="text-lg text-gray-300 mb-10 leading-tight mb-6 drop-shadow-xl text-white">
            Bring Brain Bee to your local community! Fill out the form below and I’ll reach out with help and resources to get your chapter running.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          action="https://formspree.io/f/xldppvya" 
          method="POST"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="school"
              placeholder="School Name"
              required
              className="w-full px-4 py-3 bg-black-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonpurple-400"
            />
            <input
              type="text"
              name="region"
              placeholder="City / Region"
              required
              className="w-full px-4 py-3 bg-black-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonpurple-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-black-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonpurple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 bg-black-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonpurple-400"
            />
          </div>

          {/* Preferred Language (make same look as other fields) */}
          <div>
            <select
              name="language"
              id="language"
              className="w-full p-3 rounded-md bg-black-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>

          <div>
            <textarea
              name="comments"
              placeholder="Comments or Questions"
              rows={4}
              className="w-full px-4 py-3 bg-black-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonpurple-400"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-800 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </main>
  );
}
