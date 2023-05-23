import styled from "styled-components";
import * as DT from "../../../constant/ldsConstants/global";
import { convertStrToRem } from "../../../utils/design-system/convertStrToRem";

export const Title = styled.div`
  font-weight: 600;
  font-size: ${convertStrToRem(DT.FontSize3)};
  line-height: ${convertStrToRem(DT.LineHeights2)};
  color: ${DT.ColorLightBlack9Base};
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
  font-size: ${convertStrToRem(DT.FontSize2)};
  line-height: ${convertStrToRem(DT.LineHeights2)};
  letter-spacing: -0.04rem;
  color: ${DT.ColorLightBlack5};
  text-align: center;
`;
