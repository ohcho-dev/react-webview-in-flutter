import styled from "styled-components";

export const ItemWrapper = styled.div<{ finishedTest: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    filter: ${({ finishedTest }) => (finishedTest ? "grayscale(100%)" : "grayscale(0%)")};
  }
`;

export const MainSection = styled.div`
  display: flex;
  column-gap: 1.2rem;
  align-items: center;
`;

export const ItemInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
