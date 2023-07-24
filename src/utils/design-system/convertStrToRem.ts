export const convertStrToRem = (str: string) => {
  return `${parseInt(str) / 10}rem`;
};

export const convertNumToRem = (num: number) => {
  return `${num / 10}rem`;
};

export const convertStrToRemForPadding = (str: string) => {
  const regex = /\d+/g;
  const matches = str.match(regex);
  if (!matches) return null;
  return `${convertStrToRem(matches[0])} ${convertStrToRem(matches[1])}`;
};
