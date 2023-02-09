import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { MenuType } from "..";
import { getCoachingList } from "../../../api/programApi";
import { queryKeys } from "../../../constant/queryKeys";
import { selectedChildInfoState } from "../../../recoil/atom";
import { getDiscountPercentage } from "../../../utils/getDiscountPercentage";
import { coachingType } from "../../../utils/type";
import ProgramCard from "../../ProgramPage/components/ProgramCard";
import { Divider } from "../../ProgramPage/components/styled";

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

const NoEndCoachingImg = styled.img`
  width: 26rem;
  height: 17rem;
`;

const NoAppliedCoaching = (props: NoAppliedCoachingPropsType) => {
  const { selectedMenu } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data } = useQuery(queryKeys.coachingList, () => getCoachingList());
  const selectedChildInfo = useRecoilValue(selectedChildInfoState);

  const handleCardClick = (id: number) => {
    navigate(`/program/coaching/${id}`, { state: pathname });
  };

  return (
    <div>
      <InformImageSection>
        {selectedMenu === "end" ? (
          <NoCoachingSection>
            <img alt="inform-image" src="/images/no-coaching-img.png" />
            <span>아직 종료한 코칭이 없어요.</span>
            <span>코칭 종료까지 응원할게요!</span>
          </NoCoachingSection>
        ) : (
          <NoCoachingSection>
            <img alt="inform-image" src="/images/no-coaching-img.png" />
            <span>아직 신청한 코칭이 없어요.</span>
            <span>우리 아이 맞춤 코칭을 바로 신청해 보세요.</span>
          </NoCoachingSection>
        )}
      </InformImageSection>
      <ProgramTitle>⭐️ {selectedChildInfo.name}에게 딱 맞는 추천 코칭</ProgramTitle>
      {data[0].map((coaching: coachingType, index: number) => {
        return (
          <div key={index}>
            <ProgramCard
              id={coaching.id}
              handleCardClick={() => handleCardClick(coaching.id)}
              programImage={coaching.main_image}
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
