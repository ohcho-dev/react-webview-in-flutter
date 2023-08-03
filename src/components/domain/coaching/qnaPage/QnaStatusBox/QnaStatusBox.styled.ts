import { ColorLightSlate2, ColorLightSlate6 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const QnaStatusBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  background-color: ${ColorLightSlate2};
  border-radius: 0.8rem;

  padding: 1.6rem 0.8rem;

  margin-top: 1.6rem;
`;

export const QnaStatusBoxItem = styled.div<{ middleOne?: boolean }>`
  display: flex;
  flex-direction: column;

  align-items: center;

  border-left: ${({ middleOne }) => middleOne && `1px solid ${ColorLightSlate6}`};
  border-right: ${({ middleOne }) => middleOne && `1px solid ${ColorLightSlate6}`};
`;
