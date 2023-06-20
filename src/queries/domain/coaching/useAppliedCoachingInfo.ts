import { Method } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 선택한 코칭 상세정보(GET)
const getAppliedCoachingInfo = (id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/coaching/${id}`,
  });
};

const useAppliedCoachingInfo = (id: string | undefined) => {
  return useQuery(coachingQueryKeys.appliedCoachingInfo, () => getAppliedCoachingInfo(id));
};

export default useAppliedCoachingInfo;
