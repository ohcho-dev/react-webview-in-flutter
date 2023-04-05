import { GetSurveyAnswerType } from "../../../utils/type";
import {
  AnswerSection,
  InputWrap,
  QuestionNumber,
  QuestionTitle,
  QuestionWrapper,
  TextWrap,
  Unit,
} from "../../Questionnaire/components/style";

interface ResultQuestionPropsType {
  questionNumber: number;
  question: GetSurveyAnswerType;
  totalNum: number;
}

const ResultQuestionTextLong = (props: ResultQuestionPropsType): JSX.Element => {
  const { question, questionNumber, totalNum } = props;
  return (
    <QuestionWrapper>
      <QuestionNumber>
        <span>{questionNumber < 10 ? `0${questionNumber}` : questionNumber}</span>
        <span>/{totalNum}</span>
      </QuestionNumber>
      <QuestionTitle>
        {question.question.content}
        {question.question.unit && <Unit>{question.question.unit}</Unit>}
      </QuestionTitle>
      <AnswerSection>
        <InputWrap>
          <TextWrap>{question.content}</TextWrap>
        </InputWrap>
      </AnswerSection>
    </QuestionWrapper>
  );
};

export default ResultQuestionTextLong;
