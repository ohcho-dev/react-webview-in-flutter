import { ColorLightSlate4 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const StampSection = styled.div<{ lastOne?: boolean }>`
  width: 100%;
  padding: 0.8rem 2rem 4.5rem 2rem;
  border-bottom: ${({ lastOne }) => (lastOne ? "" : `1px solid ${ColorLightSlate4}`)};
`;

export const StampContainer = styled.div`
  width: 100%;
  padding: 1.2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3rem;
`;
