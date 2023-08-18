import UseImgix from "components/common/Imgix";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import {
  ColorLightBlack12,
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightEltern8,
  ColorLightEltern9Base,
  TextBase1624Medium,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import Text from "components/common/Text";
import * as S from "./AccountPaymentSuccessPage.styled";
import EmptyBox from "components/common/EmptyBox";
import Button from "lds-common/src/components/Button/Button";
import FloatingImgForCoaching from "components/domain/program/FloatingImgForCoaching";
import Icon from "lds-common/src/components/Icon";

const AccountPaymentSuccessPage = () => {
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
      <S.SuccessWrapper>
        <UseImgix srcUrl="/images/checking.svg" />
        <Text
          variant={TextLg1826Semibold}
          color={ColorLightBlack12}
          style={{ marginBottom: "0.4rem" }}
        >
          신청이 완료되었어요!
        </Text>
        <Text
          variant={TextSm1420Regular}
          color={ColorLightBlack6}
          style={{ whiteSpace: "pre-wrap", textAlign: "center" }}
        >
          {`입금 계좌 정보는 MY > 프로그램 신청내역에서\n다시 확인할 수 있습니다.`}
        </Text>
      </S.SuccessWrapper>
      <EmptyBox />
      <S.AccountInfoWrapper>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          결제 정보
        </Text>
        <S.AccountInfoItemWrapper>
          <S.ItemWrapper>
            <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
              결제 방법
            </Text>
            <Text variant={TextBase1624Medium} color={ColorLightBlack9Base}>
              무통장 입금
            </Text>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
              입금 계좌
            </Text>
            <Text variant={TextBase1624Medium} color={ColorLightBlack9Base}>
              카카오뱅크 123-456-789
            </Text>
          </S.ItemWrapper>
          <S.ItemWrapper lastItem>
            <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
              결제 가격
            </Text>
            <Text variant={TextBase1624Medium} color={ColorLightBlack9Base}>
              70,000원
            </Text>
          </S.ItemWrapper>
        </S.AccountInfoItemWrapper>
        <S.InformBox>
          <Icon icon={"info-circle"} size={20} fill={ColorLightEltern8} />
          <Text variant={TextSm1420Regular} color={ColorLightEltern9Base}>
            3일 내에 입금이 되지 않으면 신청이 자동 취소 됩니다.
          </Text>
        </S.InformBox>
      </S.AccountInfoWrapper>
      <FloatingImgForCoaching />
    </LayoutDetailPage>
  );
};

export default AccountPaymentSuccessPage;
