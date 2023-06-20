import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { MenuType } from "../../../../pages/coaching/CoachingPage";
import { coachingType } from "../../../../types/domain/coaching";
import { getDiscountPercentage } from "../../../../utils/program/getDiscountPercentage";
import UseImgix from "../../../common/Imgix";
import { selectedChildInfoState } from "../../../../store/common";
import ProgramCard from "../../program/programListPage/ProgramCard";
import { Divider } from "../../program/programListPage/styled";
import useCoachingList from "../../../../queries/domain/program/useCoachingList";

interface NoAppliedCoachingPropsType {
  selectedMenu?: MenuType;
}

const InformImageSection = styled.div`
  height: 31rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

const NoCoachingSection = styled.div`
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

const NoAppliedCoaching = (props: NoAppliedCoachingPropsType) => {
  const { selectedMenu } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id, name } = useRecoilValue(selectedChildInfoState);
  const { data } = useCoachingList(id);
  const handleCardClick = (id: number) => {
    navigate(`/program/coaching/${id}`, { state: pathname });
  };

  return (
    <div>
      <InformImageSection>
        {selectedMenu === "end" ? (
          <NoCoachingSection>
            <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
            <span>아직 종료한 코칭이 없어요.</span>
            <span>코칭 종료까지 응원할게요!</span>
          </NoCoachingSection>
        ) : (
          <NoCoachingSection>
            <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
            <span>아직 신청한 코칭이 없어요.</span>
            <span>우리 아이 맞춤 코칭을 바로 신청해 보세요.</span>
          </NoCoachingSection>
        )}
      </InformImageSection>
      {!!data[0].length && <ProgramTitle>⭐️ {name}에게 딱 맞는 추천 코칭</ProgramTitle>}
      {data[0].map((coaching: coachingType, index: number) => {
        return (
          <div key={index}>
            <ProgramCard
              id={coaching.id}
              handleCardClick={() => handleCardClick(coaching.id)}
              programImage="/images/coaching/coaching_new_main_0207.png"
              programImageAlt="Coaching Thumbnail"
              isDeadlineComingUp
              title={coaching.name}
              originalPrice={coaching.base_price}
              price={coaching.price}
              discountPercentage={getDiscountPercentage(coaching.base_price, coaching.price)}
              utilVisible={false}
            />
            {index !== data[0].length - 1 && <Divider />}
          </div>
        );
      })}
    </div>
  );
};

export default NoAppliedCoaching;
