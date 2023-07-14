import styled, { keyframes } from "styled-components";

export const handleFade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100;
    }
`;

export const BottomModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 150;
`;

export const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  transform: all;
  animation: ${handleFade} 0.2s linear alternate;
`;

export const Modal = styled.div`
  width: 100%;
  max-height: 50rem;
  padding: 3rem 2.5rem 4rem;
  background: #fff;
  position: absolute;
  bottom: -0.1rem;
  border-radius: 1.8rem 1.8rem 0 0;
`;
