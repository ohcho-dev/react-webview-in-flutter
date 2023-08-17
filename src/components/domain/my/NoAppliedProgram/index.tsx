import UseImgix from "components/common/Imgix";
import { useNavigate } from "react-router-dom";
import * as S from "./NoAppliedProgram.styled";
import Text from "components/common/Text";
import {
  ColorLightBlack12,
  ColorLightBlack6,
  ColorLightEltern9Base,
  TextBase1624Medium,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import EmptyBox from "components/common/EmptyBox";

interface NoAppliedProgramProps {
  selectedTab: boolean;
}

const NO_LIST_TEXT_DATA = {
  coaching: {
    title: "아직 신청한 코칭이 없어요.",
    content: "우리아이 맞춤 코칭을 신청해 보세요.",
  },
  class: {
    title: "아직 신청한 클래스가 없어요.",
    content: "우리아이 맞춤 클래스를 신청해 보세요.",
  },
};

const NoAppliedProgram = ({ selectedTab = true }: NoAppliedProgramProps) => {
  const navigate = useNavigate();

  const handleText = (selectedTab: boolean) => {
    if (selectedTab) return NO_LIST_TEXT_DATA.coaching;
    return NO_LIST_TEXT_DATA.class;
  };

  return (
    <S.NotFoundData>
      <UseImgix srcUrl="/images/icon-sparkle.png" alt="thumbnail" />
      <EmptyBox height="2.4rem" />
      <S.TextSection>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack12}>
          {handleText(selectedTab).title}
        </Text>
        <EmptyBox height="0.4rem" />
        <Text variant={TextSm1420Regular} color={ColorLightBlack6}>
          {handleText(selectedTab).content}
        </Text>
      </S.TextSection>
      <EmptyBox height="2.4rem" />
      <S.LinkBtn onClick={() => navigate("/program", { replace: true })}>
        <Text variant={TextBase1624Medium} color={ColorLightEltern9Base}>
          프로그램 보러가기
        </Text>
      </S.LinkBtn>
    </S.NotFoundData>
  );
};

export default NoAppliedProgram;
