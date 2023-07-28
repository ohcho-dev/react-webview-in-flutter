import styled from "styled-components";

export const NoRecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`;

export const ImageWrap = styled.div`
  img {
    width: 100%;
  }
`;

export const EmptyDesc = styled.div`
  padding: 1.2rem 2rem;

  ol {
    margin-left: 1.5rem;

    li {
      list-style-position: inside;
      text-indent: -1.5rem;
    }
  }
`;
