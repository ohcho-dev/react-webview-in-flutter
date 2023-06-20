import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { getNotificationList } from "../../../queries/common/notificationApi";
import { newNotificationFlagstate } from "../../../store/common";
import { NotificationType } from "../../../types/common";
import UseImgix from "../Imgix";
import { commonQueryKeys } from "../../../queries/common/commonQueryKeys";
import * as S from "./AlarmBadge.styled";

export const AlarmBadge: React.FC = props => {
  const navigate = useNavigate();
  const [newNotificationFlag, setNewNotificationFlag] = useRecoilState(newNotificationFlagstate);
  const [newFlag, setNewFlag] = useState(newNotificationFlag);
  const { status, isFetching } = useQuery(commonQueryKeys.notificationList, getNotificationList, {
    refetchOnWindowFocus: true,
    onSuccess: data => {
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
    },
    enabled: !!Cookies.get("token"),
  });

  useEffect(() => {
    setNewNotificationFlag(newFlag);
  }, [newFlag]);

  return (
    <>
      {(status === "idle" || isFetching) && null}
      <S.CustomAlarmBadge newNotification={newFlag} onClick={() => navigate("/my/alarm-list")}>
        <UseImgix srcUrl="/images/badge.svg" alt="alarm" />
        <UseImgix srcUrl="/images/icon-bell.svg" alt="alarm" />
      </S.CustomAlarmBadge>
    </>
  );
};

export default AlarmBadge;
