import Cookies from "js-cookie";
import { Method } from "axios";
import { useQuery } from "react-query";
import { NotificationType } from "../../../types/common";
import { request } from "../../axiosInstance";
import { commonQueryKeys } from "../commonQueryKeys";
import { Dispatch, SetStateAction } from "react";

// 발송된 알림 리스트 (GET)
const getNotificationList = () => {
  return request({ method: "GET" as Method, url: `/v1/notification/list` });
};

const useNotificationList = (setNewFlag?: Dispatch<SetStateAction<boolean>>) => {
  return useQuery(commonQueryKeys.notificationList, getNotificationList, {
    refetchOnWindowFocus: true,
    onSuccess: data => {
      if (setNewFlag) {
        if (data.last_checked_at) {
          data.list.map((noti: NotificationType) => {
            if (new Date(noti.created_at) > new Date(data.last_checked_at)) {
              return setNewFlag(true);
            }
            return null;
          });
        } else {
          let flag = false;

          flag = data.list.length ? true : false;
          setNewFlag(flag);
        }
      }
    },
    enabled: !!Cookies.get("token"),
  });
};

export default useNotificationList;
