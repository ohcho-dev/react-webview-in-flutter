import { useMutation } from "react-query";
import { request } from "../../axiosInstance";

interface PayloadType {
  type: string | undefined;
  value: number | undefined;
}

const updateAlarmConfig = (body: PayloadType) => {
  return request({ method: "PUT", url: `/v1/notification/config`, data: body });
};

const useUpdateAlarmConfig = () => {
  return useMutation((payload: PayloadType) => updateAlarmConfig(payload), {
    onError: error => {
      throw error;
    },
  });
};

export default useUpdateAlarmConfig;
