import styled from "styled-components";
import * as DT from "../../../constant/ldsConstants/global";
import { convertStrToRem } from "../../../utils/design-system/convertStrToRem";

export const Title = styled.div`
  width: 100%;
  padding: 0.8rem 2rem;
  font-weight: 600;
  font-size: ${convertStrToRem(DT.FontSize5)};
  line-height: ${convertStrToRem(DT.LineHeights14)};
  letter-spacing: -0.04rem;
  color: ${DT.ColorLightBlack9Base};
`;
