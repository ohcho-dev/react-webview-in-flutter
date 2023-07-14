import UseImgix from "components/common/Imgix";
import useClassList from "queries/domain/program/useClassList";
import { UseQueryResult } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "store/common";
import { ClassDetailType } from "types/domain/program";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import ProgramCard from "../ProgramCard";
import * as S from "../programListPage.styled";

const ClassList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useRecoilValue(selectedChildInfoState);
  const { data: classList } = useClassList(id);

  const handleCardClick = (id: number) => {
    navigate(`/program/class/${id}`, { state: pathname });
  };

  return (
    <>
      {classList.length && (
        <>
          <S.ProgramTitle>
            <UseImgix srcUrl={"/images/expert.svg"} />
            <S.Title>전문가와 함께하는 클래스</S.Title>
          </S.ProgramTitle>
          <S.ListWrap>
            {classList.map(
              ({ id, main_image, name, base_price, price }: ClassDetailType, index: number) => {
                return (
                  <ProgramCard
                    key={index}
                    id={id}
                    handleCardClick={() => handleCardClick(id)}
                    programImage={main_image}
                    programImageAlt="Class Thumbnail"
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
    </>
  );
};

export default ClassList;
