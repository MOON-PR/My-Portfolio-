'use client'; // Ensure this is a client-side component

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to sections
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adds slight offset so it's not hidden under navbar
        behavior: 'smooth', // Smooth scroll
      });
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Muhammad Ibrahim</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <button
              onClick={() => handleScroll('Skills')}
              className="hover:text-[#edcc56]"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('About')}
              className="hover:text-[#edcc56]"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('Contacts')}
              className="hover:text-[#edcc56]"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black text-white p-4 space-y-4 lg:hidden">
            <button
              onClick={() => handleScroll('Skills')}
              className="hover:text-[#edcc56]"
            >
              Skills
            </button>
            <button
              onClick={() => handleScroll('About')}
              className="hover:text-[#edcc56]"
            >
              About
            </button>
            <button
              onClick={() => handleScroll('Contacts')}
              className="hover:text-[#edcc56]"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
