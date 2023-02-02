import styled from "styled-components";
import ProgramPrice from "./ProgramPrice";
import { useEffect, useState } from "react";
import { AgeRange, OnlineOffline } from "./styled";
import Dday from "../../../utils/Dday";

const ProgramCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 33.55rem;

  margin: 2.5rem 0 1rem 0;
`;

const ProgramImageSection = styled.div`
  position: relative;
  border-radius: 0.8rem;
  width: 33.5rem;
  height: 17rem;
  background: ${(props: { imgUrl: string }) => `url(${props.imgUrl}) 50% 50% no-repeat`};
  background-size: cover;

  div {
    position: absolute;
    left: 1rem;
    top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.5rem;
    height: 2.5rem;

    background-color: #fd7473;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const ClassInfoSection = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

const ProgramTitle = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;

  margin-top: ${(props: { topMargin: boolean }) => (props.topMargin ? "0" : "1rem")};

  // 2줄까지만 노출하면 넘어가면 말줄임 표기
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ProgramLocation = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0.5rem 0 0.5rem 0;
  color: rgba(10, 10, 10, 0.8);
`;

const ProgramPriceSection = styled.div`
  margin: 1rem 0;
`;

const ProgramStatus = styled.div`
  margin-top: 0.5rem;

  span:nth-child(2) {
    margin-left: 0.8rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.8);
  }

  span:nth-child(3) {
    margin-left: 0.5rem;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: #5ac4b1;
  }
`;

const ProceedStatus = styled.span`
  height: 2.4rem;
  background: #ffffff;
  border: 1px solid ${(props: { color: string }) => props.color};
  border-radius: 2rem;
  padding: 0.2rem 0.9rem;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: ${(props: { color: string }) => props.color};
`;

interface ProgramCardProps {
  id: number;
  programImage: string;
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
    isDeadlineComingUp = false,
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
    let dday = Dday(expiryDate);
    setDDay(dday);
  }, [expiryDate]);

  return (
    <ProgramCardWrapper onClick={() => handleCardClick(id)} id={id.toString()}>
      <ProgramImageSection imgUrl={programImage}>
        {/* {isDeadlineComingUp && <div>마감임박</div>} */}
      </ProgramImageSection>
      {utilVisible && (
        <ClassInfoSection>
          <OnlineOffline>{isOnline ? "온라인" : "오프라인"}</OnlineOffline>
          <AgeRange>{ageRange}</AgeRange>
        </ClassInfoSection>
      )}
      <ProgramTitle topMargin={utilVisible}>{title}</ProgramTitle>
      {location && <ProgramLocation>{location}</ProgramLocation>}
      {dateTime && <ProgramLocation>{dateTime}</ProgramLocation>}
      <ProgramPriceSection>
        <ProgramPrice
          discountPercentage={discountPercentage}
          price={price}
          originalPrice={originalPrice}
        />
      </ProgramPriceSection>
      {purchased && (
        <ProgramStatus>
          <ProceedStatus color={DDay < 0 ? "#8D8D8D" : "#00c7b1"}>
            {DDay < 0 ? "종료" : "진행중"}
          </ProceedStatus>
          <span>
            {startDate}~{expiryDate}
          </span>
          {DDay > 0 && <span>{DDay}일 남음</span>}
          {DDay === 0 && <span>오늘까지!</span>}
        </ProgramStatus>
      )}
    </ProgramCardWrapper>
  );
};

export default ProgramCard;
