import { request } from ".";

export const getHomeData = (param?: object) => {
  return request({
    method: "GET",
    url: "/v1/home",
    params: param,
  });
};
