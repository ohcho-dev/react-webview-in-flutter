import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getNotificationList } from "../api/notificationApi";
import { queryKeys } from "../constant/queryKeys";
import { newNotificationFlagstate } from "../recoil/atom";
import { NotificationType } from "../utils/type";

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

interface AlarmBadgeProps {}

export const AlarmBadge: React.FC<AlarmBadgeProps> = props => {
  const navigate = useNavigate();
  //const notificationList = useRecoilValue(notificationListstate);
  const [newNotificationFlag, setNewNotificationFlag] = useRecoilState(newNotificationFlagstate);
  const { status, isFetching } = useQuery(queryKeys.notificationList, getNotificationList, {
    refetchOnWindowFocus: true,
    onSuccess: data => {
      if (data.last_checked_at) {
        data.list.map((noti: NotificationType) => {
          if (new Date(noti.created_at) > new Date(data.last_checked_at)) {
            setNewNotificationFlag(true);
          }
        });
      } else {
        setNewNotificationFlag(true);
      }

      // if (notificationList.length) {
      //   notificationList.map((noti: NotificationType) => {
      //     previousIdArr.push(noti.id);
      //   });

      //   data.map((noti: NotificationType) => {
      //     if (previousIdArr.includes(noti.id)) {
      //       matchedIdNum++;
      //     }
      //   });

      //   if (data.length !== matchedIdNum) {
      //     setNewNotificationFlag(true);
      //   }
      // }
    },
    enabled: !!Cookies.get("token"),
  });
  return (
    <>
      {(status === "idle" || isFetching) && null}
      <CustomAlarmBadge
        newNotification={newNotificationFlag}
        onClick={() => navigate("/my/alarm-list")}
      >
        <img alt="badge" src="/images/badge.svg" />
        <img alt="icon-bell" src="/images/icon-bell.svg" />
      </CustomAlarmBadge>
    </>
  );
};

export default AlarmBadge;
