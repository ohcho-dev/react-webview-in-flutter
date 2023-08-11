import { ColorLightEltern3, ColorLightSlate7 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const CouponWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 0rem 0rem 0.1rem 0.1rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.3rem;
  position: relative;
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 2.5rem 1.2rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  z-index: 1;
`;
export const DateSection = styled.div`
  width: calc(100% - 0.2rem);
  margin-left: -0.1rem;
  height: 3.6rem;
  display: flex;
  padding: 0.8rem 2.5rem;
  align-items: center;
  border-radius: 0rem 0rem 1.1rem 1.1rem;
  border-top: 0.1rem dashed ${ColorLightSlate7};
  background: ${ColorLightEltern3};
  z-index: 1;
`;
