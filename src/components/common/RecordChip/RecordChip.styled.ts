import styled from "styled-components";

export const CustomChip = styled.span`
  height: 2.2rem;
  padding: 0.2rem 0.6rem;
  color: ${prop => prop.color};
  border: 1px solid ${(prop: { borderColor: string }) => prop.borderColor};
  border-radius: 0.2rem;
  background-color: ${prop => (prop.color === "#FFFFFF" ? "#282828" : "white")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
`;
