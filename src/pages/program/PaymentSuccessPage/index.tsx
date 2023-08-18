import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import FloatingImgForCoaching from "components/domain/program/FloatingImgForCoaching";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import Button from "lds-common/src/components/Button/Button";
import {
  ColorLightBlack12,
  ColorLightBlack6,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import * as S from "./PaymentSuccessPage.styled";

const PaymentSuccessPage = () => {
  return (
    <LayoutDetailPage
      hideTitleBar
      bottomBtn
      bottomBtnElement={
        <Button
          label={"확인"}
          backgroundColor={"BLACK"}
          size={"LG"}
          category={"FILLED"}
          isLoading={false}
          fill
        />
      }
    >
      <S.Wrapper>
        <UseImgix srcUrl="/images/checking.svg" />
        <Text
          variant={TextLg1826Semibold}
          color={ColorLightBlack12}
          style={{ marginBottom: "0.4rem" }}
        >
          신청이 완료되었어요!
        </Text>
        <Text variant={TextSm1420Regular} color={ColorLightBlack6}>
          신청 내역은 마이페이지에서 확인 가능해요.
        </Text>
      </S.Wrapper>
      <FloatingImgForCoaching />
    </LayoutDetailPage>
  );
};

export default PaymentSuccessPage;
