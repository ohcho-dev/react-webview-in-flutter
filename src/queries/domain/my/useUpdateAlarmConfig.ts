import { useMutation, useQueryClient } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

interface PayloadType {
  type: string | undefined;
  value: number | undefined;
}

const updateAlarmConfig = (body: PayloadType) => {
  return request({ method: "PUT", url: `/v1/notification/config`, data: body });
};

const useUpdateAlarmConfig = () => {
  const queryClient = useQueryClient();
  return useMutation((payload: PayloadType) => updateAlarmConfig(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries(myQueryKeys.alarmConfig);
    },
    onError: error => {
      throw error;
    },
  });
};

export default useUpdateAlarmConfig;
