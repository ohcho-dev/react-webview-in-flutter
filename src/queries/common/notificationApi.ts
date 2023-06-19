import { Method } from "axios";
import { request } from "../axiosInstance";

// 발송된 알림 리스트 (GET)
export const getNotificationList = () => {
  return request({ method: "GET" as Method, url: `/v1/notification/list` });
};

// 알림 리스트 시간 확인 (POST)
export const updateNotificationCheckTime = () => {
  return request({ method: "POST" as Method, url: `/v1/notification/check` });
};
