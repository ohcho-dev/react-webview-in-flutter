import styled from "styled-components";

export const LinkItemWrap = styled.div`
  padding: 0 2.5rem;
  background: #fff;

  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(9) {
    border-bottom: solid 1rem #f6f6f6;

    > div {
      border-bottom: 0;
    }
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 0.05rem solid rgba(0, 0, 0, 0.15);
  }
`;

export const IconTextGroup = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 0.8rem;
  }
  span {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    letter-spacing: -0.04rem;
    color: #0a0a0a;
    opacity: 0.8;
  }
`;

export const BottomArea = styled.div`
  width: 100%;
  background: #f6f6f6;
  padding: 0 2.5rem;

  text-align: right;
  span {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.3);
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.3rem;
  clear: both;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  text-decoration-line: underline;

  color: rgba(10, 10, 10, 0.5);
`;
