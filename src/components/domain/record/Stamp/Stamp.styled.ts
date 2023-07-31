import styled from "styled-components";

export const StampWrap = styled.div`
  width: 100%;
  flex: 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StampImage = styled.div<{ active: boolean }>`
  margin-bottom: 0.8rem;
  position: relative;

  img:nth-child(1) {
    display: none;
    position: absolute;
  }

  img:nth-child(2) {
    filter: ${({ active }) => (active ? "grayscale(0%)" : "grayscale(100%)")};
    width: 9.6rem;
    height: 9.6rem;
  }
`;
