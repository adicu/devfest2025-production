type SponsorsProps = {
  link: string;
};

function Sponsors({ link }: SponsorsProps) {
  return (
    <div className="w-40">
      <div className="w-40 h-40 p-2.5 flex flex-col items-center">
        <div className="w-36 h-48 overflow-hidden flex flex-row items-center">
          <img src={link} />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
