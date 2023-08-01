import { ColorLight1 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1.2rem;

  padding: 1.5rem 2rem;
  row-gap: 1.2rem;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;

  width: 100%;
  border-radius: 1.2rem;
  background-color: ${ColorLight1};

  padding: 0 1.2rem;
`;
