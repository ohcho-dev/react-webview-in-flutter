import { Method } from "axios";
import { request } from "queries/axiosInstance";
import { useQuery } from "react-query";
import { programQueryKeys } from "./programQueryKeys";

// 코칭 상품 신청 가능여부 확인 (GET)
const checkValidCoachingToApply = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/program/coaching/${id}/valid` });
};

const useCheckValidCoachingToApply = (id: string | undefined) => {
  return useQuery(programQueryKeys.checkValidCoachingToApply, () => checkValidCoachingToApply(id));
};

export default useCheckValidCoachingToApply;
