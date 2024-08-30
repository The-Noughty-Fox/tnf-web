import clsx from 'clsx';

type DomainProps = {
  domain: string;
  theme: {
    twDomainIndicatorColor: string;
    twDomainTextColor: string;
  };
};

export const Domain = ({ domain, theme }: DomainProps) => {
  const classes = clsx('flex items-center gap-1', theme.twDomainTextColor);
  const indicatorClasses = clsx(
    theme.twDomainIndicatorColor,
    'w-2 h-2 md:w-3 md:h-3 rounded-full'
  );
  return (
    <div className={classes}>
      <div className={indicatorClasses}></div>
      <div className="text-16*24 font-semibold leading-1">{domain}</div>
    </div>
  );
};
