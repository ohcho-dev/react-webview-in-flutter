import { atom } from "recoil";
import { HomeDataResponseType } from "types/apis/home";
import { commonAtomKeys } from "./commonAtomKeys";

export const commonCodeState = atom({
  key: commonAtomKeys.commonCodeList,
  default: {},
});

export const openBottomModalState = atom({
  key: commonAtomKeys.bottomModal,
  default: false,
});

export const selectedChildInfoState = atom({
  key: commonAtomKeys.selectedChild,
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

export const selectedHomeDataState = atom<HomeDataResponseType>({
  key: commonAtomKeys.selectedHomeData,
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
  key: commonAtomKeys.childrenList,
  default: [] as any,
});

export const childrenKeyState = atom({
  key: commonAtomKeys.childrenKey,
  default: "",
});

export const visibleShareState = atom({
  key: commonAtomKeys.visibleShare,
  default: false,
});

export const mainPageScrollValueState = atom({
  key: commonAtomKeys.mainPageScrollValue,
  default: 0,
});

export const newNotificationFlagstate = atom({
  key: commonAtomKeys.newNotificationFlag,
  default: false,
});
