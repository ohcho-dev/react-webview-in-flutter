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
