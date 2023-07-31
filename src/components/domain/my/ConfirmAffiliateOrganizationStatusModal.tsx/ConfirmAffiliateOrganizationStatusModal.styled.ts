import { ColorLightBlack7, ColorLightBlack9Base } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 2rem;
  lignt-height: 3rem;
  color: ${ColorLightBlack9Base};
  margin-bottom: 1.2rem;
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: ${ColorLightBlack7};
  margin-bottom: 5rem;
`;

export const BtnSection = styled.div`
  display: flex;
  column-gap: 1rem;
`;
