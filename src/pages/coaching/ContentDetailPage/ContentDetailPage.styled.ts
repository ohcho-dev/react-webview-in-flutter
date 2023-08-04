import {
  ColorLight1,
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightSlate3,
  ColorLightSlate6,
  FontSize1,
  FontSize2,
  FontSize3,
  FontWeightsBold,
  FontWeightsRegular,
  FontWeightsSemibold,
  LetterSpacingBase,
  LineHeights1,
  LineHeights3,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";
import { convertNumToRem } from "utils/design-system/convertStrToRem";

export const ActivityWrapper = styled.div`
  background-color: ${ColorLight1};
  padding: 0 2rem;
`;
export const ActivityTitle = styled.div`
  font-size: ${convertNumToRem(FontSize3)};
  font-weight: ${FontWeightsSemibold};
  line-height: ${convertNumToRem(LineHeights3)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightBlack9Base};
`;
export const ActivityCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.8rem;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 1.8rem;
  background: ${ColorLightSlate3};
  margin-top: 1.2rem;
`;
export const ActivityCategoryButton = styled.div<{ selected: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  background: ${props => (props.selected ? ColorLight1 : ColorLightSlate3)};
  padding: 0.6rem 0;
  font-size: ${convertNumToRem(FontSize2)};
  font-weight: ${FontWeightsRegular};
  line-height: ${convertNumToRem(LineHeights3)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightBlack6};
`;
export const ActivityList = styled.div`
  margin-top: 2rem;
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
  }
`;
export const ActivityItemIndex = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
  border: 1px solid ${ColorLightSlate6};
  background: ${ColorLight1};
  font-size: ${convertNumToRem(FontSize1)};
  font-weight: ${FontWeightsBold};
  line-height: ${convertNumToRem(LineHeights1)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightBlack6};
  margin-top: 0.3rem;
`;
export const ActivityItem = styled.div`
  margin-bottom: 1.6rem;
  font-size: ${convertNumToRem(FontSize2)};
  font-weight: ${FontWeightsRegular};
  line-height: ${convertNumToRem(LineHeights3)};
  letter-spacing: ${convertNumToRem(LetterSpacingBase)};
  color: ${ColorLightBlack7};
  position: relative;
`;
