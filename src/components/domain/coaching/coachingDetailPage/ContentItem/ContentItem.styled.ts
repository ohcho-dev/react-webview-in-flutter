import {
  ColorLightBlack9Base,
  ColorLightSlate1,
  ColorLightSlate7,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const ItemWrap = styled.div`
  width: 33.5rem;
  height: 11rem;
  padding: 1.2rem;
  background: ${ColorLightSlate1};
  border: 1px solid ${ColorLightSlate7};
  border-radius: 1.2rem;
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 8rem;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 1.6rem;

  img {
    width: 9rem;
    height: 8.6rem;
  }
`;

export const ItemDesc = styled.div`
  display: flex;
  padding-top: 0.4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  flex: 1 0 0;
  align-self: stretch;
  margin-right: 1.8rem;
`;

export const ChipLayout = styled.div`
  div {
    margin-right: 0.4rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ItemTitle = styled.span`
  color: ${ColorLightBlack9Base};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
`;

export const ArrowBtnSection = styled.div`
  display: flex;
  alignt-items: center;
`;
