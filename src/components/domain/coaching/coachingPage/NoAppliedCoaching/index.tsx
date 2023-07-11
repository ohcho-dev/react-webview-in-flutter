import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MenuType } from "pages/coaching/CoachingPage";
import { coachingType } from "types/domain/coaching";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import { selectedChildInfoState } from "store/common";
import useCoachingList from "queries/domain/program/useCoachingList";
import UseImgix from "components/common/Imgix";
import ProgramCard from "components/domain/program/programListPage/ProgramCard";
import * as S from "./NoAppliedCoaching.styled";

interface NoAppliedCoachingPropsType {
  selectedMenu?: MenuType;
}

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
      <S.InformImageSection>
        {selectedMenu === "end" ? (
          <S.NoCoachingSection>
            <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
            <span>아직 종료한 코칭이 없어요.</span>
            <span>코칭 종료까지 응원할게요!</span>
          </S.NoCoachingSection>
        ) : (
          <S.NoCoachingSection>
            <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
            <span>아직 신청한 코칭이 없어요.</span>
            <span>우리 아이 맞춤 코칭을 바로 신청해 보세요.</span>
          </S.NoCoachingSection>
        )}
      </S.InformImageSection>
      {data[0].length > 0 && (
        <>
          <S.TitleBox>
            <UseImgix srcUrl={"/images/coaching_star.svg"} />
            <S.ProgramTitle>{name}에게 딱 맞는 추천 코칭</S.ProgramTitle>
          </S.TitleBox>
          <S.ProgramListSection>
            {data[0].map(
              ({ id, name, price, base_price, main_image }: coachingType, index: number) => {
                return (
                  <ProgramCard
                    key={index}
                    id={id}
                    handleCardClick={() => handleCardClick(id)}
                    programImage={main_image}
                    programImageAlt="Coaching Thumbnail"
                    isDeadlineComingUp
                    title={name}
                    originalPrice={base_price}
                    price={price}
                    discountPercentage={getDiscountPercentage(base_price, price)}
                    utilVisible={false}
                  />
                );
              },
            )}
          </S.ProgramListSection>
        </>
      )}
    </div>
  );
};

export default NoAppliedCoaching;
