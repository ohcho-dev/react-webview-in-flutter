import { Method } from "axios";
import { request } from "queries/axiosInstance";
import { useQuery } from "react-query";
import { programQueryKeys } from "./programQueryKeys";

// 코칭 상품 조회 (GET)
const getSelectedCoachingInfo = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/program/coaching/${id}` });
};

const useSelectedCoachingInfo = (id: string | undefined) => {
  return useQuery(programQueryKeys.selectedCoacingInfo, () => getSelectedCoachingInfo(id));
};

export default useSelectedCoachingInfo;
