import styled from "styled-components";
import {
  FontSize2,
  FontSize3,
  LineHeights2,
  ColorLightBlack5,
  ColorLightBlack9Base,
} from "../../../constants/ldsConstants/global";
import { convertNumToRem } from "../../../utils/design-system/convertStrToRem";

export const Title = styled.div`
  font-weight: 600;
  font-size: ${convertNumToRem(FontSize3)};
  line-height: ${convertNumToRem(LineHeights2)};
  color: ${ColorLightBlack9Base};
  padding: 0.8rem 2rem;
`;

export const StampContainer = styled.div`
  width: 100%;
  padding: 1.2rem 2.4rem;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const StampListWrap = styled.div`
  width: 100%;
  flex: 0 30%;
  margin-bottom: 3.2rem;
`;

export const StampImage = styled.div`
  border-radius: 50%;
  width: 9.6rem;
  height: 9.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;

  img {
    width: 70%;
  }
`;

export const StampTitle = styled.div`
  font-size: ${convertNumToRem(FontSize2)};
  line-height: ${convertNumToRem(LineHeights2)};
  letter-spacing: -0.04rem;
  color: ${ColorLightBlack5};
  text-align: center;
`;
