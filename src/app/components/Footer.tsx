'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-6 text-center">
        <p>© {new Date().getFullYear()} Brain Bee España</p>
        <div className="space-x-4">
          <a href="#howitworks" className="hover:text-white">How it works</a>
          <a href="#topics" className="hover:text-white">Topics</a>
          <a href="#comingsoon" className="hover:text-white">Coming Soon</a>
          <a href="#resources" className="hover:text-white">Resources</a>
          <a href="#contact" className="hover:text-white">Get in touch</a>
        </div>
      </div>
    </footer>
  );
}
