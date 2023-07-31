import { ColorLightSlate1, ColorLightSlate7 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const ListItemCard = styled.div`
  padding: 1.8rem 1.2rem 1.8rem 2rem;
  background: ${ColorLightSlate1};
  border: 1px solid ${ColorLightSlate7};
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
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
  display: flex;
  column-gap: 0.4rem;
`;
