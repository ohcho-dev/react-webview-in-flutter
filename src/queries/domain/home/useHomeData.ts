import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { homeQueryKeys } from "./homeQueryKeys";

export const getHomeData = () => {
  return request({
    method: "GET",
    url: "/v1/home",
  });
};

const useHomeDate = () => {
  return useQuery(homeQueryKeys.homeData, getHomeData);
};

export default useHomeDate;
