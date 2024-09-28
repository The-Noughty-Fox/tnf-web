export const isMac = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return (navigator.platform || navigator.userAgentData.platform).includes(
    'Mac'
  );
};
