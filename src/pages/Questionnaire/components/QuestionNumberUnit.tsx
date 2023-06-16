import { useRecoilState } from "recoil";
import { surveyTempAnswerState } from "../../../store/atom";
import { PostSurveyQuestionListType, ViewSurveyQuestionListType } from "../../../utils/type";
import {
  AnswerSection,
  InputBox,
  InputWrap,
  QuestionNumber,
  QuestionTitle,
  QuestionWrapper,
  Unit,
} from "./style";

interface QuestionPropsType {
  questionNumber: number;
  question: ViewSurveyQuestionListType;
  totalQuestionNum: number;
}

const QuestionNumberUnit = (props: QuestionPropsType): JSX.Element => {
  const { questionNumber, question, totalQuestionNum } = props;
  const [surveyAnswer, setSurveyAnswer] = useRecoilState(surveyTempAnswerState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > e.target.maxLength) {
      return;
    }
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
          ? { id: value.id, item_id: value.item_id, content: value.content }
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
      <QuestionTitle>
        {question.content}
        {question.unit && <Unit>{question.unit}</Unit>}
      </QuestionTitle>
      <AnswerSection>
        <InputWrap>
          <InputBox
            placeholder={`숫자만 입력해 주세요.`}
            maxLength={5}
            pattern="[0-9]*"
            onChange={handleChange}
          />
        </InputWrap>
      </AnswerSection>
    </QuestionWrapper>
  );
};

export default QuestionNumberUnit;
