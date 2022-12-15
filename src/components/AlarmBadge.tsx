import { useState } from "react";
import styled from "styled-components";

interface AlarmBadgeProps {}

const CustomAlarmBadge = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;

  img:nth-child(1) {
    position: absolute;
    right: 0;
    width: 0.6rem;
    height: 0.6rem;

    display: ${(props: { newNotification: boolean }) =>
      props.newNotification ? "block" : "none"};
  }

  img:nth-child(2) {
    width: 100%;
    height: 100%;
  }
`;

export const AlarmBadge: React.FC<AlarmBadgeProps> = (props) => {
  const [newNotification, setNewNotification] = useState(true);
  return (
    <CustomAlarmBadge newNotification={newNotification}>
      <img alt="badge" src="/images/badge.svg" />
      <img alt="icon-bell" src="/images/icon-bell.svg" />
    </CustomAlarmBadge>
  );
};

export default AlarmBadge;
