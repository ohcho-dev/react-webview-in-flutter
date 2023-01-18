import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { COLOR_PALETTE } from "../../../constant/color";
import { surveyTempAnswerState } from "../../../recoil/atom";
import { QuestionItemType, QuestionType } from "../../../utils/type";

interface QuestionPropsType {
  questionNumber: number;
  question: QuestionType;
}

const QuestionWrapper = styled.div`
  padding: 3rem 2rem;
`;

const QuestionNumber = styled.div`
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;

  color: ${COLOR_PALETTE.point};
  span:nth-child(1) {
    font-weight: 600;
    font-size: 2.6rem;
  }
  span:nth-child(2) {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;

const QuestionTitle = styled.div`
  padding: 0 0.5rem;

  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  letter-spacing: -0.04rem;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  margin-top: 3rem;
`;

const Answer = styled.div`
  width: 100%;
  height: 4.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props: { selected: boolean }) =>
    props.selected ? "1px solid rgba(90, 196, 177, 0.8)" : "1px solid rgba(0, 0, 0, 0.2)"};
  border-radius: 0.8rem;

  font-weight: 400;
  font-size: 1.6rem;

  color: ${(props: { selected: boolean }) =>
    props.selected ? COLOR_PALETTE.point : "rgba(10, 10, 10, 0.8)"};
  background-color: ${(props: { selected: boolean }) => (props.selected ? "#EEF9F7" : "white")};
`;

const Question = (props: QuestionPropsType): JSX.Element => {
  const { questionNumber, question } = props;
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
        <span>/{question.item.length}</span>
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
