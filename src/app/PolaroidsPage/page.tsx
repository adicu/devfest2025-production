import Polaroids from "../components/Polaroids/Polaroids";

const judges = [
  {
    name: "judge 1",
    intro: "intro 1",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "judge 2",
    intro: "intro 2",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "judge 3",
    intro: "intro 3",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "judge 4",
    intro: "intro 4",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "judge 5",
    intro: "intro 5",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
];

const sponsors = [
  {
    name: "sponsor 1",
    intro: "intro 1",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "sponsor 2",
    intro: "intro 2",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "sponsor 3",
    intro: "intro 3",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "sponsor 4",
    intro: "intro 4",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
  },
  {
    name: "sponsor 5",
    intro: "intro 5",
    link: "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=",
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
      <div>
        <div className="text-2xl text-center">Sponsors</div>
        <div className="grid grid-cols-5 gap-10 p-5">
          {sponsors.map((sponsor, index) => (
            <Polaroids
              key={`sponsor-${index}`}
              name={sponsor.name}
              intro={sponsor.intro}
              link={sponsor.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
