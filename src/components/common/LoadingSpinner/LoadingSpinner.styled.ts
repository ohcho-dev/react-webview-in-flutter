import styled from "styled-components";

export const CustomSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(prop: { height?: string }) => (prop.height ? prop.height : "100vh")};
`;
