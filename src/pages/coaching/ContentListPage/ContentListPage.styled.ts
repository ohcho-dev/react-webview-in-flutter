import styled from "styled-components";
import {
  ColorLight1,
  ColorLightEltern3,
  ColorLightEltern9Base,
  ColorLightSlate7,
} from "lds-common/src/constants/tokens/global";

export const PeriodInfoWrap = styled.div`
  background: ${ColorLight1};
  padding: 1.6rem 2rem 2.4rem;
`;
export const PeriodInfoCard = styled.ul`
  display: flex;
  padding: 1.2rem 0.8rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  /* align-self: stretch; */
  border-radius: 0.8rem;
  background: ${ColorLightEltern3};
  list-style-type: disc;
`;
export const PeriodInfoItem = styled.li`
  color: ${ColorLightEltern9Base};
  margin-left: 2rem;

  &::marker {
    font-size: 1rem;
  }
`;

export const TipSection = styled.div`
  padding: 0 2rem;
`;
