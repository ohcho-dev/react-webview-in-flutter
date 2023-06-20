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
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.2s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.2s ease-out;
`;

export const OverlayStyle = styled.div`
  animation: ${(prop: { isOpen: boolean }) => (prop.isOpen ? fadeIn : fadeOut)} 0.2s ease-in;
  visibility: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "visible" : "hidden")};
  transition: visibility 0.2s ease-out;
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
  position: relative;
`;

export const ModalTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 1.2rem;
  padding: 0 2rem;
`;

export const ModalContent = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const BtnItem = styled.div`
  padding: 2rem 2rem;
  border-bottom: 1px solid #efefef;

  &:first-child {
    border-top: 1px solid #efefef;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 0;
  right: 2rem;
`;
