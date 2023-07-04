import UseImgix from "components/common/Imgix";
import useClassList from "queries/domain/program/useClassList";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "store/common";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import ProgramCard from "../ProgramCard";
import { Divider } from "../programListPage.styled";
import * as S from "./ClassList.styled";

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
      {classList[0] && (
        <S.ProgramTitle>
          <UseImgix srcUrl={"/images/expert.svg"} />
          <S.Title>전문가와 함께하는 클래스</S.Title>
        </S.ProgramTitle>
      )}
      {classList.map((singleClass: { [key: string]: any }, index: number) => {
        return (
          <div key={index}>
            <ProgramCard
              id={singleClass.id}
              handleCardClick={() => handleCardClick(singleClass.id)}
              programImage="/images/class/class_04.png"
              programImageAlt="Class Thumbnail"
              title={singleClass.name}
              originalPrice={singleClass.base_price}
              price={singleClass.price}
              discountPercentage={getDiscountPercentage(singleClass.base_price, singleClass.price)}
              utilVisible={false}
            />
            {index !== classList.length - 1 && <Divider />}
          </div>
        );
      })}
    </>
  );
};

export default ClassList;
