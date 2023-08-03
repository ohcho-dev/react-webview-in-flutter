import {
  ColorLightBlack7,
  ColorLightSlate8,
  ColorLightSlate9Base,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import * as S from "./QnaStatusBox.styled";
import Text from "components/common/Text";

interface QnaStatusBoxProps {
  onGoingQnaNum: number;
  questionNum: number;
  responseCompletedNum: number;
}

const QnaStatusBox = ({ onGoingQnaNum, questionNum, responseCompletedNum }: QnaStatusBoxProps) => {
  return (
    <S.QnaStatusBox>
      <S.QnaStatusBoxItem>
        <Text variant={TextSm1420Regular} color={ColorLightSlate9Base}>
          질문권
        </Text>
        <Text
          variant={TextLg1826Semibold}
          color={questionNum ? ColorLightBlack7 : ColorLightSlate8}
        >
          {`${questionNum}`}
        </Text>
      </S.QnaStatusBoxItem>
      <S.QnaStatusBoxItem middleOne>
        <Text variant={TextSm1420Regular} color={ColorLightSlate9Base}>
          진행중
        </Text>
        <Text
          variant={TextLg1826Semibold}
          color={onGoingQnaNum ? ColorLightBlack7 : ColorLightSlate8}
        >
          {`${onGoingQnaNum}`}
        </Text>
      </S.QnaStatusBoxItem>
      <S.QnaStatusBoxItem>
        <Text variant={TextSm1420Regular} color={ColorLightSlate9Base}>
          답변완료
        </Text>
        <Text
          variant={TextLg1826Semibold}
          color={responseCompletedNum ? ColorLightBlack7 : ColorLightSlate8}
        >
          {`${responseCompletedNum}`}
        </Text>
      </S.QnaStatusBoxItem>
    </S.QnaStatusBox>
  );
};

export default QnaStatusBox;
