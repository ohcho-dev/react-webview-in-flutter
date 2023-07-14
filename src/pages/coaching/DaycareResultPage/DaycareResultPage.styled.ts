import { ColorLight2, ColorLightSlate11, ColorLightSlate2 } from "constants/ldsConstants/global";
import styled from "styled-components";

export const DividerSection = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${ColorLightSlate2};
`;

export const Section = styled.div`
  padding: 2.5rem 2rem;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: -0.4px;
  color: ${ColorLight2};
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 1.6rem;
  display: flex;
  background-color: ${ColorLightSlate2};
  border-radius: 0.8rem;
`;

export const ListContent = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: ${ColorLightSlate11};
  white-space: pre-wrap;
`;

export const IconDotSection = styled.div`
  margin: 0.5rem 1rem 0 0;
`;
