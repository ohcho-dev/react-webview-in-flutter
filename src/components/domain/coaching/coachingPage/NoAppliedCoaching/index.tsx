import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MenuType } from "pages/coaching/CoachingPage";
import { coachingType } from "types/domain/coaching";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import { selectedChildInfoState } from "store/common";
import useCoachingList from "queries/domain/program/useCoachingList";
import UseImgix from "components/common/Imgix";
import ProgramCard from "components/domain/program/programListPage/ProgramCard";
import { Divider } from "components/domain/program/programListPage/programListPage.styled";
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
      {!!data[0].length && <S.ProgramTitle>⭐️ {name}에게 딱 맞는 추천 코칭</S.ProgramTitle>}
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
