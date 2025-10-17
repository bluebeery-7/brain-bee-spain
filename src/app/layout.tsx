// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: 'Brain Bee España',
  description: 'Spanish Neuroscience Competition for Teens',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}