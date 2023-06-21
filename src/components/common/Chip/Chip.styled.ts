import styled from "styled-components";

export const CustomChip = styled.div`
  height: 2.2rem;
  width: ${(prop: { customWidth: string | undefined }) => prop.customWidth || "4.3rem"};
  color: ${prop => prop.color};
  border: 1px solid ${prop => (prop.color === "#FFFFFF" ? "#282828" : prop.color)};
  border-radius: 0.2rem;
  background-color: ${prop => (prop.color === "#FFFFFF" ? "#282828" : "white")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
`;
