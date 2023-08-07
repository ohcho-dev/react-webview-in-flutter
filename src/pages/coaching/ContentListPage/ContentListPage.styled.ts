import styled from "styled-components";
import {
  ColorLight1,
  ColorLightEltern3,
  ColorLightEltern9Base,
  ColorLightSlate7,
} from "lds-common/src/constants/tokens/global";

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

export const PeriodInfoWrap = styled.div`
  background: ${ColorLight1};
  padding: 1.6rem 2rem 2.4rem;
`;
export const PeriodInfoCard = styled.ul`
  display: flex;
  padding: 1.2rem 0.8rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  /* align-self: stretch; */
  border-radius: 0.8rem;
  background: ${ColorLightEltern3};
  list-style-type: disc;
`;
export const PeriodInfoItem = styled.li`
  color: ${ColorLightEltern9Base};
  margin-left: 2rem;

  &::marker {
    font-size: 1rem;
  }
`;

export const TipSection = styled.div`
  padding: 0 2rem;
`;
