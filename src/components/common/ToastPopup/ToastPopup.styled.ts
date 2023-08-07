import { ColorLightSlate10 } from "lds-common/src/constants/tokens/global";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1; 
  }
  80% {
    opacity: 1; 
  }
  100% {
    opacity: 0; 
  }
`;

export const ToastPopupWrapper = styled.div<{ scrollY: number }>`
  width: 30rem;
  left: 50%;
  transform: translateX(-50%);

  position: absolute;
  bottom: ${({ scrollY }) => (scrollY ? `-${scrollY}px` : "20px")};

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 0.4rem;

  padding: 1.4rem 2rem;

  border-radius: 5.6rem;
  background-color: ${ColorLightSlate10};

  animation: ${fadeInOut} 2s ease-out;
`;
