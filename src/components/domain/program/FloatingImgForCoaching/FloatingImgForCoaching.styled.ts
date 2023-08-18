import styled, { keyframes } from "styled-components";

const floatingMove = keyframes`
	 0%{
        transform:translate(0,0);
    }
   100%{
    transform:translate(0,-1rem);
    }
`;

export const FloadingSection = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 0;
  width: 100%;

  animation: ${floatingMove} 1s alternate infinite ease-in-out;
`;
