import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const ClosedMenu = () => (
    <button onClick={toggleMenu} className="fixed top-5 left-5 flex items-center border-white border rounded py-1 px-5">
      <span className="text-2xl font-semibold text-white">
        MENU
      </span>
    </button>
  );

  const OpenMenu = () => (
    <div className="z-50 fixed inset-0 bg-sky-100 p-8 animate-slideInFromTop">
      <div className="flex justify-between items-center mb-12">
        <button onClick={toggleMenu} className="flex items-center border-black border rounded py-1 px-5">
          <span className="text-2xl font-semibold text-gray-950">
            CLOSE
          </span>
        </button>
      </div>

      <div className="flex mb-12 animate-fadeInFast animation-delay-250">
        <a href="https://github.com/KevinDsouza03" target="_blank" rel="noopener noreferrer" className="mr-6">
          <img src="/github.png" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/kevindsouza03/" target="_blank" rel="noopener noreferrer" className="mr-6">
          <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        {/* Add more social icons as needed */}
      </div>

      <nav className="space-y-12 flex flex-col justify-between ">
        <div className="flex items-center py-4 align-baseline animate-fadeInFast animation-delay-200">
          <Link href="/" className="text-6xl font-bold text-indigo-900 hover:text-indigo-700 mr-8 max-w-80 w-full">
            Home
          </Link>
          <p className="ml-4 text-lg text-gray-600">Back to the home page.</p>
        </div>

        <div className="flex items-center py-4 align-bottom animate-fadeInFast animation-delay-150" >
          <Link href="/CV" className="text-6xl font-bold text-indigo-900 hover:text-indigo-700 mr-8 max-w-80 w-full">
            Resume
          </Link>
          <p className="ml-4 text-lg  text-gray-600">To my Resume</p>
        </div>

          {/* Add more menu items as needed */}
        </nav>
      </div>
  );

  return isOpen ? <OpenMenu /> : <ClosedMenu />;
}