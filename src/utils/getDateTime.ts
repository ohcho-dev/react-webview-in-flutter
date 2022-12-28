type getDateTimeFuncType = (date: string) => string;

const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
export const getDateTime: getDateTimeFuncType = date => {
  function pad(n: number) {
    return n < 10 ? "0" + n : n;
  }
  const d = new Date(date);
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}(${
    WEEKDAY[d.getDay()]
  }) ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
