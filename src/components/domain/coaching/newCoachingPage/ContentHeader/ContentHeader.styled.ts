import {
  ColorLight1,
  ColorLightBlack9Base,
  ColorLightEltern3,
  ColorLightEltern9Base,
  ColorLightSlate6,
  ColorLightSlate9Base,
  FontSize0,
  FontSize3,
  FontSize5,
  FontWeightsMedium,
  FontWeightsRegular,
  FontWeightsSemibold,
  LetterSpacingBase,
  LineHeights0,
  LineHeights14,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";
import { convertNumToRem } from "utils/design-system/convertStrToRem";

export const HeaderWrap = styled.div`
  background-color: ${ColorLight1};
`;
export const HeaderName = styled.h1`
  font-size: ${convertNumToRem(FontSize5)};
  font-weight: ${FontWeightsSemibold};
  line-height: ${convertNumToRem(LineHeights14)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  padding: 0 2.5rem;
`;
export const HeaderStatusWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2.5rem;
  margin-top: 0.4rem;
  gap: 0.8rem;
  background-color: ${ColorLight1};
`;
export const HeaderStatusValue = styled.div`
  display: flex;
  padding: 0.2rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background-color: ${ColorLightEltern3};

  font-size: ${convertNumToRem(FontSize0)};
  font-weight: ${FontWeightsMedium};
  line-height: ${convertNumToRem(LineHeights0)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightEltern9Base};
`;
export const HeaderDesc = styled.div`
  font-size: ${convertNumToRem(FontSize0)};
  font-weight: ${FontWeightsRegular};
  line-height: ${convertNumToRem(LineHeights0)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
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
  font-size: ${convertNumToRem(FontSize3)};
  font-weight: ${FontWeightsSemibold};
  line-height: ${convertNumToRem(LineHeights14)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${props => (props.isOpen ? ColorLightBlack9Base : ColorLightSlate9Base)};
  border-bottom: ${props => (props.isSelected ? `2px solid ${ColorLightBlack9Base}` : "none")};
`;
