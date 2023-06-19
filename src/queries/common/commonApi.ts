import { Method } from "axios";
import { request } from "../axiosInstance";

// 공통코드 조회 (GET)
export const getCommonCodeList = () => {
  return request({ method: "GET" as Method, url: `/v1/system/common-code/codes` });
};
