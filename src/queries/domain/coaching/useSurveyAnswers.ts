import { Method } from "axios";
import { useQuery } from "react-query";
import { GetSurveyType } from "../../../types/apis/coaching";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 설문 답변 보기(GET)
export const getSurveyAnswers = (task_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/task/${task_id}/survey/result`,
  });
};

const useSurveyAnswers = (id: string | undefined) => {
  return useQuery<GetSurveyType>(coachingQueryKeys.surveyAnswerList, () => getSurveyAnswers(id));
};

export default useSurveyAnswers;
