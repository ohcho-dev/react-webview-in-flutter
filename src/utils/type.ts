export interface ApiErrorResponseType {
  message: string;
  code?: string;
  detail: { [key: string]: any };
}

export interface childType {
  id: Number;
  parent_id: Number;
  name: string;
  gender: string;
  birth_date: string;
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
