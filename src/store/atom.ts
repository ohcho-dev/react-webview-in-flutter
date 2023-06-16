import { atom } from "recoil";
import { AnswerType, HomeData, PostSurveyQuestionListType, ViewSurveyType } from "../utils/type";

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
    image: "",
    name: "",
    parent_id: 0,
    premature_flag: 0,
    gender: "",
    due_date: "",
    birth_date: "",
    birth_modifiable: true,
  },
});
export const selectedHomeDataState = atom<HomeData>({
  key: "selectedHomeData",
  default: {
    birth_date: "",
    days_from_birth: 0,
    image: "",
    month_level_content: [],
    month_level_info: [],
    name: "",
  },
});

export const childrenListState = atom({
  key: "childrenList",
  default: [] as any,
});

export const childrenKeyState = atom({
  key: "childrenKey",
  default: "",
});

export const useShareState = atom({
  key: "share",
  default: false,
});

export const questionnarieState = atom<ViewSurveyType>({
  key: "questionnaire",
  default: { id: 0, name: "", target_score: 0, start_survey_id: 0, survey: [] },
});

export const surveyAnswerState = atom<AnswerType>({
  key: "surveyAnswer",
  default: { task_id: 0, survey: [] },
});

export const surveyTempAnswerState = atom<PostSurveyQuestionListType[]>({
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

// 새로운 알람 플래그
export const newNotificationFlagstate = atom({
  key: "newNotificationFlag",
  default: false,
});

// task id 저장
export const currentTaskIdState = atom({
  key: "currentTaskId",
  default: "",
});

// current survey id
export const currentSurveyInfoState = atom({
  key: "currentSurveyId",
  default: { taskId: "", coachingId: "" },
});
