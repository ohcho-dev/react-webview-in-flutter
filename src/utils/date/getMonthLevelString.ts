import { MonthRangeType } from "../../types/common";

type getMonthLevelFuncType = (month_level_arr: MonthRangeType[] | MonthRangeType) => string;

export const getMonthLevelString: getMonthLevelFuncType = obj => {
  let str = "";

  if (!Array.isArray(obj)) {
    return `${obj.month_start}~${obj.month_end}개월`;
  }

  if (!obj.length) {
    return "전체연령";
  }

  obj.map(
    (month: MonthRangeType, index: number) =>
      (str += `${month.month_start}~${month.month_end}${index === obj.length - 1 ? "개월" : ","}`),
  );

  return str;
};
