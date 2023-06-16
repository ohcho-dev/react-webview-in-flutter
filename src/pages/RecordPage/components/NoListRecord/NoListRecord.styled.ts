import styled from "styled-components";

export const ImageWrap = styled.div`
  img {
    width: 100%;
  }
`;

export const EmptyTitle = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: -0.04rem;
  color: #020304;
  text-align: center;
`;

export const EmptyDesc = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: -0.4px;
  color: #9aa0a6;
  padding: 1.2rem 2rem;

  ol {
    margin-left: 1.5rem;

    li {
      list-style-position: inside;
      text-indent: -1.5rem;
    }
  }
`;
