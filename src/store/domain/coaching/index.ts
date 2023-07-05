import { atom } from "recoil";
import { AnswerType } from "../../../types/apis/program";
import { PostSurveyQuestionListType, ViewSurveyType } from "../../../types/domain/coaching";
import { coachingAtomKeys } from "./coachingAtomKeys";

export const questionnarieState = atom<ViewSurveyType>({
  key: coachingAtomKeys.questionnaire,
  default: { id: 0, name: "", target_score: 0, start_survey_id: 0, survey: [] },
});

export const surveyAnswerState = atom<AnswerType>({
  key: coachingAtomKeys.surveyAnswer,
  default: { task_id: 0, survey: [] },
});

export const surveyTempAnswerState = atom<PostSurveyQuestionListType[]>({
  key: coachingAtomKeys.surveyTempAnswer,
  default: [],
});

export const surveyCoachingIdState = atom({
  key: coachingAtomKeys.surveyCoachingId,
  default: "",
});

export const startQuestionOrderNumState = atom({
  key: coachingAtomKeys.startQuestionOrderNum,
  default: 0,
});

export const currentTaskIdState = atom({
  key: coachingAtomKeys.currentTaskId,
  default: "",
});

// current survey id
export const currentSurveyInfoState = atom({
  key: coachingAtomKeys.currentSurveyId,
  default: { taskId: "", coachingId: "" },
});

export const selectedCategoryIdState = atom({
  key: coachingAtomKeys.selectedCategoryId,
  default: 0,
});
