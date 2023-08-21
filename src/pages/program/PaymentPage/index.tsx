import LayoutDetailPage from "layouts/LayoutDetailPage";
import useSelectedCoachingInfo from "queries/domain/program/useSelectedCoachingInfo";
import * as S from "./PaymentPage.styled";
import { useNavigate, useParams } from "react-router-dom";
import Text from "components/common/Text";
import {
  ColorDark1,
  ColorDarkRed9Base,
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack8,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  ColorLightSlate2,
  ColorLightSlate8,
  TextBase1624Medium,
  TextBase1624Regular,
  TextBase1624Semibold,
  TextLg1826Semibold,
  TextSm1420Regular,
  TextXl2030Bold,
} from "lds-common/src/constants/tokens/global";
import EmptyBox from "components/common/EmptyBox";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "store/common";
import { useState } from "react";
import ProgramPrice from "components/domain/program/programListPage/ProgramPrice";
import { getDiscountPercentage } from "utils/program/getDiscountPercentage";
import UseImgix from "components/common/Imgix";
import Button from "lds-common/src/components/Button/Button";
import DiscountItem from "./components/DiscountItem";
import Icon from "lds-common/src/components/Icon";
import CustomModal from "components/common/CustomModal";
import CouponItem from "./components/CouponItem";

const coupon_list: { name: string; desc: string; id: number }[] = [
  {
    name: "4천원 할인 쿠폰",
    desc: "5만원 이상 구매 시 4천원 할인",
    id: 1,
  },
  {
    name: "[썸머 이벤트] 8월 맞이 5% 할인 쿠폰 dfsfdsfdsfds",
    desc: "8만원 이상 구매 시 5% 할인",
    id: 2,
  },
];

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openCouponModal, setOpenCouponModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState("[썸머 이벤트] 8월 맞이 5% 할인 쿠폰");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "virtualAccount">("card");
  const [openDiscountSection, setOpenDiscountSection] = useState(true);
  const { data: coachingInfo } = useSelectedCoachingInfo(id);
  const { name, gender, birth_date } = useRecoilValue(selectedChildInfoState);

  return (
    <LayoutDetailPage
      bottomBtn
      bottomBtnElement={
        <Button
          label={`70,000원 결제하기`}
          backgroundColor={"BLACK"}
          size={"LG"}
          category={"FILLED"}
          isLoading={false}
          fill
          onClick={() =>
            paymentMethod === "card"
              ? navigate("/program/payment/success")
              : navigate("/program/payment/account/success")
          }
        />
      }
    >
      <S.Section>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          프로그램
        </Text>
        <S.ProgramInfoSection>
          <S.NameAndPriceSection>
            <Text variant={TextBase1624Semibold} color={ColorLightBlack8}>
              {coachingInfo[0].name}
            </Text>
            <ProgramPrice
              discountPercentage={getDiscountPercentage(150000, 70000)}
              originalPrice={150000}
              price={70000}
            />
          </S.NameAndPriceSection>
          <S.MainImageWrapper>
            <img src={coachingInfo[0].main_image} alt="program thumbnail" />
          </S.MainImageWrapper>
        </S.ProgramInfoSection>
      </S.Section>
      <EmptyBox backgroundColor={ColorLightSlate2} />
      <S.Section>
        <Text variant={TextBase1624Semibold} color={ColorLightBlack9Base}>
          아이 정보
        </Text>
        <S.ChildInfoWrapper>
          <Text color={ColorLightBlack9Base} variant={TextBase1624Semibold}>
            {name}
          </Text>
          <Text color={ColorLightBlack6} variant={TextBase1624Regular}>{`(${birth_date})`}</Text>
          <Text color={ColorLightBlack6} variant={TextBase1624Regular}>
            {gender === "F" ? "여아" : "남아"}
          </Text>
        </S.ChildInfoWrapper>
        <Text variant={TextBase1624Semibold} color={ColorLightBlack9Base}>
          보호자 정보
        </Text>
        <Text variant={TextBase1624Semibold} color={ColorDarkRed9Base}>
          *
        </Text>
      </S.Section>
      <EmptyBox backgroundColor={ColorLightSlate2} />
      <S.Section>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          쿠폰
        </Text>
        <S.CouponBox onClick={() => setOpenCouponModal(true)}>
          {selectedCoupon ? (
            <Text variant={TextBase1624Semibold} color={ColorLightBlack9Base}>
              {selectedCoupon}
            </Text>
          ) : (
            <>
              <Text variant={TextBase1624Semibold} color={ColorLightBlack9Base}>
                사용 가능 쿠폰 1장
              </Text>
              <Text variant={TextBase1624Regular} color={ColorLightBlack6}>
                / 전체 3장
              </Text>
            </>
          )}
          <Icon icon={"chevron-down"} size={24} fill={ColorLightSlate8} />
        </S.CouponBox>
      </S.Section>
      <EmptyBox backgroundColor={ColorLightSlate2} />
      <S.Section>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          결제 방법
        </Text>
        <S.PaymentMethodSection>
          <S.PaymentBtn
            selected={paymentMethod === "card"}
            onClick={() => setPaymentMethod(prev => (prev === "card" ? "virtualAccount" : "card"))}
          >
            <Text
              variant={paymentMethod === "card" ? TextBase1624Medium : TextBase1624Regular}
              color={paymentMethod === "card" ? ColorLightEltern9Base : ColorLightBlack7}
            >
              신용카드
            </Text>
          </S.PaymentBtn>
          <S.PaymentBtn
            selected={paymentMethod === "virtualAccount"}
            onClick={() => setPaymentMethod(prev => (prev === "card" ? "virtualAccount" : "card"))}
          >
            <Text
              variant={
                paymentMethod === "virtualAccount" ? TextBase1624Medium : TextBase1624Regular
              }
              color={paymentMethod === "virtualAccount" ? ColorLightEltern9Base : ColorLightBlack7}
            >
              무통장입금
            </Text>
          </S.PaymentBtn>
        </S.PaymentMethodSection>
      </S.Section>
      <EmptyBox backgroundColor={ColorLightSlate2} />
      <S.Section>
        <S.TitleSection>
          <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
            최종 결제 금액
          </Text>
          <div onClick={() => setOpenDiscountSection(prev => !prev)}>
            <Icon
              icon={openDiscountSection ? "chevron-up" : "chevron-down"}
              size={24}
              fill={ColorLightSlate8}
            />
          </div>
        </S.TitleSection>
        <S.DiscountSection open={openDiscountSection}>
          <DiscountItem title={"할인"} discount_amount={75000} discount_percentage={50} />
        </S.DiscountSection>
        <S.TotalPriceSection>
          <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
            결제 가격
          </Text>
          <S.Price>
            <Text
              variant={TextBase1624Regular}
              color={ColorLightBlack9Base}
              style={{ marginRight: "0.4rem" }}
            >
              1회
            </Text>
            <Text variant={TextXl2030Bold} color={ColorDark1}>
              70,000
            </Text>
            <Text
              variant={TextBase1624Regular}
              color={ColorLightBlack9Base}
              style={{ marginRight: "0.2rem" }}
            >
              원
            </Text>
          </S.Price>
        </S.TotalPriceSection>
      </S.Section>
      <EmptyBox backgroundColor={ColorLightSlate2} />
      <S.Section style={{ padding: "1.6rem 0 3rem 0" }}>
        <UseImgix srcUrl={"/images/checklist_before_payment.svg"} style={{ width: "100%" }} />
      </S.Section>
      <CustomModal
        isOpen={openCouponModal}
        toggleModal={() => setOpenCouponModal(prev => !prev)}
        title={"쿠폰 선택"}
        okBtnName="확인"
        cancelBtn
        cancelBtnName="취소"
      >
        <S.CouponModalWrapper>
          {coupon_list.map(coupon => (
            <CouponItem info={coupon} checked={true} key={coupon.id} />
          ))}
        </S.CouponModalWrapper>
      </CustomModal>
    </LayoutDetailPage>
  );
};

export default PaymentPage;
