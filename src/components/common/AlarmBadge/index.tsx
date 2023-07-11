import useNotificationList from "queries/common/notification/useNotificationList";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { newNotificationFlagstate } from "store/common";
import UseImgix from "../Imgix";
import * as S from "./AlarmBadge.styled";

export const AlarmBadge: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const newNotificationFlag = useRecoilValue(newNotificationFlagstate);
  const { status, isFetching } = useNotificationList(pathname);

  return (
    <>
      {(status === "idle" || isFetching) && null}
      <S.CustomAlarmBadge
        newNotification={newNotificationFlag}
        onClick={() => navigate("/my/alarm-list")}
      >
        <UseImgix srcUrl="/images/badge.svg" alt="alarm" />
        <UseImgix srcUrl="/images/icon-bell.svg" alt="alarm" />
      </S.CustomAlarmBadge>
    </>
  );
};

export default AlarmBadge;
