import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 설문지 보기(GET)
const getSurveyQuestionList = (task_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/task/${task_id}/survey`,
  });
};

const useSurveyQuestionList = (task_id: string | undefined) => {
  return useQuery(coachingQueryKeys.surveyQuestionList, () => getSurveyQuestionList(task_id));
};

export default useSurveyQuestionList;
