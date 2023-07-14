import { ColorLightSlate7, ColorLightSlate8 } from "constants/ldsConstants/global";
import styled from "styled-components";

export const BoxWrapper = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${ColorLightSlate7};
`;

export const InformText = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: ${ColorLightSlate8};
`;
