import { AxiosResponse, Method } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { CommonCodeItemType } from "types/apis/common";
import { request } from "../axiosInstance";
import { commonQueryKeys } from "./commonQueryKeys";

// 공통코드 조회 (GET)
export const getCommonCodeList = async () => {
  const { data }: AxiosResponse<CommonCodeItemType[]> = await request({
    method: "GET" as Method,
    url: `/v1/system/common-code/codes`,
  });
  return data;
};

const useCommonCodeList = () => {
  return useQuery(commonQueryKeys.commonCodeList, getCommonCodeList);
};

export default useCommonCodeList;
