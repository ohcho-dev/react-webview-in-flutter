import { useEffect, useState } from "react";

import ProgramPrice from "../ProgramPrice";
import { AgeRange, OnlineOffline } from "../programListPage.styled";
import UseImgix from "../../../../../components/common/Imgix";
import getDday from "../../../../../utils/date/getDday";
import * as S from "./ProgramCard.styled";

interface ProgramCardProps {
  id: number;
  programImage: string;
  programImageAlt?: string;
  title: string;
  isDeadlineComingUp?: boolean;
  ageRange?: string;
  isOnline?: boolean;
  location?: string;
  originalPrice: number;
  price: number;
  discountPercentage: number;
  dateTime?: string;
  utilVisible: boolean;
  purchased?: boolean;
  startDate?: string;
  expiryDate?: string;
  handleCardClick: (id: number) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = props => {
  const {
    id,
    programImage,
    programImageAlt,
    ageRange,
    isOnline,
    title,
    location,
    originalPrice,
    price,
    discountPercentage,
    dateTime,
    handleCardClick,
    utilVisible,
    purchased,
    startDate,
    expiryDate,
  } = props;

  const [DDay, setDDay] = useState(0);

  useEffect(() => {
    const dday = getDday(expiryDate);
    setDDay(dday);
  }, [expiryDate]);

  return (
    <S.ProgramCardWrapper onClick={() => handleCardClick(id)} id={id.toString()}>
      {programImage ? (
        <img src={programImage} alt="program img" style={{ width: "33.5rem", height: "16.8rem" }} />
      ) : (
        <S.CustomNoMainImage>
          <S.CustomNoMainImageText>NO IMAGE</S.CustomNoMainImageText>
        </S.CustomNoMainImage>
      )}
      {/* {isDeadlineComingUp && <div>마감임박</div>} */}
      {utilVisible && (
        <S.ClassInfoSection>
          <OnlineOffline>{isOnline ? "온라인" : "오프라인"}</OnlineOffline>
          <AgeRange>{ageRange}</AgeRange>
        </S.ClassInfoSection>
      )}
      <S.ProgramTitle topMargin={utilVisible}>{title}</S.ProgramTitle>
      {location && <S.ProgramLocation>{location}</S.ProgramLocation>}
      {dateTime && <S.ProgramLocation>{dateTime}</S.ProgramLocation>}
      <S.ProgramPriceSection>
        <ProgramPrice
          id={id}
          discountPercentage={discountPercentage}
          price={price}
          originalPrice={originalPrice}
        />
      </S.ProgramPriceSection>
      {purchased && (
        <S.ProgramStatus>
          <S.ProceedStatus color={DDay < 0 ? "#8D8D8D" : "#00c7b1"}>
            {DDay < 0 ? "종료" : "진행중"}
          </S.ProceedStatus>
          <span>
            {startDate}~{expiryDate}
          </span>
          {DDay > 0 && <span>{DDay}일 남음</span>}
          {DDay === 0 && <span>오늘까지!</span>}
        </S.ProgramStatus>
      )}
    </S.ProgramCardWrapper>
  );
};

export default ProgramCard;
