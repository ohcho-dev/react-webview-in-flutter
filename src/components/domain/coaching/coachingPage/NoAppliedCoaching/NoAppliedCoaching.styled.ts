import styled from "styled-components";

export const InformImageSection = styled.div`
  height: 31rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

export const NoCoachingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 26rem;
    height: 9rem;
    margin-bottom: 3rem;
  }

  span:nth-child(2) {
    display: block;
    font-weight: 500;
    font-size: 1.8rem;
    color: #0a0a0a;
    margin-bottom: 1rem;
  }

  span:nth-child(3) {
    font-weight: 400;
    font-size: 1.4rem;
    color: rgba(10, 10, 10, 0.45);
  }
`;

export const ProgramListSection = styled.div`
  display: grid;
  row-gap: 1.5rem;
`;

export const TitleBox = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  margin-bottom: 2rem;
`;
