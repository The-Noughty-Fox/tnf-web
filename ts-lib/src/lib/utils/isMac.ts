export const isMac = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return (navigator.userAgentData.platform || navigator.platform).includes(
    'Mac'
  );
};
