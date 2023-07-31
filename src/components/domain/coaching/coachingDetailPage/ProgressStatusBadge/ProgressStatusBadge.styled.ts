import {
  ColorLightEltern3,
  ColorLightEltern9Base,
  ColorLightSlate4,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const BadgeWrapper = styled.div<{ isFinished: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  width: fit-content;

  background: ${({ isFinished }) => (isFinished ? ColorLightSlate4 : ColorLightEltern3)};
  border-radius: 0.4rem;

  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;

  color: ${({ isFinished }) => (isFinished ? ColorLightSlate9Base : ColorLightEltern9Base)};
`;
