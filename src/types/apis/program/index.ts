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

export interface QuestionnaireType {
  id: number;
  name: string;
  target_score: number;
  first_survey_id: number;
  survey: SurveyInfoType[];
}

export interface SurveyInfoType {
  id: number;
  name: string;
  order: number;
  question: QuestionType[];
}

export interface QuestionType {
  content: string;
  id: number;
  item: QuestionItemType[];
  order: number;
}

export interface SurveyResultQuestionType {
  content: string;
  answer_id: number;
  answered_item_id: number;
  question_item: QuestionItemType[];
}

export interface QuestionItemType {
  id: number;
  order: number;
  content: string;
  score: number;
  image: string | null;
}

export interface AnswerType {
  task_id: number;
  survey: SurveyAnswerType[];
}

export interface SurveyAnswerType {
  id: number;
  score: number;
  question: { id: number; item_id: number | null; content: string | null }[];
}
