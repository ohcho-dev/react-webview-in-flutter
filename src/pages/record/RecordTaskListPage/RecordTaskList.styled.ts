import styled from "styled-components";
import {
  FontSize5,
  LineHeights14,
  ColorLightBlack9Base,
} from "../../../constants/ldsConstants/global";
import { convertNumToRem } from "../../../utils/design-system/convertStrToRem";

export const Title = styled.div`
  width: 100%;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: ${convertNumToRem(FontSize5)};
  line-height: ${convertNumToRem(LineHeights14)};
  letter-spacing: -0.04rem;
  color: ${ColorLightBlack9Base};
`;
