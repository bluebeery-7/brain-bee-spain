'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { title: 'Home', href: '#home' },
    { title: 'How it Works', href: '#howitworks' },
    { title: 'Topics', href: '#topics' },
    { title: 'Coming Soon', href: '#comingsoon' },
    { title: 'Resources', href: '#resources' },
    { title: 'Get in Touch', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">Brain Bee España</a>
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gray-100 transition">{l.title}</a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block py-2 text-white hover:text-gray-200">{l.title}</a>
          ))}
        </div>
      )}
    </nav>

  );
}
