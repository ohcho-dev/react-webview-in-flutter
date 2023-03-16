import Cookies from "js-cookie";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getCoachingList } from "../../api/programApi";
import { CHILD_ID_FIELD } from "../../constant/localStorage";
import { queryKeys } from "../../constant/queryKeys";
import { selectedChildInfoState } from "../../recoil/atom";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";
import { coachingType } from "../../utils/type";
import ProgramCard from "./components/ProgramCard";
import { Divider } from "./components/styled";

const ListWrap = styled.div`
  margin-bottom: 3rem;
`;

const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

const Title = styled.span`
  margin-left: 0.4rem;
`;

const CoachingList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useRecoilValue(selectedChildInfoState);

  const { refetch, data: coachingList = [[]] } = useQuery(
    queryKeys.coachingList,
    () => getCoachingList(),
    {
      enabled: !!Cookies.get("token") && !!window.localStorage.getItem(CHILD_ID_FIELD),
    },
  );

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  const handleCardClick = (id: number) => {
    navigate(`/program/coaching/${id}`, { state: pathname });
  };

  return (
    <>
      {coachingList && coachingList[0][0] && (
        <>
          <ProgramTitle>
            🙌🏻 <Title>전문 검사와 함께하는 코칭</Title>
          </ProgramTitle>
          <ListWrap>
            {coachingList[0].map((coaching: coachingType, index: number) => {
              return (
                <div key={index}>
                  <ProgramCard
                    id={coaching.id}
                    handleCardClick={() => handleCardClick(coaching.id)}
                    programImage="/images/coaching/coaching_new_main_0207.png"
                    title={coaching.name}
                    originalPrice={coaching.base_price}
                    price={coaching.price}
                    discountPercentage={getDiscountPercentage(coaching.base_price, coaching.price)}
                    utilVisible={false}
                  />
                  {index !== coachingList[0].length - 1 && <Divider />}
                </div>
              );
            })}
          </ListWrap>
        </>
      )}
    </>
  );
};

export default CoachingList;
