import { MonthRangeType } from "types/common";

export interface ClassDetailType {
  id: number;
  code: string;
  name: string;
  price: number;
  base_price: number;
  place_type: "CLPLT_ONLINE" | "CLPLT_OFFLINE";
  place_type_label: "온라인" | "오프라인";
  payment_type: "CLPYT_ONSITE" | "CLPYT_ONSITE";
  payment_type_label: "현장결제" | "바로결제";
  total_student: number;
  display_flag: number;
  register_start: string;
  register_end: string;
  class_datetime: string;
  total_session: number;
  location: string;
  latitude: number;
  longitude: number;
  apply_text: string;
  confirm_text: string;
  month_level: MonthRangeType[];
  main_image: string;
  content_image: string;
}
