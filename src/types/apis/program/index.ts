import { MonthRangeType } from "../../common";

export interface ApplyClassBodyType {
  class_id: string;
  child_id: string;
  parent_name: string;
  parent_phone: string;
}

export interface ApplyCoachingBodyType {
  coaching_id: string;
  child_id: string;
  parent_name: string;
  parent_phone: string;
  payment_method: string;
}

export interface AppliedCoachingType {
  coaching_name: string;
  end_date: string;
  id: number;
  main_image: string;
  month_level: MonthRangeType[] | MonthRangeType;
  start_date: string;
  status: string;
  status_label: string;
}
