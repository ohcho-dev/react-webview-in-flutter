import { request } from ".";

export const getPurchaseCoaching = (param?: object) => {
  return request({
    method: "GET",
    url: "/v1/purchase/coaching",
    params: param,
  });
};

export const getPurchaseClasses = (param?: object) => {
  return request({
    method: "GET",
    url: "/v1/purchase/classes",
    params: param,
  });
};
