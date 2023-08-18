import { ColorLightEltern3, ColorLightSlate4 } from "lds-common/src/constants/tokens/global";
import styled, { keyframes } from "styled-components";

const floatingMove = keyframes`
	 0%{
        transform:translate(0,0);
    }
   100%{
    transform:translate(0,-1rem);
    }
`;

export const SuccessWrapper = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 3.2rem;
`;

export const AccountInfoWrapper = styled.div`
  padding: 1.6rem 2rem 0 2rem;
`;

export const InformBox = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.4rem;
  padding: 1.6rem 1.2rem;
  background-color: ${ColorLightEltern3};
  border-radius: 0.8rem;
`;

export const AccountInfoItemWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const ItemWrapper = styled.div<{ lastItem?: boolean }>`
  display: flex;
  justify-content: space-between;

  padding-bottom: 0.8rem;
  border-bottom: ${({ lastItem }) => (lastItem ? "none" : `1px solid ${ColorLightSlate4}`)};
`;
