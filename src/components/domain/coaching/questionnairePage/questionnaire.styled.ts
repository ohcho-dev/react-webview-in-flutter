import { ColorLightEltern9Base } from "constants/ldsConstants/global";
import styled from "styled-components";

export const SurveyQuestionWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 110;
`;

export const SurveyCategoryTitle = styled.div`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;

  z-index: 110;

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
    width: 3rem;
    height: 2.4rem;
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

  color: ${ColorLightEltern9Base};

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

export const Unit = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #889096;
  margin-left: 0.5rem;
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
    props.selected ? ColorLightEltern9Base : "rgba(10, 10, 10, 0.8)"};
  background-color: ${(props: { selected: boolean }) => (props.selected ? "#EEF9F7" : "white")};
`;

export const ListScroll = styled.div`
  height: ${(prop: { height?: string }) => prop.height || "calc(100vh - 13rem)"};
  overflow: scroll;
`;

export const InputWrap = styled.div`
  margin: 0 1rem;
  position: relative;

  &:after {
    content: ${(prop: { unit?: string }) => (prop.unit ? `"${prop.unit}"` : ``)};
    width: max-content;
    height: max-content;
    position: absolute;
    top: 0;
    right: 0.3rem;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.4px;
    color: rgba(10, 10, 10, 0.8);
  }
`;

export const InputBox = styled.input`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.8);

  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  position: relative;

  :focus {
    outline: none;
    border-bottom: 1px solid #5ac4b1;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  :disabled {
    background: none;
  }
`;
export const TextWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #f6f6f6;
  border: none;
  border-radius: 0.8rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: rgba(0, 0, 0, 0.8);

  padding: 1.6rem 2rem;
`;
export const TextAreaBox = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  background: #f6f6f6;
  border: none;
  border-radius: 0.8rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: rgba(0, 0, 0, 0.8);

  padding: 1.6rem 2rem;
  resize: none;

  :focus {
    outline: 1px solid #5ac4b1;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const TextAreaLength = styled.div`
  text-align: right;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.3);
`;
