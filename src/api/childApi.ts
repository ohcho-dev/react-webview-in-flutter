import { JsonObjectExpression } from "typescript";
import { request } from ".";
import { childType } from "../utils/type";

export const getChildrenList = (param?: object) => {
  return request({
    method: "GET",
    url: "/v1/children",
    params: param,
  });
};

export const getSelectedChild = (id: string | undefined) => {
  return request({ method: "GET", url: `/v1/children/${id}` });
};

export const createChild = (data: object) => {
  return request({ method: "POST", url: "/v1/children", data });
};

export const updateChild = (body: {
  id?: string;
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date?: string;
}) => {
  return request({ method: "PUT", url: `/v1/children/${body.id}`, data: body });
};
