import styled from "styled-components";

export const CoachingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  img {
    width: 33.5rem;
    height: 16.9rem;

    object-fit: cover;
    object-position: top;

    border-radius: 0.8rem;
    ${(props: { progressing: boolean }) => !props.progressing && "filter: grayscale(100%)"};
  }
`;

export const CoachingTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 1rem 0;
`;

export const ProgressChip = styled.div`
  width: 5.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 1.4rem;
  color: ${(props: { progressing: boolean }) => (props.progressing ? "#00c7b1" : "#8D8D8D")};

  border: 1px solid
    ${(props: { progressing: boolean }) => (props.progressing ? "#00c7b1" : "#8D8D8D")};
  border-radius: 2rem;
`;

export const Duration = styled.div`
  font-weight: 300;
  font-size: 1.6rem;

  color: rgba(10, 10, 10, 0.8);
`;

export const LeftDays = styled.div`
  color: #5ac4b1;
  font-weight: 600;
  font-size: 1.6rem;
`;
