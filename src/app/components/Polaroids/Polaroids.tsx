"use client";

import React, { useState } from "react";

type PolaroidsProps = {
  name: string;
  intro: string; // judge intro on the back of the polaroid
  link: string;
};

function Polaroids({ name, intro, link }: PolaroidsProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="aspect-[2/3] w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of the polaroid */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-zinc-400 w-full h-full p-2 flex flex-col items-center">
            <div className="w-full h-[80%] overflow-hidden">
              <img
                src={link}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-center">{name}</div>
          </div>
        </div>

        {/* Back of the polaroid */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-zinc-400 w-full h-full p-4 flex items-center justify-center text-center">
            <p className="text-sm">{intro}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polaroids;
