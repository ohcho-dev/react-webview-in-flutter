import styled from "styled-components";
import { COLOR_PALETTE } from "../../../constant/color";

export const SurveyQuestionWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 110;
`;

export const SurveyCategoryTitle = styled.div`
  padding: 1.5rem 1rem;
  font-weight: 500;
  font-size: 1.8rem;
  color: rgba(10, 10, 10, 0.8);
  border-bottom: ${(prop: { scroll?: number }) =>
    prop.scroll === 0 ? "0.1rem solid rgba(0, 0, 0, 0.15)" : ""};
  box-shadow: ${(prop: { scroll?: number }) =>
    prop.scroll === 0 ? "" : "0px 1px 15px rgba(0, 0, 0, 0.05)"};

  img {
    margin-left: 0.5rem;
  }

  span {
    margin-left: 2rem;
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
  padding-left: 1rem;
  margin-bottom: 0.5rem;

  color: ${COLOR_PALETTE.point};

  span:nth-child(1) {
    font-weight: 600;
    font-size: 2.6rem;
    margin-right: 0.2rem;
    letter-spacing: -0.04rem;
  }
  span:nth-child(2) {
    font-weight: 400;
    font-size: 1.8rem;
    letter-spacing: -0.04rem;
    opacity: 0.5;
  }
`;

export const QuestionTitle = styled.div`
  padding: 0 1rem;

  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  letter-spacing: -0.04rem;
  word-break: keep-all;
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

export const ListScroll = styled.div`
  height: calc(100vh - 13rem);
  overflow: scroll;
`;
