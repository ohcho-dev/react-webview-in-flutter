import styled from "styled-components";

export const Wrap = styled.div`
  height: 41.2rem;
  position: relative;

  img,
  picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0 -4rem 2rem rgba(213, 213, 213, 0.2);
  }
`;
