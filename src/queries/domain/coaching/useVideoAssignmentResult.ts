import { Method } from "axios";
import { useQuery } from "react-query";
import { VideoAssignmentResultType } from "../../../types/domain/coaching";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 동영상 결과 보기(GET)
const getVideoAssignmentResult = (task_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/task/${task_id}/video`,
  });
};

const useVideoAssignmentResult = (id: string | undefined) => {
  return useQuery<VideoAssignmentResultType>(coachingQueryKeys.videoAssignmentResult, () =>
    getVideoAssignmentResult(id),
  );
};

export default useVideoAssignmentResult;
