import { atom } from "recoil";

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
  default: [],
});

export const useShareState = atom({
  key: "share",
  default: false,
});

export const questionnarieState = atom({
  key: "questionnaire",
  default: [],
});

export const mainPageScrollValueState = atom({
  key: "mainPageScrollValue",
  default: 0,
});
