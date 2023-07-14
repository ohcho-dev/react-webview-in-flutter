import styled from "styled-components";

export const CustomAlarmBadge = styled.div<{ newNotification: boolean }>`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;

  img:nth-child(1) {
    position: absolute;
    right: 0;
    width: 0.6rem;
    height: 0.6rem;

    display: ${({ newNotification }) => (newNotification ? "block" : "none")};
  }

  img:nth-child(2) {
    width: 100%;
    height: 100%;
  }
`;
