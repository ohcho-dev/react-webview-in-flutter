import styled from "styled-components";
import { getLeftDaysFromCurrentTime } from "../../../utils/getLeftDaysFromCurrentTime";

interface CoachingCardProps {
  coaching: { onGoing: boolean };
}

const CoachingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  img {
    width: 33.5rem;
    height: 16.9rem;
    border-radius: 0.8rem;
    ${(props: { progressing: boolean }) => !props.progressing && "filter: grayscale(100%)"};
  }
`;

const CoachingTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 1rem 0;
`;

const ProgressChip = styled.div`
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

const Duration = styled.div`
  font-weight: 300;
  font-size: 1.6rem;

  color: rgba(10, 10, 10, 0.8);
`;

const LeftDays = styled.div`
  color: #5ac4b1;
  font-weight: 600;
  font-size: 1.6rem;
`;

const CoachingCard: React.FC<CoachingCardProps> = props => {
  const { coaching } = props;
  return (
    <CoachingCardWrapper progressing={coaching.onGoing}>
      <img alt="coaching-thumnail" src="/images/banner-example.png" />
      <CoachingTitle>우리아이 양육 코칭</CoachingTitle>
      <div style={{ display: "flex", columnGap: "0.6rem", alignItems: "center" }}>
        <ProgressChip progressing={coaching.onGoing}>
          {coaching.onGoing ? "진행중" : "종료"}
        </ProgressChip>
        <Duration>2022.10.28~2022.11.14</Duration>
        {coaching.onGoing && (
          <LeftDays>{getLeftDaysFromCurrentTime("2022-12-23T18:21:06.000000Z")}일 남음</LeftDays>
        )}
      </div>
    </CoachingCardWrapper>
  );
};

export default CoachingCard;
