"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow">
      <div className="container px-6 md:px-14 py-4 mx-auto">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex-1">
            <Link href={"/"} className="text-black">
              BonBast
            </Link>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:mx-6">
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Archive
            </Link>
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Graph
            </Link>
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              API
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsShow(!isShow)}
              type="button"
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            >
              {!isShow && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}

              {isShow && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 top-16 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 ${
            isShow
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Archive
            </Link>
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Graph
            </Link>
            <Link
              href={"/"}
              className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              API
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
