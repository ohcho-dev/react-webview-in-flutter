import UseImgix from "components/common/Imgix";
import useCoachingList from "queries/domain/program/useCoachingList";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "store/common";
import { coachingType } from "types/domain/coaching";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import ProgramCard from "../ProgramCard";
import * as S from "../programListPage.styled";

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
      {coachingList && coachingList[0] && (
        <>
          <S.ProgramTitle>
            <UseImgix srcUrl={"/images/test_coaching.svg"} />
            <S.Title>전문 검사와 함께하는 코칭</S.Title>
          </S.ProgramTitle>
          <S.ListWrap>
            {coachingList[0].map(
              ({ id, name, base_price, price, main_image }: coachingType, index: number) => {
                return (
                  <ProgramCard
                    key={index}
                    id={id}
                    handleCardClick={() => handleCardClick(id)}
                    programImage={main_image}
                    programImageAlt="Coaching Thumbnail"
                    title={name}
                    originalPrice={base_price}
                    price={price}
                    discountPercentage={getDiscountPercentage(base_price, price)}
                    utilVisible={false}
                  />
                );
              },
            )}
          </S.ListWrap>
        </>
      )}
      {/* production 서버에 클래스를 숨긴 상태라서 빈페이지로 노출되기 때문에 임시로 넣어둠 */}
      {/* {!coachingList[0].length && (
        <S.NoCoachingSection>
          <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
          <span>
            태어난 지 12개월 이후부터
            <br />
            프로그램 신청이 가능합니다.
          </span>
        </S.NoCoachingSection>
      )} */}
    </>
  );
};

export default CoachingList;
