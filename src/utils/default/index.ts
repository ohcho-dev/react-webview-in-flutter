import dayjs from "dayjs";
import { CreateChildObjType } from "types/domain/my";

export const DEFAULT_CHILD_VALUE = {
  id: 0,
  name: "",
  gender: "F",
  birth_date: dayjs(new Date()).format("YYYY-MM-DD"),
  premature_flag: 0,
  due_date: "",
  image: "",
  parent_id: 0,
  birth_modifiable: false,
};

export const DEFAULT_CREATE_CHILD_VALUE: CreateChildObjType = {
  name: "",
  gender: "F",
  birth_date: dayjs(new Date()).format("YYYY-MM-DD"),
  premature_flag: 0,
  due_date: "",
};
