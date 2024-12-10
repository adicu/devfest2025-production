"use client";

import React, { useState } from "react";

type PolaroidsProps = {
  name: string;
  intro: string; //judge intro on the back of the polaroid
  link: string;
};

function Polaroids({ name, intro, link }: PolaroidsProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-40 h-60 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`w-full h-full relative duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* front of the polaroid */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-zinc-400 w-40 h-60 p-2.5 flex flex-col items-center">
            <div className="w-36 h-48 overflow-hidden">
              <img src={link} />
            </div>
            <div className="mt-2">{name}</div>
          </div>
        </div>

        {/* back of the polaroid */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-zinc-400 w-40 h-60 p-4 flex items-center justify-center text-center">
            <p className="text-sm">{intro}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polaroids;
