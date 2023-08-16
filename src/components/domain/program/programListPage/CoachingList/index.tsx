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
    <S.CoachingWrapper>
      {coachingList && coachingList[0].length > 0 ? (
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
      ) : (
        <S.NoProgramSection>
          <UseImgix
            alt="inform-img"
            srcUrl="/images/no-coaching-img.png"
            style={{ width: "26rem", height: "9rem" }}
          />
          <span>신청할 수 있는 프로그램이 없습니다.</span>
          <span>발달검사는 12~35개월만 신청할 수 있습니다.</span>
        </S.NoProgramSection>
      )}
    </S.CoachingWrapper>
  );
};

export default CoachingList;
