import { Method } from "axios";
import { request } from ".";

// 설문지 보기(GET)
export const getSurveyQuestionList = (task_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/task/${task_id}/survey`,
  });
};
