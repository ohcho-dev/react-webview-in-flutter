import styled from "styled-components";

export const ItemWrapper = styled.div<{ finishedTest: boolean }>`
  display: flex;
  column-gap: 1.2rem;

  img {
    filter: ${({ finishedTest }) => (finishedTest ? "grayscale(100%)" : "grayscale(0%)")};
  }
`;

export const ItemInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
