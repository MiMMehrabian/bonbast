"use client";
import React from "react";

// Define the properties for SkeletonLine
interface SkeletonLineProps {
  count: number;
}

// Reusable SkeletonLine component to represent a single line of the skeleton
const SkeletonLine: React.FC<SkeletonLineProps> = ({ count }) => (
  <div className="container flex items-baseline justify-between p-6 mx-auto space-y-2 space-x-1 animate-pulse sm:flex-row w-full">
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
    <section className="bg-white container md:px-4 mx-auto">
      {/* Render multiple SkeletonLine components */}
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonLine key={index} count={4} />
      ))}
    </section>
  );
};

export default Skeleton;
