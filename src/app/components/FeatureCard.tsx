'use client';
import React from 'react';

type FeatureCardProps = {
 title: string;
 desc: React.ReactNode;
 icon: string;
 href: string;
 image: string;
};

export default function FeatureCard({ title, desc, icon, href, image }: FeatureCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-between">
        <div>
          <img src={icon} alt="" className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="text-gray-300 mt-2">{desc}</div>
        </div>
        <p className="text-purple-400 mt-4">View →</p>
      </div>
    </a>
  );
}
