import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";
import { PlayContentsInfoType } from "types/apis/coaching";

const getPlayContentsInfo = (coachingId: string | undefined, contentsId: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v3/coaching/${coachingId}/play-content/${contentsId}`,
    baseURL: import.meta.env.REACT_APP_SPRING_API_URL,
  });
};

const usePlayContentsInfo = (coachingId: string | undefined, contentsId: string | undefined) => {
  return useQuery<PlayContentsInfoType>(coachingQueryKeys.playContentsInfo, () =>
    getPlayContentsInfo(coachingId, contentsId),
  );
};

export default usePlayContentsInfo;
