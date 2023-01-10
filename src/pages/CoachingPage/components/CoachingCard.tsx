import styled from "styled-components";
import { getDate } from "../../../utils/getDateTime";
import { getLeftDaysFromCurrentTime } from "../../../utils/getLeftDaysFromCurrentTime";
import { appliedCoachingType } from "../../../utils/type";

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

const CoachingCard = (props: { coaching: appliedCoachingType }): JSX.Element => {
  const { status, coaching_name, start_date, end_date } = props.coaching;

  return (
    <CoachingCardWrapper progressing={status === "COSTAT_ONGOING" ? true : false}>
      <img alt="coaching-thumnail" src="/images/banner-example.png" />
      <CoachingTitle>{coaching_name}</CoachingTitle>
      <div style={{ display: "flex", columnGap: "0.6rem", alignItems: "center" }}>
        <ProgressChip progressing={status === "COSTAT_ONGOING" ? true : false}>
          {status === "COSTAT_ONGOING" ? "진행중" : "종료"}
        </ProgressChip>
        <Duration>{`${getDate(start_date)}~${getDate(end_date)}`}</Duration>
        {status === "COSTAT_ONGOING" && (
          <LeftDays>{getLeftDaysFromCurrentTime(end_date)}일 남음</LeftDays>
        )}
      </div>
    </CoachingCardWrapper>
  );
};

export default CoachingCard;
