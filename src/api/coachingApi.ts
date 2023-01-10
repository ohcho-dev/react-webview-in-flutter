import { Method } from "axios";
import { request } from ".";

// 신청한 코칭 리스트(GET)
export const getAppliedCoachingList = () => {
  return request({
    method: "GET" as Method,
    url: "/v1/coaching",
  });
};
