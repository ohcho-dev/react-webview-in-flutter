import { ColorLightBlack11, ColorLightSlate3 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
  padding: 0.4rem 0;
`;

export const MenuItem = styled.div<{ selected: boolean }>`
  width: fit-content;
  border-radius: 10rem;
  padding: 0.6rem 1.2rem;
  background-color: ${({ selected }) => (selected ? ColorLightBlack11 : ColorLightSlate3)};
`;
