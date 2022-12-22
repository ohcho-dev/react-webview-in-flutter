import { atom } from "recoil";

let openBottomModalState = atom({
  key: "bottomModal",
  default: false,
});

let selectedChildInfoState = atom({
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

let childrenListState = atom({
  key: "childrenList",
  default: [],
});

let useShareState = atom({
  key: "share",
  default: false,
});

export { openBottomModalState, selectedChildInfoState, childrenListState, useShareState };
