import { Method } from "axios";
import { request } from ".";

// 발송된 알림 리스트 (GET)
export const getNotificationList = () => {
  return request({ method: "GET" as Method, url: `/v1/notification/list` });
};
