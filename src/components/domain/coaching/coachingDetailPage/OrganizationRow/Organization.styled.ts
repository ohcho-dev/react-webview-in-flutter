import { ColorLightBlack5 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const OrganizationRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`;

export const OrganizationText = styled.span`
  font-size: 1.4rem;

  font-weight: 400;
  line-height: 2rem;

  color: ${ColorLightBlack5};
`;
