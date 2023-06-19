import styled from "styled-components";
import { Title } from "..";
import { getDiscountPercentage } from "../../../utils/program/getDiscountPercentage";
import UseImgix from "../../../components/common/Imgix";

const PriceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

const DiscountSection = styled.div`
  height: 3rem;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

const OriginalPrice = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  text-decoration-line: line-through;

  margin-right: 0.5rem;

  color: #9d9d9d;
`;

const DiscountPercentage = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fd7473;
`;

const TotalPriceSection = styled.div`
  height: 2rem;
  margin-top: 1rem;

  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 700;
`;

const InformImg = styled.span`
  width: 100%;
  margin-top: 2rem;
`;

const Num = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: rgba(10, 10, 10, 0.8);

  margin-right: 0.5rem;
`;

const PriceSection = (props: { [key: string]: any }): JSX.Element => {
  const { classInfo } = props;
  const numberFormatter = new Intl.NumberFormat("ko");
  return (
    <PriceSectionWrapper>
      <Title>가격</Title>
      {classInfo.base_price > 0 && (
        <DiscountSection>
          <span>할인</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <OriginalPrice>{numberFormatter.format(classInfo.base_price)}원</OriginalPrice>
            <DiscountPercentage>
              {getDiscountPercentage(classInfo.base_price, classInfo.price)}%
            </DiscountPercentage>
          </div>
        </DiscountSection>
      )}
      <TotalPriceSection>
        <span>결제 가격</span>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Num>{classInfo.total_session}회</Num>
          <span style={{ fontSize: "1.8rem", lineHeight: "1.8rem" }}>
            {numberFormatter.format(classInfo.price)}원
          </span>
        </div>
      </TotalPriceSection>
      {classInfo.payment_type === "CLPYT_ONSITE" && (
        <InformImg>
          <UseImgix alt="inform payment" srcUrl="/images/inform-pay-onsite-img.svg" />
        </InformImg>
      )}
    </PriceSectionWrapper>
  );
};

export default PriceSection;
