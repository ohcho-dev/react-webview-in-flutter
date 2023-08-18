import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

const getPlayContentsInfo = (coachingId: string, contentsId: string) => {
  return request({
    method: "GET" as Method,
    url: `/v3/coaching/${coachingId}/play-content/${contentsId}`,
    baseURL: import.meta.env.REACT_APP_SPRING_API_URL,
  });
};

const usePlayContentsInfo = (coachingId: string, contentsId: string) => {
  return useQuery(coachingQueryKeys.playContentsList, () =>
    getPlayContentsInfo(coachingId, contentsId),
  );
};

export default usePlayContentsInfo;
