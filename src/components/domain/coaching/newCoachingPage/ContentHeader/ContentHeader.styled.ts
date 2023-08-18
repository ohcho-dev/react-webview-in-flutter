import {
  ColorLight1,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  ColorLightSlate6,
  ColorLightSlate7,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const HeaderWrap = styled.div`
  background-color: ${ColorLight1};
`;
export const HeaderInfoSection = styled.div`
  padding: 0 2.5rem;
`;
export const HeaderStatusWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.4rem;
  gap: 0.8rem;
  background-color: ${ColorLight1};
`;

export const WeekTab = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  background-color: ${ColorLight1};

  border-bottom: 1px solid ${ColorLightSlate6};

  column-gap: 2.4rem;
  padding: 0 2rem;
`;

export const WeekItem = styled.div<{ isOpen?: boolean; isSelected?: boolean }>`
  box-sizing: border-box;
  padding: 1.1rem 0.4rem;
  color: ${props => (props.isOpen ? ColorLightBlack9Base : ColorLightSlate9Base)};
  border-bottom: ${props => (props.isSelected ? `2px solid ${ColorLightBlack9Base}` : "none")};
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 38rem;
  padding-top: 24px;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  background: #f1f3f5;
`;

export const CustomDotsWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8rem;
  position: relative;
  top: 2rem;

  li {
    button {
      width: 0.8rem;
      height: 0.8rem;
      border: 0;
      background-color: transparent;
      position: relative;
      text-indent: -999rem;

      &:after {
        content: "";
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
        background: ${ColorLightSlate7};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &.slick-active {
      button {
        &:after {
          content: "";
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 0.4rem;
          background: ${ColorLightEltern9Base};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;
