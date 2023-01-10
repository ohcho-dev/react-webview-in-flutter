type getDateTimeFuncType = (date: string) => string;
type getDateFuncType = (date: string) => string;

const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
function pad(n: number) {
  return n < 10 ? "0" + n : n;
}
export const getDateTime: getDateTimeFuncType = date => {
  const d = new Date(date);
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}(${
    WEEKDAY[d.getDay()]
  }) ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export const getDate: getDateFuncType = date => {
  const d = new Date(date);
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
};
