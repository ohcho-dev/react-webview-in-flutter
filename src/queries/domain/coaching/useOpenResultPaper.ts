import { Method } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 결과지 공개여부 변경 (PUT)
const setSharingResultPaper = (result_paper_id: number) => {
  return request({
    method: "PUT" as Method,
    url: `/v1/test/${result_paper_id}/open_yn`,
  });
};

const useOpenResultPaper = () => {
  const queryClient = useQueryClient();
  return useMutation((result_paper_id: number) => setSharingResultPaper(result_paper_id), {
    onSuccess: () => {
      queryClient.invalidateQueries(coachingQueryKeys.appliedCoachingInfo);
    },
  });
};

export default useOpenResultPaper;
