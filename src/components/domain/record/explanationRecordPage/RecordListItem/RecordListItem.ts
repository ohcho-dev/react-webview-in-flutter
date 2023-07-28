import { ColorLightSlate1, ColorLightSlate7 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const ListItemWrapper = styled.div`
  padding: 0 2rem;
`;

export const ListItemCard = styled.div`
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  background: ${ColorLightSlate1};
  border: 1px solid ${ColorLightSlate7};
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImageWrap = styled.div`
  width: 9rem;
  max-width: 9rem;
  min-width: 9rem;
  height: 8.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #dfe3e6;
  border-radius: 0.8rem;

  img {
    width: 6.4rem;
    height: 6rem;
  }
`;

export const TextWrap = styled.div`
  width: 20.5rem;
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;
