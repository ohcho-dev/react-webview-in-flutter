import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { programQueryKeys } from "./programQueryKeys";

// 코칭 상품 목록 (GET)
const getCoachingList = () => {
  return request({ method: "GET" as Method, url: "/v1/program/coaching" });
};

const useCoachingList = (id: number) => {
  return useQuery([programQueryKeys.coachingList, id], getCoachingList);
};

export default useCoachingList;
