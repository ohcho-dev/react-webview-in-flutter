import styled, { css } from "styled-components";

export const MainTransitionGroup = styled.div<{ timeout: number }>`
  position: relative;
  width: 100%;
  padding: 0 15px;
  /* overflow: hidden; */

  ${({ timeout = 300 }) => css`
    .scale-enter {
      opacity: 0;
      transform: scale(1);
    }

    .scale-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity ${timeout}ms, transform ${timeout}ms;
    }

    .scale-exit {
      opacity: 1;
      transform: scale(1);
    }

    .scale-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity ${timeout / 3}ms, transform ${timeout / 3}ms;
    }
  `}}
`;

export const MainTransitionWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
