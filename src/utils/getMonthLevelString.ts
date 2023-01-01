type getMonthLevelFuncType = (month_level_arr: MonthRangeType[] | MonthRangeType) => string;
type MonthRangeType = {
  month_start: number;
  month_end: number;
};

export const getMonthLevelString: getMonthLevelFuncType = obj => {
  let str: string = "";
  if (Array.isArray(obj)) {
    obj.map(
      (month: MonthRangeType, index: number) =>
        (str += `${month.month_start}~${month.month_end}${
          index === obj.length - 1 ? "개월" : ","
        }`),
    );
  } else {
    str = `${obj.month_start}~${obj.month_end}개월`;
  }

  return str;
};
