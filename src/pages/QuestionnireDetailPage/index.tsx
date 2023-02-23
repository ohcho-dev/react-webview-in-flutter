import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSurveyAnswers } from "../../api/questionnaireApi";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { SurveyResultQuestionType } from "../../utils/type";
import {
  ListScroll,
  QuestionGap,
  SurveyCategoryTitle,
  SurveyQuestionWrapper,
} from "../Questionnaire/components/style";
import ResultQuestion from "./components/ResultQuestion";

const QuestionnaireDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: surveyAnswerInfo } = useQuery<{
    id: number;
    name: string;
    survey: {
      result_id: number;
      question: SurveyResultQuestionType[];
    }[];
  }>(queryKeys.surveyAnswerList, () => getSurveyAnswers(id));
  const [answerList, setAnswerList] = useState<SurveyResultQuestionType[]>([]);

  useEffect(() => {
    if (surveyAnswerInfo?.survey.length) {
      let tempAnswerList: SurveyResultQuestionType[] = [];
      surveyAnswerInfo?.survey.map(survey => {
        return survey.question.map(question => {
          return (tempAnswerList = [...tempAnswerList, question]);
        });
      });
      setAnswerList(tempAnswerList);
    }
  }, [surveyAnswerInfo]);

  return (
    <LayoutDetailPage>
      <SurveyQuestionWrapper>
        <SurveyCategoryTitle>
          {surveyAnswerInfo?.name}
          <img alt="form character" src="/images/form-character.svg" />
        </SurveyCategoryTitle>
        <ListScroll height="calc(100vh - 11.4rem)">
          {answerList.map((question: SurveyResultQuestionType, index: number) => {
            return (
              <div key={`${question.content + question.answer_id + index}`}>
                <ResultQuestion
                  questionNumber={index + 1}
                  question={question}
                  totalNum={answerList.length}
                />
                {index !== answerList.length - 1 && (
                  <QuestionGap key={`${question.content + question.answer_id}`} />
                )}
              </div>
            );
          })}
        </ListScroll>
      </SurveyQuestionWrapper>
    </LayoutDetailPage>
  );
};

export default QuestionnaireDetailPage;
