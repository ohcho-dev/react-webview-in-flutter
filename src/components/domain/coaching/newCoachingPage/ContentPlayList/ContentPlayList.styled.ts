import {
  ColorLight1,
  ColorLightBlack6,
  ColorLightBlack9Base,
  ColorLightPurple6,
  ColorLightPurple8,
  FontSize0,
  FontSize1,
  FontSize3,
  FontWeightsRegular,
  FontWeightsSemibold,
  LetterSpacingBase,
  LineHeights0,
  LineHeights1,
  LineHeights2,
  LineHeights3,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";
import { convertNumToRem } from "utils/design-system/convertStrToRem";

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 0.6rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  height: 29.6rem;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1.2rem;
  background: ${ColorLight1};
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.08);
`;
export const CardImg = styled.img`
  width: 100%;
  height: 16rem;
`;
export const CardChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid ${ColorLightPurple6};
  background: ${ColorLight1};
  margin-bottom: 0.8rem;

  font-size: ${convertNumToRem(FontSize0)};
  font-weight: ${FontWeightsSemibold};
  line-height: ${convertNumToRem(LineHeights0)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightPurple8};
`;
export const CardTitle = styled.div`
  font-size: ${convertNumToRem(FontSize3)};
  font-weight: ${FontWeightsSemibold};
  line-height: ${convertNumToRem(LineHeights3)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightBlack9Base};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const CardDesc = styled.div`
  font-size: ${convertNumToRem(FontSize1)};
  font-weight: ${FontWeightsRegular};
  line-height: ${convertNumToRem(LineHeights1)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightBlack6};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
