import { ColorLight1, ColorLightSlate3 } from "lds-common/src/constants/tokens/global";
import styled, { css, keyframes } from "styled-components";

const slideRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const SwitchWrapper = styled.div`
  position: relative;

  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  border-radius: 1.8rem;
  background-color: ${ColorLightSlate3};

  padding: 0.8rem;
`;

export const Switch = styled.div<{ checked: boolean }>`
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100% - 1.6rem);
  width: calc(50% - 0.8rem);

  border-radius: 1.2rem;
  background-color: ${ColorLight1};
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.08);

  ${({ checked }) =>
    checked
      ? css`
          margin: 0.8rem 0rem 0.8rem 0.8rem;
          left: 0;
          animation: ${slideLeft} 0.5s ease-out;
        `
      : css`
          margin: 0.8rem 0.8rem 0.8rem 0;
          right: 0;
          animation: ${slideRight} 0.5s ease-out;
        `}
  z-index: 10;
`;

export const Section = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.2rem;
  width: 100%;
  height: 100%;

  z-index: 11;
`;
