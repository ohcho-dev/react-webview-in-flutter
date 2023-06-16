import { useState } from "react";
import { useRecoilState } from "recoil";
import { surveyTempAnswerState } from "../../../store/atom";
import { QuestionItemType, ViewSurveyQuestionListType } from "../../../utils/type";
import { Answer, AnswerSection, QuestionNumber, QuestionTitle, QuestionWrapper } from "./style";

interface QuestionPropsType {
  questionNumber: number;
  question: ViewSurveyQuestionListType;
  totalQuestionNum: number;
}

const QuestionChoice = (props: QuestionPropsType): JSX.Element => {
  const { questionNumber, question, totalQuestionNum } = props;
  const [selectedAnswer, setSelectedAnswer] = useState("0");
  const [surveyAnswer, setSurveyAnswer] = useRecoilState(surveyTempAnswerState);

  const handleAnswerClick = (item: QuestionItemType) => {
    let updatedArr: {
      id: number;
      score?: number;
      item_id: number | null;
      content: string | null;
    }[] = [];
    setSelectedAnswer(item.id.toString());

    const foundAnswer = surveyAnswer.find(answer => answer.id === question.id);
    if (foundAnswer) {
      updatedArr = surveyAnswer.map(answer =>
        answer.id === question.id
          ? { ...answer, score: item.score, item_id: item.id, content: null }
          : answer,
      );
    } else {
      updatedArr = [
        ...surveyAnswer,
        { id: question.id, score: item.score, item_id: item.id, content: null },
      ];
    }
    setSurveyAnswer([...updatedArr]);
  };

  return (
    <QuestionWrapper>
      <QuestionNumber>
        <span>{questionNumber < 10 ? `0${questionNumber}` : questionNumber}</span>
        <span>
          /{totalQuestionNum < 10 && "0"}
          {totalQuestionNum}
        </span>
      </QuestionNumber>
      <QuestionTitle>{question.content}</QuestionTitle>
      <AnswerSection>
        {question.item.map((item: QuestionItemType) => (
          <Answer
            id={item.id.toString()}
            selected={selectedAnswer === item.id.toString()}
            onClick={() => handleAnswerClick(item)}
            key={item.id}
          >
            {item.content}
          </Answer>
        ))}
      </AnswerSection>
    </QuestionWrapper>
  );
};

export default QuestionChoice;
