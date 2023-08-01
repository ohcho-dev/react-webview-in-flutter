import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import TestItem from "components/domain/coaching/coachingDetailPage/TestItem";
import LayoutMainPage from "layouts/LayoutMainPage";
import {
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightSlate2,
  ColorLightSlate8,
  TextLg1826Semibold,
  TextSm1420Regular,
  TextXl2030Bold,
} from "lds-common/src/constants/tokens/global";
import { useNavigate } from "react-router-dom";
import * as S from "./NewCoachingPage.styled";

const NewCoachingPage = () => {
  const navigate = useNavigate();
  return (
    <LayoutMainPage style={{ background: ColorLightSlate2 }}>
      <S.PageWrapper>
        <S.TopSection>
          <S.TopSectionWrapper>
            <UseImgix srcUrl={"/images/lightbulb.svg"} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
                진행중인 코칭
              </Text>
              <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
                2개
              </Text>
            </div>
          </S.TopSectionWrapper>
          <Icon icon={"chevron-down"} size={24} fill={ColorLightSlate8} />
        </S.TopSection>
        <S.Section onClick={() => navigate("/coaching/qna/1")}>
          <UseImgix srcUrl={"/images/record/record_information.svg"} />
          <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
            Q&A
          </Text>
        </S.Section>
        <S.Section onClick={() => navigate("/coaching/content-list")}>
          <UseImgix srcUrl={"/images/playy.svg"} />
          <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
            맞춤 놀이
          </Text>
        </S.Section>
        <S.TestSection>
          <Text variant={TextXl2030Bold} color={ColorLightBlack9Base}>
            검사
          </Text>
          <TestItem
            imgUrl={"/images/record/record_play_4040.svg"}
            coachingName={"놀이 코칭"}
            testName={"검사 이름"}
            status={"진행중"}
            expirationDate={"2023.05.21"}
            daysleft={20}
          />
        </S.TestSection>
      </S.PageWrapper>
    </LayoutMainPage>
  );
};

export default NewCoachingPage;
