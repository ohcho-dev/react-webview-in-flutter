import { ColorLight1 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const LinkItemWrap = styled.div`
  padding: 1.4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const IconTextGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const LinkSection = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
  background: ${ColorLight1};
`;

export const BottomArea = styled.div`
  width: 100%;
  background: #f6f6f6;
  padding: 1.6rem 2.5rem;

  text-align: right;
  span {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.3);
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.3rem;
  clear: both;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  text-decoration-line: underline;

  color: rgba(10, 10, 10, 0.5);
`;
