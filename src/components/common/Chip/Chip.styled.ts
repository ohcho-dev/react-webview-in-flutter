import styled from "styled-components";

export const CustomChip = styled.div<{
  color: string;
  borderColor: string;
  backgroundColor: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 2.2rem;
  width: fit-content;
  padding: 0rem 0.6rem;
  border-radius: 0.4rem;

  color: ${({ color }) => color};
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.8rem;
`;
