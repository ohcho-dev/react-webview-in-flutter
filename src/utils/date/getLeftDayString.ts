export const getLeftDayString = (leftDays: number): string => {
  if (leftDays > 0) return `${leftDays}일 남음`;
  if (leftDays === 0) return "오늘까지!";
  return "";
};
