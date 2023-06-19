import styled from "styled-components";

export const OnlineOffline = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
  padding-right: 0.5rem;
  color: rgba(10, 10, 10, 0.5);
`;

export const AgeRange = styled.span`
  height: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.1rem solid #939393;
  border-radius: 0.2rem;

  font-weight: 600;
  font-size: 1.2rem;
  color: rgba(10, 10, 10, 0.5);

  padding: 0.3rem;
  overflow: hidden;
`;

export const BOTTOM_BTN_WRAP_HEIGHT = 7.4;
export const BottomBtnWrap = styled.div`
  width: 100%;
  height: ${BOTTOM_BTN_WRAP_HEIGHT}rem;
  padding: 1.2rem 2rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background: #fff;

  transition: box-shadow 0.5s ease;
  display: flex;
  align-items: center;

  box-shadow: ${(prop: { $scrolling?: boolean }) =>
    prop.$scrolling ? "0px -5px 15px rgba(0, 0, 0, 0.05)" : "none"};
  z-index: 110;
`;

export const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
`;
