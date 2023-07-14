import Cookies from "js-cookie";
import { Method } from "axios";
import { useQuery } from "react-query";
import { NotificationType } from "../../../types/common";
import { request } from "../../axiosInstance";
import { commonQueryKeys } from "../commonQueryKeys";
import { useSetRecoilState } from "recoil";
import { newNotificationFlagstate } from "store/common";

// 발송된 알림 리스트 (GET)
const getNotificationList = () => {
  return request({ method: "GET" as Method, url: `/v1/notification/list` });
};

const useNotificationList = (pathname: string) => {
  const setNewNotificationFlag = useSetRecoilState(newNotificationFlagstate);
  return useQuery([commonQueryKeys.notificationList, pathname], getNotificationList, {
    refetchOnWindowFocus: true,
    onSuccess: data => {
      if (data.last_checked_at) {
        data.list.map((noti: NotificationType) => {
          if (
            new Date(noti.created_at) > new Date(data.last_checked_at) &&
            pathname !== "/my/alarm-list"
          ) {
            setNewNotificationFlag(true);
          }
          return null;
        });
      } else {
        setNewNotificationFlag(data.list.length > 0 ? true : false);
      }
    },
    enabled: !!Cookies.get("token"),
  });
};

export default useNotificationList;
