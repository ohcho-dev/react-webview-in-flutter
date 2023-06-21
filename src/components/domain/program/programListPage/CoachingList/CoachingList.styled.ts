import styled from "styled-components";

export const ListWrap = styled.div`
  margin-bottom: 3rem;
`;

export const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

export const Title = styled.span`
  margin-left: 0.4rem;
`;

export const NoCoachingSection = styled.div`
  display: flex;
  margin: 4rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 26rem;
    height: 9rem;
    margin-bottom: 3rem;
  }

  span:nth-child(2) {
    display: block;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: #0a0a0a;
    margin-bottom: 1rem;
    text-align: center;
  }
`;
