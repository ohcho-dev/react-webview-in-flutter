export interface ApiErrorResponseType {
  message: string;
  code?: string;
  detail: { [key: string]: any };
}

export interface childType {
  id: Number;
  parent_id?: Number;
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date?: string;
}

export interface createChildType {
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date?: string;
}

export interface coachingType {
  base_price: number;
  code: string;
  content_image: string;
  counsel_flag: number;
  created_at: string;
  display_flag: number;
  id: number;
  main_image: string;
  name: string;
  price: number;
  updated_at: string;
  valid_day: number;
}

export interface applyClassBodyType {
  class_id: string;
  child_id: string;
  parent_name: string;
  parent_phone: string;
}

export interface MonthRangeType {
  month_start: number;
  month_end: number;
}

export interface appliedCoachingType {
  coaching_name: string;
  end_date: string;
  id: number;
  main_image: string | null;
  month_level: MonthRangeType[] | MonthRangeType;
  start_date: string;
  status: string;
  status_label: string;
}

export interface alarmType {
  type: string;
  type_label: string;
  value: number;
  newData?: boolean;
}
