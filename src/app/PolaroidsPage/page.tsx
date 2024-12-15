// pages/PolaroidsPage.tsx
"use client";

import React from "react";
import Polaroids from "../components/Polaroids/Polaroids";

const judges = [
  {
    name: "Judge 1",
    intro: "Introduction for Judge 1.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 2",
    intro: "Introduction for Judge 2.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 3",
    intro: "Introduction for Judge 3.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 4",
    intro: "Introduction for Judge 4.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 5",
    intro: "Introduction for Judge 5.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
];

const sponsors = [
  {
    name: "Sponsor 1",
    intro: "Introduction for Sponsor 1.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Sponsor 2",
    intro: "Introduction for Sponsor 2.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Sponsor 3",
    intro: "Introduction for Sponsor 3.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Sponsor 4",
    intro: "Introduction for Sponsor 4.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Sponsor 5",
    intro: "Introduction for Sponsor 5.",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
];

export default function PolaroidsPage() {
  return (
    <div className="p-8 space-y-10">
      {/* Judges Section */}
      <div>
        <h2 className="text-2xl text-center mb-5">Judges</h2>
        <div className="grid grid-cols-5 gap-4 w-full">
          {judges.map((judge, index) => (
            <div key={`judge-${index}`} className="p-2 min-w-[120px]">
              <Polaroids
                name={judge.name}
                intro={judge.intro}
                link={judge.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sponsors Section */}
      <div>
        <h2 className="text-2xl text-center mb-5">Sponsors</h2>
        <div className="grid grid-cols-5 gap-4 w-full">
          {sponsors.map((sponsor, index) => (
            <div key={`sponsor-${index}`} className="p-2 min-w-[120px]">
              <Polaroids
                name={sponsor.name}
                intro={sponsor.intro}
                link={sponsor.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
