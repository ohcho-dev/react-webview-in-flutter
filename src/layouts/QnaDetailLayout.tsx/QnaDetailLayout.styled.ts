import { ColorLightSlate3, ColorLightSlate9Base } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const InputBottomSectionWrapper = styled.div<{ $scrolling: boolean }>`
  width: 100%;

  padding: 0.5rem 2rem 1.2rem 2rem;
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

export const CustomInput = styled.div`
  display: flex;
  column-gap: 0.8rem;

  padding: 1.1rem 1.6rem;
  background-color: ${ColorLightSlate3};
  border-radius: 0.6rem;

  width: 100%;

  textarea {
    background-color: ${ColorLightSlate3};
    border: none;
    outline: none;
    width: 100%;
    max-height: 7.8rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;

    ::placeholder {
      color: ${ColorLightSlate9Base};
    }
  }
`;

export const SendBtnSection = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 0.5rem;
`;
