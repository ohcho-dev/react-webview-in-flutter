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
  justify-content: space-between;
  column-gap: 1.2rem;

  width: 100%;
  border-radius: 1.2rem;
  background-color: ${ColorLight1};

  padding: 1.8rem 1.2rem;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
`;

export const TestSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  row-gap: 2.4rem;
  padding: 2.4rem 1.2rem;
`;

export const Wrapper = styled.div`
  padding: 0.6rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
