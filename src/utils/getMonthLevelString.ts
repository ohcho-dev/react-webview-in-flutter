type getMonthLevelFuncType = (month_level_arr: MonthRangeType[]) => string;
type MonthRangeType = {
  month_start: number;
  month_end: number;
};

export const getMonthLevelString: getMonthLevelFuncType = arr => {
  let str: string = "";
  arr.map(
    (month: MonthRangeType, index: number) =>
      (str += `${month.month_start}~${month.month_end}${index === arr.length - 1 ? "개월" : ","}`),
  );

  return str;
};
