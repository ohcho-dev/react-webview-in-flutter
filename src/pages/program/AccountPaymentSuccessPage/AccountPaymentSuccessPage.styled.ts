import {
  ColorLightEltern3,
  ColorLightEltern9Base,
  ColorLightSlate4,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import styled, { keyframes } from "styled-components";
import { convertToRem } from "utils/style";

export const SuccessWrapper = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 3.2rem;
`;

export const AccountInfoWrapper = styled.div`
  padding: 1.6rem 2rem 0 2rem;
`;

export const InformBox = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.4rem;
  padding: 1.6rem 1.2rem;
  background-color: ${ColorLightEltern3};
  border-radius: 0.8rem;
  height: 5.2rem;
`;

export const AccountInfoItemWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const ItemWrapper = styled.div<{ lastItem?: boolean }>`
  display: flex;
  justify-content: space-between;

  padding-bottom: 0.8rem;
  border-bottom: ${({ lastItem }) => (lastItem ? "none" : `1px solid ${ColorLightSlate4}`)};
`;

export const InformText = styled.div`
  height: 1.2rem;
  font-family: Pretendard;
  font-weight: 400;
  letter-spacing: -0.4px;
  font-size: 1.4rem;
  color: ${ColorLightEltern9Base};
`;
