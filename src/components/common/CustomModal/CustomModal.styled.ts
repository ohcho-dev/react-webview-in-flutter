import { ColorLightBlack7, ColorLightBlack8 } from "lds-common/src/constants/tokens/global";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ModalStyle = styled.div`
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.1s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.1s ease-out;
`;

export const OverlayStyle = styled.div`
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.1s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.1s ease-out;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;

export const ModalImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

export const ModalBtnsWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const ModalContent = styled.span`
  margin-bottom: 2.4rem;
  margin-top: 0.8rem;
  color: ${ColorLightBlack7};
`;
