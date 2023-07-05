import {
  ColorLightBlack9Base,
  ColorLightSlate3,
  ColorLightSlate9Base,
} from "constants/ldsConstants/global";
import styled from "styled-components";

export const TabWrapper = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  border-bottom: 1px solid ${ColorLightSlate3};

  column-gap: 1.6rem;
  padding: 0 2rem;
`;

export const TabItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
  border-bottom: ${({ selected }) => (selected ? `2px solid ${ColorLightBlack9Base}` : "none")};
`;

export const TabTitle = styled.span<{ selected: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.6rem;
  margin-top: ${({ selected }) => (selected ? "2px" : "0px")};
  color: ${({ selected }) => (selected ? ColorLightBlack9Base : ColorLightSlate9Base)};
`;
