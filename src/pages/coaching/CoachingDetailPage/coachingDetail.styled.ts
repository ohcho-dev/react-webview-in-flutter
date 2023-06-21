import styled from "styled-components";

export const PageTitleWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: solid 0.2rem #f5f5f5;
  padding: 2rem 2.5rem;
  z-index: 100;
`;

export const ShadowBox = styled.div`
  position: fixed;
  top: 10.2rem;
  left: 0;
  width: 100%;
  height: 1px;
  box-shadow: ${(props: { scrolling: boolean }) =>
    props.scrolling ? "rgba(0, 0, 0, 0.1) 0px 1px 15px" : ""};
  transition: box-shadow 0.5s ease;
`;
export const ListScroll = styled.div`
  width: 100%;
  height: calc(100vh - 16rem);
  margin-top: 10rem;
  overflow-y: scroll;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #000000;
`;

export const ProgramStatus = styled.div`
  margin-top: 0.8rem;

  span:nth-child(2) {
    margin-left: 0.5rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(0, 0, 0, 0.3);
  }

  span:nth-child(3) {
    margin-left: 0.5rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const ProceedStatus = styled.span`
  height: 2.4rem;
  background: #ffffff;
  border: 1px solid ${(props: { color: string }) => props.color};
  border-radius: 2rem;
  padding: 0.2rem 0.9rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: ${(props: { color: string }) => props.color};
`;

export const DetailTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  display: flex;
  align-items: center;
  padding: 2.6rem 2rem 1.2rem;
`;
