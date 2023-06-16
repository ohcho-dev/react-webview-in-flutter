import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 2.5rem;
`;

export const Section = styled.div`
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #000000;
  margin-bottom: 1.2rem;
`;

export const Desc = styled.ol`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.04rem;
  color: #51565b;
  padding: 1.2rem 0;

  li {
    margin-bottom: 0.4rem;

    &:last-child {
      margin-bottom: 1.2rem;
    }
  }
`;
