import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { newNotificationFlagstate } from "../../store/common";
import { NotificationType } from "../../types/common";
import UseImgix from "./Imgix";
import { commonQueryKeys } from "../../queries/common/commonQueryKeys";
import useNotificationList from "../../queries/common/notification/useNotificationList";

const CustomAlarmBadge = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;

  img:nth-child(1) {
    position: absolute;
    right: 0;
    width: 0.6rem;
    height: 0.6rem;

    display: ${(props: { newNotification: boolean }) => (props.newNotification ? "block" : "none")};
  }

  img:nth-child(2) {
    width: 100%;
    height: 100%;
  }
`;
export const AlarmBadge: React.FC = props => {
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
      <CustomAlarmBadge newNotification={newFlag} onClick={() => navigate("/my/alarm-list")}>
        <UseImgix srcUrl="/images/badge.svg" alt="alarm" />
        <UseImgix srcUrl="/images/icon-bell.svg" alt="alarm" />
      </CustomAlarmBadge>
    </>
  );
};

export default AlarmBadge;
