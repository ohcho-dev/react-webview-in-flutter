import styled from "styled-components";

export const Wrap = styled.div`
  padding: 9rem 2rem 25.6rem;
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

export const Title = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

export const Content = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-top: 0.2rem;
`;
