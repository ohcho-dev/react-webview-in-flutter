import getDday from "../../../../../utils/date/getDday";
import * as S from "./CoachingCard.styled";
import { getDate } from "../../../../../utils/date/getDateTime";
import { AppliedCoachingType } from "../../../../../types/apis/program";
import {
  CustomNoMainImage,
  CustomNoMainImageText,
} from "components/domain/program/programListPage/ProgramCard/ProgramCard.styled";
import { getLeftDayString } from "utils/date/getLeftDayString";

interface CoachingCardProps {
  coaching: AppliedCoachingType;
}

const CoachingCard = ({ coaching }: CoachingCardProps): JSX.Element => {
  const { status, coaching_name, start_date, end_date, main_image } = coaching;

  return (
    <S.CoachingCardWrapper progressing={status === "COSTAT_ONGOING"}>
      {main_image ? (
        <img src={main_image} alt="program img" style={{ width: "33.5rem", height: "16.8rem" }} />
      ) : (
        <CustomNoMainImage>
          <CustomNoMainImageText>NO IMAGE</CustomNoMainImageText>
        </CustomNoMainImage>
      )}
      <S.CoachingTitle>{coaching_name}</S.CoachingTitle>
      <div style={{ display: "flex", columnGap: "0.6rem", alignItems: "center" }}>
        <S.ProgressChip progressing={status === "COSTAT_ONGOING"}>
          {status === "COSTAT_ONGOING" ? "진행중" : "종료"}
        </S.ProgressChip>
        <S.Duration>{`${getDate(start_date)}~${getDate(end_date)}`}</S.Duration>
        {status !== "COSTAT_END" && <S.LeftDays>{getLeftDayString(getDday(end_date))}</S.LeftDays>}
      </div>
    </S.CoachingCardWrapper>
  );
};

export default CoachingCard;
