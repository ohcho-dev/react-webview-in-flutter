import { useNavigate } from "react-router-dom";

import * as S from "./RecordGrade.styled";
import UseImgix from "../../../../../components/common/Imgix";
import Icon from "components/common/Icon";
import {
  ColorLightEltern9Base,
  ColorLightSlate8,
  TextSm1420Semibold,
} from "lds-common/src/constants/tokens/global";
import Text from "components/common/Text";

const RecordGrade = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.FlexBox style={{ padding: "0.4rem 0 0.6rem" }}>
        <S.Title>기록 등급</S.Title>
        <S.QuestionButton onClick={() => navigate("/record/explanation")}>
          <UseImgix srcUrl="/images/record/record_info-circle.svg" />
          <S.QuestionText>왜 기록해야 하나요?</S.QuestionText>
        </S.QuestionButton>
      </S.FlexBox>

      <S.FlexBox>
        <S.GradeWrap>
          <UseImgix srcUrl="/images/record/record_sprout.svg" />
          <S.GradeText>새싹</S.GradeText>
        </S.GradeWrap>
        <S.UtilWrap onClick={() => navigate("/record/stamp-reward")}>
          <S.CountChip>
            <Text variant={TextSm1420Semibold} color={ColorLightEltern9Base}>
              10개 기록
            </Text>
          </S.CountChip>
          <Icon fill={ColorLightSlate8} icon={"chevron-right"} size={24} />
        </S.UtilWrap>
      </S.FlexBox>
    </S.Container>
  );
};

export default RecordGrade;
