import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";
import { PlayContentsListType } from "types/apis/coaching";

const getPlayContentsList = (id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v3/coaching/${id}/play-content`,
    baseURL: import.meta.env.REACT_APP_SPRING_API_URL,
  });
};

const usePlayContentsList = (id: string | undefined) => {
  return useQuery<PlayContentsListType>(coachingQueryKeys.playContentsList, () =>
    getPlayContentsList(id),
  );
};

export default usePlayContentsList;
