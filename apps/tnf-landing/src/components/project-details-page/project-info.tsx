type ProjectInfoProps = {
  infoTitle: string;
  infoDescription: string;
  infoItems: { label: string; value: string }[];
};

export const ProjectInfo = ({
  infoTitle,
  infoDescription,
  infoItems,
}: ProjectInfoProps) => {
  return (
    <div className="flex flex-col gap-12 lg:flex-row items-start">
      <div className="lg:shrink-0 lg:basis-[475px]">
        <div className="text-h3 leading-1.15">{infoTitle}</div>
        <div className="text-body mt-3.5">{infoDescription}</div>
      </div>
      <div className="justify-between md:justify-normal flex items-start gap-x-12 gap-y-12 md:gap-x-4 md:gap-y-12 lg:gap-y-30 *:grow-1 *:basis-[200px] md:*:basis-[30%] flex-wrap">
        {infoItems.map(({ label, value }) => (
          <div key={label}>
            <div className="text-h4 text-primary leading-1">{label}:</div>
            <div className="text-h6 leading-1 text-white mt-4">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
