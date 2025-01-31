// components/Polaroids/Polaroids.tsx
"use client";

import React, { useState } from "react";

type PolaroidsProps = {
  name: string;
  title: string; // Added title field
  intro: string; // Judge intro on the back of the polaroid
  link: string;
};

function Polaroids({ name, title, intro, link }: PolaroidsProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer perspective-1000 overflow-hidden"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full aspect-[2/3] duration-500 preserve-3d transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of the Polaroid */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-zinc-400 p-2 flex flex-col items-center">
            {/* Image */}
            <div className="w-full h-4/5 overflow-hidden bg-white">
              <img
                src={link}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Name & Title Text */}
            <div className="mt-2 text-sm md:text-base lg:text-lg text-center break-words">
              <div className="font-bold">{name}</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-700">
                {title}
              </div>
            </div>
          </div>
        </div>

        {/* Back of the Polaroid */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-zinc-400 p-3 flex text-center overflow-y-scroll">
            <p>{intro}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polaroids;
