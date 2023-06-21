import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

const getAlarmConfig = () => {
  return request({
    method: "GET",
    url: "/v1/notification/config",
  });
};

const useAlarmConfig = () => {
  return useQuery(myQueryKeys.alarmConfig, () => getAlarmConfig());
};

export default useAlarmConfig;
