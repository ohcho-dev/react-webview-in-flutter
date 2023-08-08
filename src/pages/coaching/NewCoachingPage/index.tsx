import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import TestItem from "components/domain/coaching/coachingDetailPage/TestItem";
import NoAppliedCoaching from "components/domain/coaching/coachingPage/NoAppliedCoaching";
import Switch from "components/domain/coaching/newCoachingPage/Switch";
import LayoutMainPage from "layouts/LayoutMainPage";
import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  ColorLightSlate2,
  ColorLightSlate8,
  ContentsBase1626Medium,
  ContentsBase1626Regular,
  ContentsBase1626Semibold,
  TextLg1826Semibold,
} from "lds-common/src/constants/tokens/global";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./NewCoachingPage.styled";

const NewCoachingPage = () => {
  const navigate = useNavigate();
  const appliedCoachingList = [""];
  const [toggle, setToggle] = useState(true);
  return (
    <LayoutMainPage style={{ background: ColorLightSlate2 }}>
      <S.PageWrapper>
        {appliedCoachingList.length ? (
          <>
            <Switch
              toggleSwitch={() => setToggle(prev => !prev)}
              checked={toggle}
              leftSection={
                <Text variant={ContentsBase1626Medium} color={ColorLightBlack6}>
                  진행 중인 코칭
                </Text>
              }
              rightSection={
                <Text variant={ContentsBase1626Medium} color={ColorLightBlack6}>
                  종료된 코칭
                </Text>
              }
              customSelectedLeftSection={
                <Text variant={ContentsBase1626Semibold} color={ColorLightBlack9Base}>
                  진행 중인 코칭
                </Text>
              }
              customSelectedRightSection={
                <Text variant={ContentsBase1626Semibold} color={ColorLightBlack9Base}>
                  종료된 코칭
                </Text>
              }
            />
            <Switch
              toggleSwitch={() => setToggle(prev => !prev)}
              checked={toggle}
              leftSection={
                <S.Wrapper>
                  <UseImgix srcUrl="/images/new-coaching/sprout.svg" />
                  <Text variant={ContentsBase1626Regular} color={ColorLightBlack6}>
                    놀이를 어려워해요
                  </Text>
                </S.Wrapper>
              }
              rightSection={
                <S.Wrapper>
                  <UseImgix srcUrl="/images/new-coaching/twingkle.svg" />
                  <Text variant={ContentsBase1626Regular} color={ColorLightBlack6}>
                    능숙하게 잘해요
                  </Text>
                </S.Wrapper>
              }
            />
            <S.Section onClick={() => navigate("/coaching/qna")}>
              <S.SectionTitle>
                <UseImgix srcUrl={"/images/record/record_information.svg"} />
                <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
                  Q&A
                </Text>
              </S.SectionTitle>
              <Icon icon={"chevron-right"} size={24} fill={ColorLightSlate8} />
            </S.Section>
            <S.Section onClick={() => navigate("/coaching/content-list")}>
              <S.SectionTitle>
                <UseImgix srcUrl={"/images/playy.svg"} />
                <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
                  맞춤 놀이
                </Text>
              </S.SectionTitle>
              <Icon icon={"chevron-right"} size={24} fill={ColorLightSlate8} />
            </S.Section>
            <S.TestSection>
              <TestItem
                imgUrl={"/images/record/record_play_4040.svg"}
                testName={"우리 아이 발달 검사"}
                status={"진행중"}
                expirationDate={"2023.05.21"}
                daysleft={20}
              />
              <TestItem
                imgUrl={"/images/record/record_play_4040.svg"}
                testName={"영유아용 기질 검사"}
                status={"종료"}
                expirationDate={"2023.05.21"}
                daysleft={0}
              />
            </S.TestSection>
          </>
        ) : (
          <NoAppliedCoaching />
        )}
      </S.PageWrapper>
    </LayoutMainPage>
  );
};

export default NewCoachingPage;
