// *************************
// 설문답변 보기 => GETSurvey

import { MonthRangeType } from "types/common";

// *************************
export interface GetSurveyType {
  id: string;
  name: string;
  survey: GetSurveyListType[];
}
export interface GetSurveyListType {
  result_id: number;
  answer: [];
}
export interface GetSurveyAnswerType {
  id: number;
  answered_item_id: number;
  content: string;
  question: GetSurveyAnswerQuestionType;
}
export interface GetSurveyAnswerQuestionType {
  content: string;
  type: string;
  unit: string | null;
  item: GetSurveyAnswerQuestionItemListType[];
}
export interface GetSurveyAnswerQuestionItemListType {
  id: number;
  order: number;
  content: string;
  score: number;
  image: string | null;
}

// 결과지 관련

export interface LanguageInfoType {
  activity_content: string;
  comment: string;
  importance: string;
  activity_image: string;
}

export interface DaycareResultResponseType {
  checklist: string[];
  child_id: number;
  child_name: string;
  language_info: LanguageInfoType;
  level_group: { [key: string]: { growth_category_id: number; growth_category_name: string }[] };
  list: CategoryListType[];
  month_level: DaycareMonthLevelType;
  test_result_id: number;
}

export interface DaycareMonthLevelType {
  content: string;
  month_end: number;
  month_level_id: number;
  month_start: number;
}

export interface CategoryListType {
  activity_content: string;
  comment: string;
  gap: number;
  growth_category_id: number;
  growth_category_name: string;
  level: "TTRL_LEVEL1" | "TTRL_LEVEL2" | "TTRL_LEVEL3";
  level_label: string;
  result_month_level: MonthRangeType;
  status: string;
  status_label: string;
  activity_image: string;
  importance: string;
}
