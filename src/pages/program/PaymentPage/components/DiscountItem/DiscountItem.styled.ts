import { ColorLightSlate4 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${ColorLightSlate4};
`;
export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;
