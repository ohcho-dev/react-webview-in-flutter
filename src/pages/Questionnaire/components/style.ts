import styled from "styled-components";
import { COLOR_PALETTE } from "../../../constant/color";

export const SurveyQuestionWrapper = styled.div``;

export const SurveyCategoryTitle = styled.div`
  margin: 0 2rem;
  padding: 1.5rem 1rem;

  font-weight: 500;
  font-size: 1.8rem;
  color: rgba(10, 10, 10, 0.8);

  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  img {
    margin-left: 0.5rem;
  }
`;

export const QuestionGap = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #f6f6f6;
`;

export const QuestionWrapper = styled.div`
  padding: 3rem 2rem;
`;

export const QuestionNumber = styled.div`
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

export const QuestionTitle = styled.div`
  padding: 0 0.5rem;

  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  letter-spacing: -0.04rem;
`;

export const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  margin-top: 3rem;
`;

export const Answer = styled.div`
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
