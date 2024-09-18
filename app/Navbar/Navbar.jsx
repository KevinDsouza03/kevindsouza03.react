import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const MenuButton = ({ onClick, text }) => (
    <button 
      onClick={onClick} 
      className="fixed top-5 left-5 z-50 flex items-center border-2 border-current rounded py-2 px-4 transition-colors duration-300 ease-in-out"
    >
      <span className="text-xl font-semibold">
        {text}
      </span>
    </button>
  );

  const MenuItem = ({ href, text, description }) => (
    <div className="py-4">
      <Link href={href} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors duration-300 ease-in-out">
        {text}
      </Link>
      <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">{description}</p>
    </div>
  );

  return (
    <>
      {!isOpen && <MenuButton onClick={toggleMenu} text="MENU" />}
      
      {isOpen && (
        <div className="fixed inset-0 bg-sky-100 p-8 z-50 overflow-y-auto animate-slideInFromTop">
          <MenuButton onClick={toggleMenu} text="CLOSE" />
          
          <div className="mt-16 space-y-8">
            <div className="flex space-x-4">
              <a href="https://github.com/KevinDsouza03" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/kevindsouza03/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>

            <nav className="space-y-8">
              <MenuItem href="/" text="Home" description="Back to the home page." />
              <MenuItem href="/CV" text="Resume" description="View my resume." />
              <MenuItem href="/Contact" text="Contact" description="Get in touch with me." />
            </nav>
          </div>
        </div>
      )}
    </>
  );
}