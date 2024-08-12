import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const ClosedMenu = () => (
    <button onClick={toggleMenu}  className="fixed top-5 left-5 flex items-center border-white border rounded py-1 px-5 ">
      <span className="text-2xl font-semibold text-white">
        MENU
      </span>
    </button>
  );

  const OpenMenu = () => (
    <div className="fixed inset-0 bg-sky-100 p-8">
      <button onClick={toggleMenu}  className="flex justify-between items-center mb-8 border-black border rounded py-1 px-5">
          <span className="text-2xl font-semibold text-gray-950">
            CLOSE
          </span>
      </button>

      <div className="flex mb-8 animate-slideInFromRight ">
        <a href="https://github.com/KevinDsouza03" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="/github.png" alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/kevindsouza03/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
        {/* Add more social icons as needed */}
      </div>

      <nav className="space-y-8">
        <div className="flex items-center">
          <Link href="/" className="text-4xl font-bold text-indigo-900 hover:text-indigo-700 w-32">
            Home
          </Link>
          <span className="text-sm text-gray-600 ml-8">Back to the home page.</span>
        </div>

        <div className="flex items-center">
          <Link href="/CV" className="text-4xl font-bold text-indigo-900 hover:text-indigo-700 w-32">
            Resume
          </Link>
          <span className="text-sm text-gray-600 ml-8">To my resume.</span>
        </div>

        {/* Add more menu items as needed */}
      </nav>
    </div>
  );

  return isOpen ? <OpenMenu /> : <ClosedMenu />;
}