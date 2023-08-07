import {
  ColorLight1,
  ColorLightBlack9Base,
  ColorLightSlate6,
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
