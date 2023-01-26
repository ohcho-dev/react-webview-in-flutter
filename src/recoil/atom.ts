import { atom } from "recoil";
import { AnswerType, QuestionnaireType } from "../utils/type";

export const commonCodeState = atom({
  key: "commonCodeList",
  default: {},
});

export const openBottomModalState = atom({
  key: "bottomModal",
  default: false,
});

export const selectedChildInfoState = atom({
  key: "selectedChild",
  default: {
    id: 0,
    name: "",
    parent_id: 0,
    premature_flag: 0,
    gender: "",
    due_date: "",
    birth_date: "",
  },
});

export const childrenListState = atom({
  key: "childrenList",
  default: [] as any,
});

export const useShareState = atom({
  key: "share",
  default: false,
});

export const questionnarieState = atom<QuestionnaireType>({
  key: "questionnaire",
  default: { id: 0, name: "", target_score: 0, first_survey_id: 0, survey: [] },
});

export const surveyAnswerState = atom<AnswerType>({
  key: "surveyAnswer",
  default: { task_id: 0, survey: [] },
});

export const surveyTempAnswerState = atom<{ id: number; score: number; item_id: number }[]>({
  key: "surveyTempAnswer",
  default: [],
});

export const surveyCoachingIdState = atom({
  key: "surveyCoachingId",
  default: "",
});

export const startQuestionOrderNumState = atom({
  key: "startQuestionOrderNum",
  default: 0,
});

export const mainPageScrollValueState = atom({
  key: "mainPageScrollValue",
  default: 0,
});
