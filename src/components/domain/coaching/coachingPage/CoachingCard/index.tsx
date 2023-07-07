import getDday from "../../../../../utils/date/getDday";
import * as S from "./CoachingCard.styled";
import { getDate } from "../../../../../utils/date/getDateTime";
import UseImgix from "../../../../common/Imgix";
import { AppliedCoachingType } from "../../../../../types/apis/program";
import {
  NoMainImage,
  NoMainImageText,
} from "components/domain/program/programListPage/ProgramCard/ProgramCard.styled";

const CoachingCard = (props: { coaching: AppliedCoachingType; alt: string }): JSX.Element => {
  const { status, coaching_name, start_date, end_date, main_image } = props.coaching;
  const { alt } = props;

  return (
    <S.CoachingCardWrapper progressing={status === "COSTAT_ONGOING"}>
      {main_image ? (
        <img src={main_image} alt="program img" style={{ width: "33.5rem", height: "16.8rem" }} />
      ) : (
        <NoMainImage>
          <NoMainImageText>NO IMAGE</NoMainImageText>
        </NoMainImage>
      )}
      <S.CoachingTitle>{coaching_name}</S.CoachingTitle>
      <div style={{ display: "flex", columnGap: "0.6rem", alignItems: "center" }}>
        <S.ProgressChip progressing={status === "COSTAT_ONGOING"}>
          {status === "COSTAT_ONGOING" ? "진행중" : "종료"}
        </S.ProgressChip>
        <S.Duration>{`${getDate(start_date)}~${getDate(end_date)}`}</S.Duration>
        {getDday(end_date) > 0 && <S.LeftDays>{getDday(end_date)}일 남음</S.LeftDays>}
        {getDday(end_date) === 0 && <S.LeftDays>오늘까지!</S.LeftDays>}
      </div>
    </S.CoachingCardWrapper>
  );
};

export default CoachingCard;
