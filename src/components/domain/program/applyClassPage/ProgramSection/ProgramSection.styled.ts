import styled from "styled-components";

export const ProgramSectionWrapper = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

export const ClassInfoSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const ProgramInfoSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 2.5rem;

  img {
    width: 10rem;
    height: 8rem;
    border-radius: 0.6rem;
    object-fit: cover;
  }
`;

export const ProgramTitle = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: #000000;
  margin-bottom: 0.4rem;
`;

export const ProgramInfo = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

export const TopWrapper = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
`;
