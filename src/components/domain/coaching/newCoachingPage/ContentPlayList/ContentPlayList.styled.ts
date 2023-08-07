import { ColorLight1 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 0.6rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 29.6rem;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1.2rem;
  background: ${ColorLight1};
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.08);
  position: relative;

  img {
    width: 100%;
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: 16rem;
`;

export const CardBlur = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  border-radius: 1.2rem;
  padding: 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 9.5rem;
  }
`;
