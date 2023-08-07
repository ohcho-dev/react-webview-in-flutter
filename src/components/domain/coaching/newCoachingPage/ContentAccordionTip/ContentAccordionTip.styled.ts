import { ColorLightSlate2, ColorLightSlate4 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const AccordionWrap = styled.div`
  border-radius: 0.5rem;
`;

export const AccordionHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  cursor: pointer;
  position: relative;
  &:after {
    display: ${props => (props.isOpen ? "none" : "block")};
    content: "";
    width: calc(100% - 4rem);
    border-bottom: 1px solid ${ColorLightSlate4};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
export const AccordionIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background: url(${(prop: { isOpen: boolean; background: string }) => prop.background}) no-repeat
    50% 50%;
  background-size: 1.6rem 1.6rem;
  transform: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
export const AccordionBody = styled.div`
  display: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "block" : "none")};
  padding: 3rem 2rem;
  background: ${ColorLightSlate2};
  word-break: keep-all;
`;
