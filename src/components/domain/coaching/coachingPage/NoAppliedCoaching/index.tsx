import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { coachingType } from "types/domain/coaching";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import { selectedChildInfoState } from "store/common";
import useCoachingList from "queries/domain/program/useCoachingList";
import UseImgix from "components/common/Imgix";
import ProgramCard from "components/domain/program/programListPage/ProgramCard";
import * as S from "./NoAppliedCoaching.styled";
import Text from "components/common/Text";
import {
  ColorLightBlack12,
  ColorLightSlate9Base,
  TextLg1826Medium,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";

const NoAppliedCoaching = () => {
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
        <S.NoCoachingSection>
          <UseImgix alt="inform-img" srcUrl="/images/no-coaching-img.png" />
          <Text variant={TextLg1826Medium} color={ColorLightBlack12}>
            아직 신청한 코칭이 없어요.
          </Text>
          <Text variant={TextSm1420Regular} color={ColorLightSlate9Base}>
            프로그램 메뉴에서 다양한 코칭을 신청해 보세요.
          </Text>
        </S.NoCoachingSection>
      </S.InformImageSection>
      {data[0].length > 0 && (
        <>
          <S.TitleBox>
            <UseImgix srcUrl={"/images/coaching_star.svg"} />
            <Text variant={TextLg1826Semibold} color={ColorLightBlack12}>
              {`${name}에게 딱 맞는 추천 코칭`}
            </Text>
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
