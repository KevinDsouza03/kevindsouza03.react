"use client";

import Navbar from '../Navbar/Navbar';

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#1A2421] p-5">
      <Navbar />
      <div className="mt-12">
        {children}
      </div>
    </div>
  );
}