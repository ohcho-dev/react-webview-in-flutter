import { request } from ".";

export const getLoginDev = () => {
  return request({ method: "POST", url: `/v1/auth/temp-auth` });
};