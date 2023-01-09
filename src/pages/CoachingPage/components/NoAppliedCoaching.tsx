import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuType } from "..";
import { getCoachingList } from "../../../api/programApi";
import { queryKeys } from "../../../constant/queryKeys";
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
  const { data } = useQuery(queryKeys.coachingList, () => getCoachingList());

  const handleCardClick = (id: number) => {
    navigate(`/program/coaching/${id}`);
  };

  return (
    <div>
      <InformImageSection>
        {selectedMenu === "end" ? (
          <img alt="inform-image" src="/images/no-end-coaching-img.svg" />
        ) : (
          <img alt="inform-image" src="/images/no-applied-coaching-img.svg" />
        )}
      </InformImageSection>
      <ProgramTitle>⭐️ 나나를 위한 코칭 추천</ProgramTitle>
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
