import { GetSurveyAnswerType } from "../../../../types/apis/coaching";
import { QuestionItemType } from "../../../../types/apis/program";
import {
  Answer,
  AnswerSection,
  QuestionNumber,
  QuestionTitle,
  QuestionWrapper,
} from "../questionnairePage/style";

interface ResultQuestionPropsType {
  questionNumber: number;
  question: GetSurveyAnswerType;
  totalNum: number;
}

const ResultQuestionChoice = (props: ResultQuestionPropsType): JSX.Element => {
  const { question, questionNumber, totalNum } = props;
  return (
    <QuestionWrapper>
      <QuestionNumber>
        <span>{questionNumber < 10 ? `0${questionNumber}` : questionNumber}</span>
        <span>/{totalNum}</span>
      </QuestionNumber>
      <QuestionTitle>{question.question.content}</QuestionTitle>
      <AnswerSection>
        {question.question.item.map((item: QuestionItemType) => (
          <Answer
            id={item.id.toString()}
            selected={question.answered_item_id.toString() === item.id.toString()}
            key={item.id}
          >
            {item.content}
          </Answer>
        ))}
      </AnswerSection>
    </QuestionWrapper>
  );
};

export default ResultQuestionChoice;
