export interface ChildType {
  id: number;
  image: string;
  parent_id: number;
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date: string;
  birth_modifiable: boolean;
}

export interface MonthRangeType {
  month_start: number;
  month_end: number;
}

export interface AlarmType {
  type: string;
  type_label: string;
  value: number;
  newData?: boolean;
}

export interface NotificationType {
  id: number;
  parent_id: number;
  type: string;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  detail: { [key: string]: any };
}
