import { Method } from "axios";
import { request } from ".";

// 신청한 코칭 리스트(GET)
export const getAppliedCoachingList = () => {
  return request({
    method: "GET" as Method,
    url: "/v1/coaching",
  });
};

// 선택한 코칭 상세정보(GET)
export const getAppliedCoachingInfo = (id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/coaching/${id}`,
  });
};

// 선택한 과제 상세정보(GET)
export const getSelectedTaskInfo = (task_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/task/${task_id}`,
  });
};
