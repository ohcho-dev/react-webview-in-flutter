import UseImgix from "components/common/Imgix";
import useCoachingList from "queries/domain/program/useCoachingList";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "store/common";
import { coachingType } from "types/domain/coaching";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import ProgramCard from "../ProgramCard";
import { Divider } from "../programListPage.styled";
import * as S from "./CoachingList.styled";

const CoachingList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useRecoilValue(selectedChildInfoState);

  const { data: coachingList } = useCoachingList(id);

  const handleCardClick = (id: number) => {
    navigate(`/program/coaching/${id}`, { state: pathname });
  };

  return (
    <>
      {coachingList && coachingList[0][0] && (
        <>
          <S.ProgramTitle>
            🙌🏻 <S.Title>전문 검사와 함께하는 코칭</S.Title>
          </S.ProgramTitle>
          <S.ListWrap>
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
          </S.ListWrap>
        </>
      )}

      {/* production 서버에 클래스를 숨긴 상태라서 빈페이지로 노출되기 때문에 임시로 넣어둠 */}
      {!coachingList[0].length && (
        <S.NoCoachingSection>
          <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
          <span>
            태어난 지 12개월 이후부터
            <br />
            프로그램 신청이 가능합니다.
          </span>
        </S.NoCoachingSection>
      )}
    </>
  );
};

export default CoachingList;
