import { useState } from "react";
import { useRecoilState } from "recoil";
import { surveyTempAnswerState } from "../../../recoil/atom";
import { QuestionItemType, QuestionType } from "../../../utils/type";
import { Answer, AnswerSection, QuestionNumber, QuestionTitle, QuestionWrapper } from "./style";

interface QuestionPropsType {
  questionNumber: number;
  question: QuestionType;
  totalQuestionNum: number;
}

const Question = (props: QuestionPropsType): JSX.Element => {
  const { questionNumber, question, totalQuestionNum } = props;
  const [selectedAnswer, setSelectedAnswer] = useState("0");
  const [surveyAnswer, setSurveyAnswer] = useRecoilState(surveyTempAnswerState);

  const handleAnswerClick = (item: QuestionItemType) => {
    let updatedArr: { id: number; score: number; item_id: number }[] = [];
    setSelectedAnswer(item.id.toString());
    const foundAnswer = surveyAnswer.find(answer => answer.id === question.id);
    if (foundAnswer) {
      updatedArr = surveyAnswer.map(answer =>
        answer.id === question.id ? { ...answer, item_id: item.id, score: item.score } : answer,
      );
    } else {
      updatedArr = [...surveyAnswer, { id: question.id, item_id: item.id, score: item.score }];
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

export default Question;
