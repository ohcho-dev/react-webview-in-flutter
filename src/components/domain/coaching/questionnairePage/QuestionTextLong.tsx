import { useState } from "react";
import { useRecoilState } from "recoil";
import { surveyTempAnswerState } from "../../../../store/domain/coaching";
import {
  PostSurveyQuestionListType,
  ViewSurveyQuestionListType,
} from "../../../../types/domain/coaching";

import {
  AnswerSection,
  InputWrap,
  QuestionNumber,
  QuestionTitle,
  QuestionWrapper,
  TextAreaBox,
  TextAreaLength,
} from "./style";

interface QuestionPropsType {
  questionNumber: number;
  question: ViewSurveyQuestionListType;
  totalQuestionNum: number;
}

const QuestionTextLong = (props: QuestionPropsType): JSX.Element => {
  const { questionNumber, question, totalQuestionNum } = props;
  const [surveyAnswer, setSurveyAnswer] = useRecoilState(surveyTempAnswerState);
  const [checkLength, setCheckLength] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCheckLength(e.target.value.length);
    const value: PostSurveyQuestionListType = {
      id: question.id,
      item_id: null,
      content: e.target.value,
    };
    let updateSurveyAnswer = surveyAnswer;
    const foundSurveyAnswerKey = Object.keys(surveyAnswer).find(
      (key: any) => surveyAnswer[key].id === value.id,
    );
    // 값이 비었을 때 삭제
    if (foundSurveyAnswerKey && !e.target.value) {
      updateSurveyAnswer = updateSurveyAnswer.filter(answer => answer.id !== value.id);
      setSurveyAnswer(updateSurveyAnswer);
      return;
    }
    // 입력값이 있을때 수정 or 추가
    if (foundSurveyAnswerKey) {
      updateSurveyAnswer = surveyAnswer.map(answer =>
        answer.id === value.id
          ? { ...answer, item_id: value.item_id, content: value.content }
          : answer,
      );
      setSurveyAnswer(updateSurveyAnswer);
    } else {
      setSurveyAnswer([...surveyAnswer, value]);
    }
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
        <InputWrap>
          <TextAreaBox
            placeholder={`자유롭게 입력해 주세요.`}
            rows={5}
            onChange={e => handleChange(e)}
            maxLength={250}
          />
          <TextAreaLength>{checkLength}/250</TextAreaLength>
        </InputWrap>
      </AnswerSection>
    </QuestionWrapper>
  );
};

export default QuestionTextLong;
