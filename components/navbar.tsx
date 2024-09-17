"use client";
import React, { useState } from "react";
import Link from "next/link";

import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="relative w-full bg-white shadow-md">
      <div className="container mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        {/* Brand Logo / Home Link */}
        <div className="flex-1">
          <Link href="/" className="text-black text-xl font-bold">
            BonBast
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4">
          {["Home", "Archive", "Graph", "API"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <IoCloseOutline size={40} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-16 z-20 bg-white px-6 py-4 transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {["Home", "Archive", "Graph", "API"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)} // Close the menu on item click
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
