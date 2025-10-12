'use client';

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center relative w-fit mx-auto">
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></span>
    </h2>
  );
}