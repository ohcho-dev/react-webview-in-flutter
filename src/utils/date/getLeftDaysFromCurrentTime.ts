type getLeftDaysFuncType = (endDate: string) => number;

export const getLeftDaysFromCurrentTime: getLeftDaysFuncType = endDate => {
  const now: number = new Date().getTime();
  const date: number = new Date(endDate).getTime();
  const diff: number = (date - now) / (1000 * 3600 * 24);

  return Math.floor(Math.abs(diff));
};
