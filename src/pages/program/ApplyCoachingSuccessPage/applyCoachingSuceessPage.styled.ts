import styled, { keyframes } from "styled-components";

const floatingMove = keyframes`
	 0%{transform:translate(0,0);}
   100%{transform:translate(0,-1rem);}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SuccessImg = styled.span`
  width: 29.7rem;
  height: 16.9rem;
`;

export const FloatingImg = styled.span`
  position: absolute;
  bottom: -1rem;
  width: 33.5rem;

  animation: ${floatingMove} 1s alternate infinite ease-in-out;
`;
