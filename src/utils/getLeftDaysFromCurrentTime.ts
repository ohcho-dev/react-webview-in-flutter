type getLeftDaysFuncType = (endDate: string) => number;

export const getLeftDaysFromCurrentTime: getLeftDaysFuncType = endDate => {
  let now: number = new Date().getTime();
  let date: number = new Date(endDate).getTime();
  let diff: number = (date - now) / (1000 * 3600 * 24);

  return Math.floor(Math.abs(diff));
};
