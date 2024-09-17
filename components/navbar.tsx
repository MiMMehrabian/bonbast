import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="relative w-full bg-white shadow-md">
      <div className="container mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="text-black text-xl font-bold">
            BonBast
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href={`/login`}
            className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
