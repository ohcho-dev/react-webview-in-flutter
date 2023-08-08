import { ColorLight1, ColorLightSlate3 } from "lds-common/src/constants/tokens/global";
import styled, { css, keyframes } from "styled-components";

const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
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
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  border-radius: 1.8rem;
  background-color: ${ColorLightSlate3};

  padding: 0.8rem;
`;

export const Switch = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 4.8rem;
  border-radius: 1.2rem;
  padding: 0.6rem 1.2rem;
  background-color: ${ColorLight1};
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.08);

  animation: ${({ checked }) => (checked ? slideLeft : slideRight)} 0.5s ease-out;
  transform: ${({ checked }) => (checked ? "translateX(0)" : "translateX(100%)")};

  z-index: 10;
`;

export const Section = styled.div<{ location: "left" | "right" }>`
  position: absolute;
  ${({ location }) =>
    location === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.2rem;
  padding: 0.6rem 1.2rem;

  width: 50%;
  height: 100%;
`;
