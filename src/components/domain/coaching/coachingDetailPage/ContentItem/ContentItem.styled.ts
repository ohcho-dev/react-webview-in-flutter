import styled from "styled-components";

export const ItemWrap = styled.div`
  width: calc(100% - 4rem);
  padding: 1.2rem;
  margin: 0 auto;
  background: #f8f8f8;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  display: flex;
  position: relative;
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 8rem;
  }
`;

export const ImageWrap = styled.div`
  margin-right: 1.4rem;
  img {
    width: 9.8rem;
    height: 8.6rem;
  }
`;

export const ItemDesc = styled.div`
  margin-top: 0.6rem;
  max-width: 60%;
`;

export const ChipLayout = styled.div`
  div {
    margin-right: 0.4rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ItemTitle = styled.div`
  margin-top: 0.8rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #282828;
`;

export const ArrowBtn = styled.span`
  position: absolute;
  top: 50%;
  right: 1.8rem;
  transform: translate(0, -50%);
`;
