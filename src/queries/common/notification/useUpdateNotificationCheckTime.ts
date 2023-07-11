import { Method } from "axios";
import { useMutation } from "react-query";
import { request } from "../../axiosInstance";

// 알림 리스트 시간 확인 (POST)
const updateNotificationCheckTime = () => {
  return request({ method: "POST" as Method, url: `/v1/notification/check` });
};

const useUpdateNotificationCheckTime = () => {
  return useMutation(updateNotificationCheckTime);
};

export default useUpdateNotificationCheckTime;
