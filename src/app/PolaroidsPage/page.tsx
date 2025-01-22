import Polaroids from "../components/Polaroids/Polaroids";
import Sponsors from "../components/Polaroids/Sponsors";

const judges = [
  {
    name: "Judge 1",
    intro: "Introduction to Judge 1",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 2",
    intro: "Introduction to Judge 2",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 3",
    intro: "Introduction to Judge 3",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 4",
    intro: "Introduction to Judge 4",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "Judge 5",
    intro: "Introduction to Judge 5",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
];

const sponsors = [
  {
    name: "Warp",
    intro: "intro 1",
    link: "/warp-logo.png",
  },
  {
    name: "Modal Labs",
    intro: "intro 2",
    link: "modal-logo.png",
  },
  {
    name: "Jane Street",
    intro: "intro 3",
    link: "/jane-street-logo.png",
  },
  {
    name: "Groq",
    intro: "intro 4",
    link: "/groq-logo.png",
  },
  {
    name: "Anote",
    intro: "intro 5",
    link: "anote-logo.png",
  },
];

export default function PolaroidsPage() {
  return (
    <div className="p-8">
      <div>
        <div className="text-2xl text-center">Judges</div>
        <div className="grid grid-cols-5 gap-10 p-5 justify-center">
          {judges.map((judge, index) => (
            <Polaroids
              key={`judge-${index}`}
              name={judge.name}
              intro={judge.intro}
              link={judge.link}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl text-center">Sponsors</div>
        <div className="mt-4 grid grid-cols-5 gap-10 p-5">
          {sponsors.map((sponsor, index) => (
            <Sponsors
              key={`sponsor-${index}`}
              name={sponsor.name}
              link={sponsor.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
