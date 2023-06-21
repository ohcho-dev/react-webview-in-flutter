import { getDiscountPercentage } from "../../../../../utils/program/getDiscountPercentage";
import UseImgix from "../../../../common/Imgix";
import { Title } from "../../../../../pages/program/ApplyClassPage/applyClassPage.styled";
import * as S from "./PriceSection.styled";

const PriceSection = (props: { [key: string]: any }): JSX.Element => {
  const { classInfo } = props;
  const numberFormatter = new Intl.NumberFormat("ko");
  return (
    <S.PriceSectionWrapper>
      <Title>가격</Title>
      {classInfo.base_price > 0 && (
        <S.DiscountSection>
          <span>할인</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <S.OriginalPrice>{numberFormatter.format(classInfo.base_price)}원</S.OriginalPrice>
            <S.DiscountPercentage>
              {getDiscountPercentage(classInfo.base_price, classInfo.price)}%
            </S.DiscountPercentage>
          </div>
        </S.DiscountSection>
      )}
      <S.TotalPriceSection>
        <span>결제 가격</span>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <S.Num>{classInfo.total_session}회</S.Num>
          <span style={{ fontSize: "1.8rem", lineHeight: "1.8rem" }}>
            {numberFormatter.format(classInfo.price)}원
          </span>
        </div>
      </S.TotalPriceSection>
      {classInfo.payment_type === "CLPYT_ONSITE" && (
        <S.InformImg>
          <UseImgix alt="inform payment" srcUrl="/images/inform-pay-onsite-img.svg" />
        </S.InformImg>
      )}
    </S.PriceSectionWrapper>
  );
};

export default PriceSection;
