import { ColorLightEltern3, ColorLightEltern9Base } from "constants/ldsConstants/global";
import styled from "styled-components";

export const BadgeWrapper = styled.div<{ isFinished: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 2.2rem;

  background: ${ColorLightEltern3};
  border-radius: 0.4rem;

  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;

  color: ${ColorLightEltern9Base};
`;
