import { ColorLightBlack7, ColorLightBlack8 } from "constants/ldsConstants/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  padding: 0 2.5rem;
  row-gap: 4rem;
`;

export const ExplanationBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  color: ${ColorLightBlack8};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3.2rem;

  margin: 0.5rem 0 1.2rem;
`;

export const Description = styled.span`
  color: ${ColorLightBlack7};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
`;
