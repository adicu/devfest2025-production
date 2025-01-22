type SponsorsProps = {
  name: string;
  link: string;
};

function Sponsors({ name, link }: SponsorsProps) {
  return (
    <div className="w-40">
      <div className="w-40 h-60 p-2.5 flex flex-col items-center">
        <div className="w-36 h-48 overflow-hidden flex flex-row items-center">
          <img src={link} />
        </div>
        <div className="mt-2 text-lg">{name}</div>
      </div>
    </div>
  );
}

export default Sponsors;
