import { useState } from "react";
import styled from "styled-components";
import { COLOR_PALETTE } from "../../../constant/color";

interface QuestionPropsType {
  questionNumber: number;
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
  const { questionNumber } = props;

  const [selectedAnswer, setSelectedAnswer] = useState("0");
  return (
    <QuestionWrapper>
      <QuestionNumber>
        <span>{questionNumber < 10 ? `0${questionNumber}` : questionNumber}</span>
        <span>/12</span>
      </QuestionNumber>
      <QuestionTitle>부모님이 말하면 반응하여 옹알이를 하거나 웃어요.</QuestionTitle>
      <AnswerSection>
        <Answer id={"1"} selected={selectedAnswer === "1"} onClick={() => setSelectedAnswer("1")}>
          잘해요
        </Answer>
        <Answer id={"2"} selected={selectedAnswer === "2"} onClick={() => setSelectedAnswer("2")}>
          때때로 잘 할 수 있어요
        </Answer>
        <Answer id={"3"} selected={selectedAnswer === "3"} onClick={() => setSelectedAnswer("3")}>
          못해요
        </Answer>
      </AnswerSection>
    </QuestionWrapper>
  );
};

export default Question;
