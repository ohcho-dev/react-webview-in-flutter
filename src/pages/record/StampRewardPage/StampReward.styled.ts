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

export const StampWrap = styled.div`
  width: 100%;
  flex: 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StampImage = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;

  img {
    filter: ${({ active }) => (active ? "grayscale(0%)" : "grayscale(100%)")};
    width: 9.6rem;
    height: 9.6rem;
  }
`;
