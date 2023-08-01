import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import LayoutMainPage from "layouts/LayoutMainPage";
import {
  ColorLightBlack7,
  ColorLightBlack9Base,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import * as S from "./NewCoachingPage.styled";

const NewCoachingPage = () => {
  return (
    <LayoutMainPage>
      <S.PageWrapper>
        <S.Section>
          <div>
            <UseImgix srcUrl={"/images/lightbulb.svg"} />
            <div>
              <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
                진행중인 코칭
              </Text>
              <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
                2개
              </Text>
            </div>
          </div>
          <Icon icon={"chevron-down"} size={24} />
        </S.Section>
        <S.Section>
          <UseImgix srcUrl={"/images/record/record_information.svg"} />
          <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
            Q&A
          </Text>
        </S.Section>
        <S.Section>
          <UseImgix srcUrl={"/images/record/record_information.svg"} />
          <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
            Q&A
          </Text>
        </S.Section>
        <S.Section>
          <UseImgix srcUrl={"/images/playy.svg"} />
          <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
            맞춤 놀이
          </Text>
        </S.Section>
      </S.PageWrapper>
    </LayoutMainPage>
  );
};

export default NewCoachingPage;
