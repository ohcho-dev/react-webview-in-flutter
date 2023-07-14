import styled from "styled-components";

export const ImgWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NoneImg = styled.span`
  width: 25.9rem;
  height: 9rem;
`;
export const NoneTitle = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-top: 2.8rem;
`;
export const NoneDesc = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.45);
  margin: 0.6rem auto 2.7rem;
`;

export const AlarmListWrap = styled.div`
  height: calc(100vh - 13rem);
  overflow-y: auto;
  margin-top: 6rem;
`;

export const AlarmWrap = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${(prop: { new: any }) => (prop.new ? "#EEF9F7" : "fff")};

  img {
    width: 2.8rem;
    margin-right: 1rem;
  }
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

export const Desc = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-top: 0.5rem;
`;

export const DateTime = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: rgba(10, 10, 10, 0.3);
  margin-top: 0.5rem;
`;
