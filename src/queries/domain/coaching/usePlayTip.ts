import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

const getPlayTip = () => {
  return request({
    method: "GET" as Method,
    url: `/v3/content/play-tip`,
    baseURL: import.meta.env.REACT_APP_SPRING_API_URL,
  });
};

const usePlayTip = () => {
  return useQuery(coachingQueryKeys.playTip, () => getPlayTip());
};

export default usePlayTip;
