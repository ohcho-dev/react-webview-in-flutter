import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../axiosInstance";
import { commonQueryKeys } from "./commonQueryKeys";

// 공통코드 조회 (GET)
export const getCommonCodeList = () => {
  return request({ method: "GET" as Method, url: `/v1/system/common-code/codes` });
};

const useCommonCodeList = () => {
  return useQuery(commonQueryKeys.commonCodeList, getCommonCodeList);
};

export default useCommonCodeList;
