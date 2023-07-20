import styled from "styled-components";
import { FontSize2, ColorLightBlack9Base } from "../../../../../constants/ldsConstants/global";
import { convertNumToRem } from "../../../../../utils/design-system/convertStrToRem";

export const ListItemWrapper = styled.div`
  padding: 0 2rem;
`;

export const ListItemCard = styled.div`
  padding: 1.8rem 1.2rem 1.8rem 2rem;
  margin-bottom: 1.2rem;
  background: #fbfcfd;
  border: 1px solid #d7dbdf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  column-gap: 1.6rem;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoWrap = styled.div``;

export const ChipWrap = styled.div`
  margin-bottom: 0.8rem;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: ${convertNumToRem(FontSize2)};
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: ${ColorLightBlack9Base};
`;
export const ArrowIcon = styled.div`
  img {
    width: 2.4rem;
  }
`;
