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

  img {
    width: 26rem;
    height: 17rem;
  }
`;
const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
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
          <img alt="inform-image" src="/images/no-end-coaching-img.png" />
        ) : (
          <img alt="inform-image" src="/images/no-applied-coaching-img.png" />
        )}
      </InformImageSection>
      <ProgramTitle>⭐️ {selectedChildInfo.name}를 위한 코칭 추천</ProgramTitle>
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
