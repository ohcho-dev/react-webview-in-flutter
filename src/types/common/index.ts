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
  group_modifiable: boolean;
  group_name: string;
  has_organization: boolean;
  organization_name: string;
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
  type: "NTCH_RESULT_PAPER" | "NTCH_VIDEO_REJECT" | "NTCH_DATE_END" | "NTCH_TASK_REMIND";
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  detail: NotificationDetailType | null;
}

export interface NotificationDetailType {
  task_id: number;
  coaching_id: number;
  test_id: number;
  paper_url: string;
  paper_type: "TTPTY_EXTERNAL_URL" | "TTPTY_INTERNAL_PAGE";
}

export interface OptionType {
  name: string;
  value: string | number;
}
