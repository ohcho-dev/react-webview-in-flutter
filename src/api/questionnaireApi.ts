import { Method } from "axios";
import { request } from ".";
import { AnswerType } from "../utils/type";

// 설문지 보기(GET)
export const getSurveyQuestionList = (task_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/task/${task_id}/survey`,
  });
};

// 설문지 답변 저장(POST)
export const createSurveyAnswerData = (body: AnswerType) => {
  return request({
    method: "POST" as Method,
    url: `/v1/task/${body.task_id}/survey`,
    data: body,
  });
};
