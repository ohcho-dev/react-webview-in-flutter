import { QuestionItemType, SurveyResultQuestionType } from "../../../utils/type";
import {
  Answer,
  AnswerSection,
  QuestionNumber,
  QuestionTitle,
  QuestionWrapper,
} from "../../Questionnaire/components/style";

interface ResultQuestionPropsType {
  questionNumber: number;
  question: SurveyResultQuestionType;
  totalNum: number;
}

const ResultQuestion = (props: ResultQuestionPropsType): JSX.Element => {
  const { question, questionNumber, totalNum } = props;
  return (
    <QuestionWrapper>
      <QuestionNumber>
        <span>{questionNumber < 10 ? `0${questionNumber}` : questionNumber}</span>
        <span>/{totalNum}</span>
      </QuestionNumber>
      <QuestionTitle>{question.content}</QuestionTitle>
      <AnswerSection>
        {question.question_item.map((item: QuestionItemType) => (
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

export default ResultQuestion;
