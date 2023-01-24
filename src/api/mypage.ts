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

export const getNoticeList = (param?: object) => {
  return request({
    method: "GET",
    url: "/v1/notice",
    params: param,
  });
};

export const getNoticeDetail = (id: string | undefined) => {
  return request({
    method: "GET",
    url: `/v1/notice/${id}`,
  });
};

export const Withdrawal = () => {
  return request({
    method: "DELETE",
    url: "/v1/auth/withdraw",
  });
};

export const getUserInfo = () => {
  return request({
    method: "POST",
    url: "v1/auth/me",
  });
};
