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
import UseImgix from "../../utils/UseImgix";

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

const NoCoachingSection = styled.div`
  display: flex;
  margin: 4rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 26rem;
    height: 9rem;
    margin-bottom: 3rem;
  }

  span:nth-child(2) {
    display: block;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: #0a0a0a;
    margin-bottom: 1rem;
    text-align: center;
  }
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
            {process.env.REACT_APP_HOST_URL === "https://biz-stg-webview.eltern.kr" &&
              coachingList[0].map((coaching: coachingType, index: number) => {
                if (coaching.id === 7) return false;
                return (
                  <div key={index}>
                    <ProgramCard
                      id={coaching.id}
                      handleCardClick={() => handleCardClick(coaching.id)}
                      programImage="/images/coaching/coaching_new_main_0207.png"
                      programImageAlt="Coaching Thumbnail"
                      title={coaching.name}
                      originalPrice={coaching.base_price}
                      price={coaching.price}
                      discountPercentage={getDiscountPercentage(
                        coaching.base_price,
                        coaching.price,
                      )}
                      utilVisible={false}
                    />
                    {/* {index !== coachingList[0].length - 1 && <Divider />} */}
                  </div>
                );
              })}
            {process.env.REACT_APP_HOST_URL !== "https://biz-stg-webview.eltern.kr" &&
              coachingList[0].map((coaching: coachingType, index: number) => {
                return (
                  <div key={index}>
                    <ProgramCard
                      id={coaching.id}
                      handleCardClick={() => handleCardClick(coaching.id)}
                      programImage="/images/coaching/coaching_new_main_0207.png"
                      programImageAlt="Coaching Thumbnail"
                      title={coaching.name}
                      originalPrice={coaching.base_price}
                      price={coaching.price}
                      discountPercentage={getDiscountPercentage(
                        coaching.base_price,
                        coaching.price,
                      )}
                      utilVisible={false}
                    />
                    {index !== coachingList[0].length - 1 && <Divider />}
                  </div>
                );
              })}
          </ListWrap>
        </>
      )}

      {/* production 서버에 클래스를 숨긴 상태라서 빈페이지로 노출되기 때문에 임시로 넣어둠 */}
      {!coachingList[0].length && (
        <NoCoachingSection>
          <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
          <span>
            태어난 지 12개월 이후부터
            <br />
            프로그램 신청이 가능합니다.
          </span>
        </NoCoachingSection>
      )}
    </>
  );
};

export default CoachingList;
