import { Method } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { AnswerType } from "../../../types/apis/program";
import { request } from "../../axiosInstance";

// 설문지 답변 저장(POST)
export const createSurveyAnswerData = (body: AnswerType) => {
  return request({
    method: "POST" as Method,
    url: `/v1/task/${body.task_id}/survey`,
    data: body,
  });
};

const useCreateSurveyAnswerData = (setOpenSuccessModal: Dispatch<SetStateAction<boolean>>) => {
  return useMutation((payload: AnswerType) => createSurveyAnswerData(payload), {
    onSuccess: res => {
      if (res.test_result_id) {
        setOpenSuccessModal(true);
      }
    },
  });
};

export default useCreateSurveyAnswerData;
