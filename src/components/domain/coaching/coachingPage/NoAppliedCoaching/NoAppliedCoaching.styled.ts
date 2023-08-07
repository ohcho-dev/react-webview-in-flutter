import styled from "styled-components";

export const InformImageSection = styled.div`
  height: 31rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
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
