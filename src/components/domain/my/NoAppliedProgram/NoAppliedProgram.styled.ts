import { ColorLightEltern3, ColorLightEltern9Base } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const NotFoundData = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 25.9rem;
    height: 9rem;
    margin-top: 11rem;
  }
`;

export const TextSection = styled.div``;

export const LinkBtn = styled.div`
  display: flex;
  height: 4.8rem;
  padding: 1.4rem 3.8rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 0.6rem;
  border: 1px solid ${ColorLightEltern9Base};
  background: ${ColorLightEltern3};
`;
