import { GetSurveyAnswerType } from "../../../../../types/apis/coaching";
import {
  AnswerSection,
  InputBox,
  InputWrap,
  QuestionNumber,
  QuestionTitle,
  QuestionWrapper,
  Unit,
} from "../../questionnairePage/questionnaire.styled";

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
          <InputBox value={question.content} disabled />
        </InputWrap>
      </AnswerSection>
    </QuestionWrapper>
  );
};

export default ResultQuestionTextLong;
