export interface applyClassBodyType {
  class_id: string;
  child_id: string;
  parent_name: string;
  parent_phone: string;
}
export interface applyCoachingBodyType {
  coaching_id: string;
  child_id: string;
  parent_name: string;
  parent_phone: string;
  payment_method: string;
}

export interface MonthRangeType {
  month_start: number;
  month_end: number;
}

export interface appliedCoachingType {
  coaching_name: string;
  end_date: string;
  id: number;
  main_image: string;
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

export interface QuestionnaireType {
  id: number;
  name: string;
  target_score: number;
  first_survey_id: number;
  survey: SurveyInfoType[];
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

export interface CoachingStatusType {
  id: number;
  name: string;
  status: string;
  status_label: string | null;
  paper_url: string;
}

export interface TaskStatusType extends CoachingStatusType {
  task_type: string;
  task_type_label: string;
}

export interface DetailCoachingType {
  date_remain: number;
  end_date: string;
  id: number;
  name: string;
  result_paper: CoachingStatusType[];
  status: string;
  status_label: string;
  task: TaskStatusType[];
}

export interface VideoAssignmentResultType {
  admin_comment: string[];
  days_from_birth: number;
  id: number;
  name: string;
  status: string;
  status_label: string;
  video: string;
  video_at: string;
}

export interface HomeData {
  birth_date: string;
  days_from_birth: number;
  image: string;
  month_level_content: MonthContent[];
  month_level_info: string[];
  name: string;
}

export interface MonthContent {
  id: number;
  image: string;
  subject: string;
  url: string;
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

export interface SelectBtnArrayType {
  id: number;
  name: string;
  function?: () => void;
}

// *************************
// 설문지 보기 => ViewSurvey
// *************************
export interface ViewSurveyType {
  id: number;
  name: string;
  target_score: number;
  start_survey_id: number;
  survey: ViewSurveyListType[];
}
export interface ViewSurveyListType {
  id: number;
  name: string;
  order: number;
  question: ViewSurveyQuestionListType[];
}
export interface ViewSurveyQuestionListType {
  id: number;
  content: string;
  order: string;
  type: string;
  unit: string | null;
  item: ViewSurveyQuestionItemListType[];
}
export interface ViewSurveyQuestionItemListType {
  id: number;
  order: number;
  content: string;
  score: number;
  image: string | null;
}

// *************************
// 설문답변 보기 => GETSurvey
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

// *************************
// 설문답변 저장 => PostSurvey
// *************************

export interface PostSurveyQuestionListType {
  id: number;
  score?: number;
  item_id: number | null;
  content: string | null;
}
