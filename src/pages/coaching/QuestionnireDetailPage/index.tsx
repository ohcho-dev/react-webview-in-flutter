import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSurveyAnswers } from "../../../queries/domain/coaching/questionnaireApi";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import UseImgix from "../../../components/common/Imgix";
import {
  ListScroll,
  QuestionGap,
  SurveyCategoryTitle,
  SurveyQuestionWrapper,
} from "../../../components/domain/coaching/questionnairePage/style";
import ResultQuestionChoice from "../../../components/domain/coaching/questionnaireDetailPage/ResultQuestionChoice";
import ResultQuestionNumberUnit from "../../../components/domain/coaching/questionnaireDetailPage/ResultQuestionNumberUnit";
import ResultQuestionTextLong from "../../../components/domain/coaching/questionnaireDetailPage/ResultQuestionTextLong";
import { GetSurveyAnswerType, GetSurveyType } from "../../../types/apis/coaching";
import { coachingQueryKeys } from "../../../queries/domain/coaching/coachingQueryKeys";

const QuestionnaireDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: surveyAnswerInfo } = useQuery<GetSurveyType>(
    coachingQueryKeys.surveyAnswerList,
    () => getSurveyAnswers(id),
  );
  const [answerList, setAnswerList] = useState<GetSurveyAnswerType[]>([]);

  useEffect(() => {
    if (surveyAnswerInfo?.survey.length) {
      let tempAnswerList: GetSurveyAnswerType[] = [];
      surveyAnswerInfo?.survey.map(survey =>
        survey.answer.map(answer => (tempAnswerList = [...tempAnswerList, answer])),
      );
      setAnswerList(tempAnswerList);
    }
  }, [surveyAnswerInfo]);

  return (
    <LayoutDetailPage>
      <SurveyQuestionWrapper>
        <SurveyCategoryTitle>
          {surveyAnswerInfo?.name}
          <UseImgix alt="form character" srcUrl="/images/form-character.svg" />
        </SurveyCategoryTitle>
        <ListScroll height="calc(100vh - 11.4rem)">
          {answerList.map((question: GetSurveyAnswerType, index: number) => {
            switch (question.question.type) {
              case "SVQT_CHOICE":
                return (
                  <div key={`${question.content + question.id + index}`}>
                    <ResultQuestionChoice
                      questionNumber={index + 1}
                      question={question}
                      totalNum={answerList.length}
                    />
                    {index !== answerList.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              case "SVQT_TEXT_LONG":
                return (
                  <div key={`${question.content + question.id + index}`}>
                    <ResultQuestionTextLong
                      questionNumber={index + 1}
                      question={question}
                      totalNum={answerList.length}
                    />
                    {index !== answerList.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              case "SVQT_TEXT_SHORT":
                return (
                  <div key={`${question.content + question.id + index}`}>
                    <ResultQuestionChoice
                      questionNumber={index + 1}
                      question={question}
                      totalNum={answerList.length}
                    />
                    {index !== answerList.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              case "SVQT_NUMBER":
                return (
                  <div key={`${question.content + question.id + index}`}>
                    <ResultQuestionNumberUnit
                      questionNumber={index + 1}
                      question={question}
                      totalNum={answerList.length}
                    />
                    {index !== answerList.length - 1 && (
                      <QuestionGap key={`${question.content + question.id}`} />
                    )}
                  </div>
                );
              default:
                return false;
            }
          })}
        </ListScroll>
      </SurveyQuestionWrapper>
    </LayoutDetailPage>
  );
};

export default QuestionnaireDetailPage;
