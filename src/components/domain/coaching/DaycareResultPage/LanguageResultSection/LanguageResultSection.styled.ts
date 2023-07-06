import { ColorLightPurple8, ColorLightSlate7 } from "constants/ldsConstants/global";
import styled, { css } from "styled-components";

export const LanguageExplanationBtn = styled.div`
  width: 100%;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.8rem;
  margin-top: 0.8rem;

  background-color: #f7f4fd;

  span {
    color: ${ColorLightPurple8};
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2rem;
  }
`;

export const LanguageLevelInfoSection = styled.div<{ firstSection: boolean }>`
  ${({ firstSection }) =>
    firstSection &&
    css`
      padding-bottom: 2rem;
      margin-bottom: 1rem;
    `}
`;
