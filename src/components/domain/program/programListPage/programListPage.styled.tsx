import {
  ColorLightBlack12,
  ColorLightBlack9Base,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
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

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  row-gap: 1.2rem;
`;

export const ProgramTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${ColorLightBlack9Base};
`;

export const NoCoachingSection = styled.div`
  display: flex;
  margin: 4rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 26rem;
    height: 9rem;
    margin-bottom: 3rem;
  }

  span:nth-child(2) {
    display: block;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: #0a0a0a;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const CoachingWrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const NoProgramSection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 19.2rem;

  span:nth-child(2) {
    margin: 2.4rem 0 0.5rem 0;

    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.6rem;
    color: ${ColorLightBlack12};
  }

  span:nth-child(3) {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    color: ${ColorLightSlate9Base};
  }
`;
