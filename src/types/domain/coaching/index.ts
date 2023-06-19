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
// 설문답변 저장 => PostSurvey
// *************************

export interface PostSurveyQuestionListType {
  id: number;
  score?: number;
  item_id: number | null;
  content: string | null;
}
