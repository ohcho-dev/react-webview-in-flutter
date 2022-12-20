import { atom } from "recoil";

export const openChildSelectModalState = atom({
  key: "childSelectModal",
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


