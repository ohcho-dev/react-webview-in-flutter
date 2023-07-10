import useNotificationList from "queries/common/notification/useNotificationList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { newNotificationFlagstate } from "store/common";
import UseImgix from "../Imgix";
import * as S from "./AlarmBadge.styled";

export const AlarmBadge: React.FC = () => {
  const navigate = useNavigate();
  const [newNotificationFlag, setNewNotificationFlag] = useRecoilState(newNotificationFlagstate);
  const [newFlag, setNewFlag] = useState(newNotificationFlag);
  const { status, isFetching } = useNotificationList(setNewFlag);

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
