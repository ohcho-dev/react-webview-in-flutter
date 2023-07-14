import { ColorLightGray4, ColorLightSlate9Base } from "constants/ldsConstants/global";
import styled from "styled-components";

export const NoMainImage = styled.div`
  width: 37.5rem;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${ColorLightGray4};
`;

export const NoMainImageText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.2rem;
  color: ${ColorLightSlate9Base};
`;
