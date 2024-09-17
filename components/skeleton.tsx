"use client";
import React from "react";

// Define the properties for SkeletonLine
interface SkeletonLineProps {
  count: number;
}

// Reusable SkeletonLine component to represent a single line of the skeleton
const SkeletonLine: React.FC<SkeletonLineProps> = ({ count }) => (
  <div className="container flex items-baseline justify-between p-3 mx-auto space-x-1 animate-pulse sm:flex-row w-full">
    {Array.from({ length: count }).map((_, index) => (
      <p key={index} className="w-20 h-2 bg-gray-200 rounded-lg"></p>
    ))}
  </div>
);

// Main Skeleton component
const Skeleton: React.FC = () => {
  // Define the number of lines to be shown in the skeleton
  const lines = 7;

  return (
    <div className=" flex flex-col md:flex-row">
      <section className="container mx-auto p-10">
        {/* Table heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Currency List
        </h2>

        <div className="flex flex-col mt-6">
          {/* Responsive container for the table */}
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                {/* Render multiple SkeletonLine components */}
                {Array.from({ length: lines }).map((_, index) => (
                  <SkeletonLine key={index} count={4} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-10">
        {/* Table heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Golds List
        </h2>

        <div className="flex flex-col mt-6">
          {/* Responsive container for the table */}
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                {/* Render multiple SkeletonLine components */}
                {Array.from({ length: lines }).map((_, index) => (
                  <SkeletonLine key={index} count={4} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skeleton;
