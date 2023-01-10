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

export const getAlarmConfig = (param?: object) => {
  return request({
    method: "GET",
    url: "/v1/notification/config",
    params: param,
  });
};

export const updateAlarmConfig = (body: {
  type: string | undefined;
  value: number | undefined;
}) => {
  return request({ method: "PUT", url: `/v1/notification/config`, data: body });
};
